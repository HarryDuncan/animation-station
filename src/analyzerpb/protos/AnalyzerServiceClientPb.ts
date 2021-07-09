/**
 * @fileoverview gRPC-Web generated client stub for analyzer
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as protos_analyzer_pb from '../protos/analyzer_pb';


export class TrackAnalyzerServiceClient {
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

  methodInfoinitAnalyzer = new grpcWeb.AbstractClientBase.MethodInfo(
    protos_analyzer_pb.InitResponse,
    (request: protos_analyzer_pb.InitRequest) => {
      return request.serializeBinary();
    },
    protos_analyzer_pb.InitResponse.deserializeBinary
  );

  initAnalyzer(
    request: protos_analyzer_pb.InitRequest,
    metadata: grpcWeb.Metadata | null): Promise<protos_analyzer_pb.InitResponse>;

  initAnalyzer(
    request: protos_analyzer_pb.InitRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: protos_analyzer_pb.InitResponse) => void): grpcWeb.ClientReadableStream<protos_analyzer_pb.InitResponse>;

  initAnalyzer(
    request: protos_analyzer_pb.InitRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: protos_analyzer_pb.InitResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/analyzer.TrackAnalyzerService/initAnalyzer',
        request,
        metadata || {},
        this.methodInfoinitAnalyzer,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/analyzer.TrackAnalyzerService/initAnalyzer',
    request,
    metadata || {},
    this.methodInfoinitAnalyzer);
  }

  methodInfostreamTrack = new grpcWeb.AbstractClientBase.MethodInfo(
    protos_analyzer_pb.DataPoints,
    (request: protos_analyzer_pb.TrackData) => {
      return request.serializeBinary();
    },
    protos_analyzer_pb.DataPoints.deserializeBinary
  );

  streamTrack(
    request: protos_analyzer_pb.TrackData,
    metadata: grpcWeb.Metadata | null): Promise<protos_analyzer_pb.DataPoints>;

  streamTrack(
    request: protos_analyzer_pb.TrackData,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: protos_analyzer_pb.DataPoints) => void): grpcWeb.ClientReadableStream<protos_analyzer_pb.DataPoints>;

  streamTrack(
    request: protos_analyzer_pb.TrackData,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: protos_analyzer_pb.DataPoints) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/analyzer.TrackAnalyzerService/streamTrack',
        request,
        metadata || {},
        this.methodInfostreamTrack,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/analyzer.TrackAnalyzerService/streamTrack',
    request,
    metadata || {},
    this.methodInfostreamTrack);
  }

  methodInfoanalyzeStream = new grpcWeb.AbstractClientBase.MethodInfo(
    protos_analyzer_pb.DataPoints,
    (request: protos_analyzer_pb.StreamData) => {
      return request.serializeBinary();
    },
    protos_analyzer_pb.DataPoints.deserializeBinary
  );

  analyzeStream(
    request: protos_analyzer_pb.StreamData,
    metadata: grpcWeb.Metadata | null): Promise<protos_analyzer_pb.DataPoints>;

  analyzeStream(
    request: protos_analyzer_pb.StreamData,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: protos_analyzer_pb.DataPoints) => void): grpcWeb.ClientReadableStream<protos_analyzer_pb.DataPoints>;

  analyzeStream(
    request: protos_analyzer_pb.StreamData,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: protos_analyzer_pb.DataPoints) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/analyzer.TrackAnalyzerService/analyzeStream',
        request,
        metadata || {},
        this.methodInfoanalyzeStream,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/analyzer.TrackAnalyzerService/analyzeStream',
    request,
    metadata || {},
    this.methodInfoanalyzeStream);
  }

}

