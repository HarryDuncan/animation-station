from concurrent import futures
import logging

import grpc
import  analyzer_pb2
import analyzer_pb2_grpc


class Greeter(analyzer_pb2_grpc.HelloServiceServicer):

  def sayHello(self, request, context):
    print('prot')
    return analyzer_pb2.HelloResponse(reply='Hello from python, %s!' % request.greeting)

  # def SayHelloAgain(self, request, context):
  #   return helloworld_pb2.HelloReply(message='Hello again, %s!' % request.name)

def serve():
    # sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    # server_address = ('localhost', 5000)
    # print(sys.stderr, 'starting up on %s port %s' % server_address)
    # sock.bind(server_address)
    # sock.listen(1)
    # while True:
    # # Wait for a connection
    #     print(sys.stderr, 'waiting for a connection')
    #     connection, client_address = sock.accept()
    server = grpc.server(futures.ThreadPoolExecutor(max_workers=10))
    analyzer_pb2_grpc.add_HelloServiceServicer_to_server(Greeter(), server)
    print('prot')
    server.add_insecure_port('[::]:8080')
    server.start()
    server.wait_for_termination()


if __name__ == '__main__':
    logging.basicConfig()
    serve()
