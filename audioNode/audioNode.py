from concurrent import futures
import logging
import sys
import os
import grpc


import essentia, essentia.standard, essentia.streaming
from essentia.streaming import *


import audioNode_pb2
import audioNode_pb2_grpc

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
        if self.playing:
            return audioNode_pb2.ServiceResponse(reply='Track Playing', error=False)
        else:
            self.playing = True
            try:
                # self.audioFileURLS[self.trackIndex]
                filePath ='audio/YTP.aiff'
                print(filePath)
                loader = streaming.MonoLoader(filename=filePath)()
                print('asdasdasd')
                run(loader)
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
    logging.basicConfig()
    serve()
