from concurrent import futures
import logging
import sys

import grpc


import essentia
from essentia.streaming import *

import analyzer_pb2
import analyzer_pb2_grpc


class AudioNode(audioNode_pb2_grpc.TrackAnalyzerServiceServicer):

 ## Sets up the initial connection with client
  def InitAnalyzer(self, request, context):
    print('heyyy')
    return analyzer_pb2.InitResponse(initResponseMessage='Connected To Analyzer')


  def AnalyzeStream(self, request, context):
      print('Analyzing stream')
      print(self)
      print(request)
      print(context)
      return analyzer_pb2.DataPoints()

def serve():
    server = grpc.server(futures.ThreadPoolExecutor(max_workers=10))
    analyzer_pb2_grpc.add_TrackAnalyzerServiceServicer_to_server(Analyzer(), server)
    server.add_insecure_port('[::]:8080')
    server.start()
    server.wait_for_termination()


if __name__ == '__main__':
    logging.basicConfig()
    serve()
