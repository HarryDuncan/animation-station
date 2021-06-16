/**
 * @fileoverview gRPC-Web generated client stub for analyzer
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as proto_analyzer_pb from '../proto/analyzer_pb';


export class HelloServiceClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodInfosayHello = new grpcWeb.AbstractClientBase.MethodInfo(
    proto_analyzer_pb.HelloResponse,
    (request: proto_analyzer_pb.HelloRequest) => {
      return request.serializeBinary();
    },
    proto_analyzer_pb.HelloResponse.deserializeBinary
  );

  sayHello(
    request: proto_analyzer_pb.HelloRequest,
    metadata: grpcWeb.Metadata | null): Promise<proto_analyzer_pb.HelloResponse>;

  sayHello(
    request: proto_analyzer_pb.HelloRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: proto_analyzer_pb.HelloResponse) => void): grpcWeb.ClientReadableStream<proto_analyzer_pb.HelloResponse>;

  sayHello(
    request: proto_analyzer_pb.HelloRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: proto_analyzer_pb.HelloResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/analyzer.HelloService/sayHello',
        request,
        metadata || {},
        this.methodInfosayHello,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/analyzer.HelloService/sayHello',
    request,
    metadata || {},
    this.methodInfosayHello);
  }

}

