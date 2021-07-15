from concurrent import futures
import logging
import sys

import grpc


import essentia
from essentia.streaming import *

import audioNode_pb2
import audioNode_pb2_grpc

## Import other internal modules


class AudioNode(audioNode_pb2_grpc.AudioNodeServiceServicer):

    audioFileURLS = []
    trackIndex = 0
    ## Sets up the initial connection with client
    def InitializeControls(self, request, context):

        audioFileURLS = request.audioFileNames
        trackIndex = request.trackIndex
        print('heyyyyyy')
        return audioNode_pb2.InitControllerResponse(reply='Connected To Audio Node', error=False)

    def PlayTrack(self, request, context):
        print(self.audioFileURLS)
        print(self.audioFileURLS[self.trackIndex])
        try:

            loader = MonoLoader(filename = audioFileURLS[trackIndex])
            frameCutter = FrameCutter(frameSize = 1024, hopSize = 512)
            w = Windowing(type = 'hann')
            spec = Spectrum()
            mfcc = MFCC()
            pool = essentia.Pool()
            essentia.run(loader)
            return audioNode_pb2.ServiceResponse(reply='Track Playing', error=False)
        except:
            print('error occured')
            return audioNode_pb2.ServiceResponse(reply='Error Occured', error=True)



## Connects audioNode to envoy proxy
def serve():
    server = grpc.server(futures.ThreadPoolExecutor(max_workers=10))
    audioNode_pb2_grpc.add_AudioNodeServiceServicer_to_server(AudioNode(), server)
    server.add_insecure_port('[::]:8080')
    server.start()
    server.wait_for_termination()



if __name__ == '__main__':
    print("Hello World")
    logging.basicConfig()
    serve()
