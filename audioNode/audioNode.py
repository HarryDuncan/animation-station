from concurrent import futures
import logging
import sys
import os
import grpc

import argparse
import queue
import sys
import threading

import sounddevice as sd
import soundfile as sf


import essentia
from essentia.streaming import *


import audioNode_pb2
import audioNode_pb2_grpc


from struct import unpack
## Import other internal modules


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
        frameSize = 512
        hopSize = 256
        numberBands = 96

        # analysis parameters
        patchSize = 64
        displaySize = 10

        # bufferSize = patchSize * hopSize

        blockS = 2048
        buffersize = 20

        q = queue.Queue(maxsize=buffersize)
        event = threading.Event()

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
            return audioNode_pb2.ServiceResponse(reply='Track Playing', error=False)
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
                    for _ in range(buffersize):
                        data = f.read(blockS)
                        if not len(data):
                            break
                        q.put_nowait(data)  # Pre-fill queue
                    stream = sd.OutputStream(
                        samplerate=f.samplerate, blocksize=blockS,
                        device=2, channels=f.channels,
                        callback=callback, finished_callback=event.set)
                    with stream:
                        timeout = blockS * bufferSize / f.samplerate
                        while len(data):
                            data = f.read(blockS)
                            q.put(data, timeout=timeout)
                            print(data)
                        event.wait()  # Wait until playback is finished
                #
                # buffer = np.zeros(bufferSize, dtype='float32')
                #
                # vimp = VectorInput(buffer)
                #
                # fc = FrameCutter(frameSize=frameSize, hopSize=hopSize)

                # print(essentia.streaming)
                # loader = essentia.streaming.MonoLoader(filename=filePath)
                #
                # frameCutter = FrameCutter(frameSize = 1024, hopSize = 512)
                # w = Windowing(type = 'hann')
                # spec = Spectrum()
                # mfcc = MFCC()
                # pool = essentia.Pool()
                #
                #
                # loader.audio >> frameCutter.signal
                # frameCutter.frame >> w.frame >> spec.frame
                # spec.spectrum >> mfcc.spectrum
                # mfcc.bands >> None
                # mfcc.mfcc >> (pool, 'lowlevel.mfcc')
                #
                #
                #
                # essentia.run(loader)
                # print('Pool contains %d frames of MFCCs' % len(pool['lowlevel.mfcc']))
                return audioNode_pb2.ServiceResponse(reply='Track Playing', error=False)
            except Exception as e:
                return audioNode_pb2.ServiceResponse(reply=e, error=True)


## Connects audioNode to envoy proxy
def serve():
    server = grpc.server(futures.ThreadPoolExecutor(max_workers=10))
    audioNode_pb2_grpc.add_AudioNodeServiceServicer_to_server(AudioNode(), server)
    server.add_insecure_port('[::]:8080')
    server.start()
    server.wait_for_termination()



if __name__ == '__main__':
    print(sd.query_devices())
    print("Path at terminal when executing this file")
    print(os.getcwd() + "\n")
    logging.basicConfig()
    serve()
