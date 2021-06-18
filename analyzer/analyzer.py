from concurrent import futures
import logging

import grpc
import  analyzer_pb2
import analyzer_pb2_grpc


class Analyzer(analyzer_pb2_grpc.AnalyzerServiceServicer):

  def initAnalyzer(self, request, context):
    return analyzer_pb2.InitResponse(initResponseMessage='Connected To Analyzer')

  def analyzeStream(self, request, context):
    return analyzer_pb2.DataPoints()

def serve():
    server = grpc.server(futures.ThreadPoolExecutor(max_workers=10))
    analyzer_pb2_grpc.add_AnalyzerServiceServicer_to_server(Analyzer(), server)
    server.add_insecure_port('[::]:8080')
    server.start()
    server.wait_for_termination()


if __name__ == '__main__':
    logging.basicConfig()
    serve()
