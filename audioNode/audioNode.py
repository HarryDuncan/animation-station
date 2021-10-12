from concurrent import futures
import logging
import sys
import os
import grpc

import argparse
import queue
import sys
import threading
import numpy as np
import sounddevice as sd
import soundfile as sf
import pickle

import essentia
from essentia.streaming import *
from essentia import Pool, run, array, reset
import audioNode_pb2
import audioNode_pb2_grpc

from modules.controller import TrackController

## Import other internal modules


class AudioNode(audioNode_pb2_grpc.AudioNodeServiceServicer):

    def __init__(self):
        # audioPlayMode - type of playback track|live
        self.audioPlayMode = 'tracks'
        self.sd = None
        self.controller = None

    def InitializeAudioNode(self, request, context):
        arr = os.listdir('audio')
        print(arr)
        return audioNode_pb2.InitializeAudioNodeResponse(isInitialized=True)

    ## Sets up the initial connection with client
    def InitializeControls(self, request, context):
        self.controller = TrackController()
        self.controller.setUpTrackController(request)

        return audioNode_pb2.InitControllerResponse(isConnected=True)

## CONTROLS
    def PlayTrack(self, request, context):


        sampleRate = 16000
        frameSize = 1024
        hopSize = 512
        numberBands = 96

        # analysis parameters
        patchSize = 64
        displaySize = 10

        # bufferSize = patchSize * hopSize

        blockS = 2048
        buffersize = patchSize * hopSize

        q = queue.Queue(maxsize=buffersize)
        event = threading.Event()



        # Essentia stuff
        buffer = np.zeros(buffersize, dtype='float32')
        vimp = VectorInput(buffer)


        fc = FrameCutter(frameSize=frameSize, hopSize=hopSize)




        frameCutter = FrameCutter(frameSize = 1024, hopSize = 512)
        w = Windowing(type = 'hann')
        spec = Spectrum()
        mfcc = MFCC()
        pool = Pool()


        vimp.data >> frameCutter.signal
        frameCutter.frame >> w.frame >> spec.frame
        spec.spectrum >> mfcc.spectrum
        mfcc.bands >> None
        mfcc.mfcc >> (pool, 'lowlevel.mfcc')





        def callback(outdata, frames, time, status):

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
                filePath ='audio/heliotropic.aiff'
                # self.audioFileURLS[self.trackIndex]
                with sf.SoundFile(filePath) as f:
                    for _ in range(20):
                        data = f.read(blockS)
                        if not len(data):
                            break
                        q.put_nowait(data)  # Pre-fill queue
                    self.sd = sd.OutputStream(
                        samplerate=f.samplerate, blocksize=blockS,
                        device=1, channels=f.channels,
                        callback=callback, finished_callback=event.set)
                    with stream:
                        timeout = blockS * buffersize / f.samplerate
                        while len(data):
                            data = f.read(blockS)
                            q.put(data, timeout=timeout)
                            yield audioNode_pb2.StreamResponse(streamData=data)
                            print(data)
                        event.wait()  # Wait until playback is finished


                return audioNode_pb2.StreamResponse(streamData='done')
            except Exception as e:
                print(e)
                return audioNode_pb2.StreamResponse(streamData='error')


    def PauseTrack(self, request, context):
        self.sd.stop()
        self.controller.setPaused()
        return audioNode_pb2.InitControllerResponse(reply='Paused', error=False)

    def Forward(self, request, context):
        self.sd.stop()


    def Rewind(self, request, context):
        self.sd.stop()


    def SeekTrack(self, request, context):
        self.sd.stop()



## Connects audioNode to envoy proxy
def serve():
    server = grpc.server(futures.ThreadPoolExecutor(max_workers=10))
    audioNode_pb2_grpc.add_AudioNodeServiceServicer_to_server(AudioNode(), server)
    server.add_insecure_port('[::]:8080')
    server.start()
    server.wait_for_termination()




if __name__ == '__main__':
    logging.basicConfig()
    serve()
