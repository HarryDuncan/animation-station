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

## Connection
import websockets
import socket
import asyncio
import json
from struct import unpack
## Import other internal modules
HOST = 'ws://127.0.0.1:8080'

## s = websocket.create_connection(HOST)

class AudioNode(audioNode_pb2_grpc.AudioNodeServiceServicer):

    audioFileURLS = []
    trackIndex = 0
    playing = False



    ## Sets up the initial connection with client
    def InitializeControls(self, request, context):


        self.audioFileURLS = request.audioFileNames
        self.trackIndex = request.trackIndex
        return audioNode_pb2.InitControllerResponse(reply='Connected To Audio Node', error=False)

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


        ##################
        ## CALLBACK FOR SD
        ######################

        #def sendData(data):
        #    print(data)
        #    return audioNode_pb2.StreamResponse(streamData=data.tobytes())
        #########################
        #### AUDIO CALCULATIONS TAKE PLACE HERE
        ###############################

        # print(outdata)
        # print(frames)
        # print(time)
        # # update audio buffer
        # buffer[:] = array(unpack('f' * blockS, outdata))
        # # generate predictions
        # reset(vimp)
        # run(vimp)


        #############################################
        ##### RETURN GRPC STREM DATA IN THIS FUNCTION
        ##############################################


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







        if self.playing:
            print('playing')
        else:
            self.playing = True
            try:

                # self.audioFileURLS[self.trackIndex]
                filePath ='audio/YTP.aiff'
                print(sd.query_devices())
                print("Path at terminal when executing this file")
                print(os.getcwd() + "\n")
                print('deviced should be printed')
                with sf.SoundFile(filePath) as f:
                    for _ in range(20):
                        data = f.read(blockS)
                        if not len(data):
                            break
                        q.put_nowait(data)  # Pre-fill queue
                    stream = sd.OutputStream(
                        samplerate=f.samplerate, blocksize=blockS,
                        device=1, channels=f.channels,
                        callback=callback, finished_callback=event.set)
                    with stream:
                        timeout = blockS * buffersize / f.samplerate
                        while len(data):
                            data = f.read(blockS)
                            q.put(data, timeout=timeout)
                            yield audioNode_pb2.StreamResponse(streamData='hi')
                            print(data)
                        event.wait()  # Wait until playback is finished


                #


                #
                #

                #
                #
                #
                # essentia.run(loader)
                # print('Pool contains %d frames of MFCCs' % len(pool['lowlevel.mfcc']))
                return audioNode_pb2.StreamResponse(streamData='done')
            except Exception as e:
                print(e)
                return audioNode_pb2.StreamResponse(streamData='error')


## Connects audioNode to envoy proxy
def serve():
    server = grpc.server(futures.ThreadPoolExecutor(max_workers=10))
    audioNode_pb2_grpc.add_AudioNodeServiceServicer_to_server(AudioNode(), server)
    server.add_insecure_port('[::]:8080')
    server.start()
    server.wait_for_termination()




if __name__ == '__main__':
    print(sd.query_devices())
    logging.basicConfig()

    serve()
