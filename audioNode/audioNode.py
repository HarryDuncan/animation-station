# System Imports
from concurrent import futures
import logging
import sys
import os


import argparse
import queue
import sys
import threading
import numpy as np

# Sound
import sounddevice as sd


import essentia
from essentia.streaming import *
from essentia import Pool, run, array, reset

# GRPC
import grpc
import audioNode_pb2
import audioNode_pb2_grpc

# Project Classes
from trackMode.controller import TrackController

## Project modules
from modules.soundFileHelpers import standardSDCallback
from modules.fileHelpers import *

class AudioNode(audioNode_pb2_grpc.AudioNodeServiceServicer):

    def __init__(self):
        # audioPlayMode - type of playback track|live
        self.audioPlayMode = 'tracks'
        self.sd = None
        self.controller = None
        self.sf = None

    def InitializeAudioNode(self, request, context):
        playlists =  fileHelpers.getPlaylists()
        return audioNode_pb2.InitializeAudioNodeResponse(isInitialized=True)

    ## Sets up the initial connection with client
    def InitializeControls(self, request, context):
        if request.controlRequestType == 'tracks':
            self.controller = TrackController()



        return audioNode_pb2.InitControllerResponse(isConnected=True)

## 'track' AUDIO PLAY MODE CONTROLS

    def setUpTrack(self, request, context):
        print('setting up track')


    def PlayTrack(self, request, context):

        #<------ SF - Variables ------->
        # Block size:
        blockS = 2048

        #
        hopSize = 512
        patchSize = 64
        buffersize = patchSize * hopSize
        q = queue.Queue(maxsize=buffersize)
        event = threading.Event()
        def cllback(outdata, frames, time, status):
            assert frames == blockS
            if status.output_underflow:
                print('Output underflow: increase blocksize?', file=sys.stderr)
                raise sd.CallbackAbort
            assert not status
            try:
                data = q.get_nowait()
            except queue.Empty as e:
                print('Buffer is empty: increase buffersize?', file=sys.stderr)
                raise sd.CallbackAbort from e
            if len(data) < len(outdata):
                outdata[:len(data)] = data
                outdata[len(data):].fill(0)
                raise sd.CallbackStop
            else:
                outdata[:] = data

        if self.controller.getControllerStatus() == 'playing':
            self.controller.setPaused()
            self.sd.stop()
        else:
            self.controller.setPlaying()
            try:
                for _ in range(20):
                    data = self.sf.read(blockS)
                    if not len(data):
                        break
                    q.put_nowait(data)  # Pre-fill queue
                self.sd = sd.OutputStream(
                    samplerate=self.sf.samplerate, blocksize=blockS,
                    device=1, channels=self.sf.channels,
                    callback=cllback, finished_callback=event.set)
                with self.sd:
                    timeout = blockS * buffersize / self.sf.samplerate
                    while (len(data)) and (self.controller.controllerStatus == 'playing'):
                        data = self.sf.read(blockS)
                        q.put(data, timeout=timeout)
                        print(self.sf.tell())
                        yield audioNode_pb2.StreamResponse(streamData=data)

                    event.wait()  # Wait until playback is finished


                return audioNode_pb2.StreamResponse(responseMessage='done',streamData=[0])
            except Exception as e:
                print(e)
                return audioNode_pb2.StreamResponse(responseMessage='error',streamData=[0])


    def PauseTrack(self, request, context):
        self.sd.stop()
        self.controller.setPaused()
        return audioNode_pb2.StreamResponse(responseMessage='paused', streamData=[0])
        return audioNode_pb2.ServiceResponse(reply='Paused')

    def Forward(self, request, context):
        self.sd.stop()
        return audioNode_pb2.ServiceResponse(reply='Forward')


    def Rewind(self, request, context):
        self.sd.stop()
        return audioNode_pb2.ServiceResponse(reply='Rewind')


    def SeekTrack(self, request, context):
        self.sd.stop()
        return audioNode_pb2.ServiceResponse(reply='Seek')





## GRPC CONNECTION: Connects audioNode to envoy proxy
def serve():
    server = grpc.server(futures.ThreadPoolExecutor(max_workers=10))
    audioNode_pb2_grpc.add_AudioNodeServiceServicer_to_server(AudioNode(), server)
    server.add_insecure_port('[::]:8080')
    server.start()
    server.wait_for_termination()




if __name__ == '__main__':
    logging.basicConfig()
    serve()
