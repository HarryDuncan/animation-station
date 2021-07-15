/**
 * @fileoverview gRPC-Web generated client stub for audioNode
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as protos_audioNode_pb from '../protos/audioNode_pb';


export class AudioNodeServiceClient {
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

  methodInfoInitializeControls = new grpcWeb.AbstractClientBase.MethodInfo(
    protos_audioNode_pb.InitControllerResponse,
    (request: protos_audioNode_pb.InitControllerRequest) => {
      return request.serializeBinary();
    },
    protos_audioNode_pb.InitControllerResponse.deserializeBinary
  );

  initializeControls(
    request: protos_audioNode_pb.InitControllerRequest,
    metadata: grpcWeb.Metadata | null): Promise<protos_audioNode_pb.InitControllerResponse>;

  initializeControls(
    request: protos_audioNode_pb.InitControllerRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: protos_audioNode_pb.InitControllerResponse) => void): grpcWeb.ClientReadableStream<protos_audioNode_pb.InitControllerResponse>;

  initializeControls(
    request: protos_audioNode_pb.InitControllerRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: protos_audioNode_pb.InitControllerResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/audioNode.AudioNodeService/InitializeControls',
        request,
        metadata || {},
        this.methodInfoInitializeControls,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/audioNode.AudioNodeService/InitializeControls',
    request,
    metadata || {},
    this.methodInfoInitializeControls);
  }

  methodInfoPlayTrack = new grpcWeb.AbstractClientBase.MethodInfo(
    protos_audioNode_pb.ServiceResponse,
    (request: protos_audioNode_pb.ControlRequest) => {
      return request.serializeBinary();
    },
    protos_audioNode_pb.ServiceResponse.deserializeBinary
  );

  playTrack(
    request: protos_audioNode_pb.ControlRequest,
    metadata: grpcWeb.Metadata | null): Promise<protos_audioNode_pb.ServiceResponse>;

  playTrack(
    request: protos_audioNode_pb.ControlRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: protos_audioNode_pb.ServiceResponse) => void): grpcWeb.ClientReadableStream<protos_audioNode_pb.ServiceResponse>;

  playTrack(
    request: protos_audioNode_pb.ControlRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: protos_audioNode_pb.ServiceResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/audioNode.AudioNodeService/PlayTrack',
        request,
        metadata || {},
        this.methodInfoPlayTrack,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/audioNode.AudioNodeService/PlayTrack',
    request,
    metadata || {},
    this.methodInfoPlayTrack);
  }

  methodInfoPauseTrack = new grpcWeb.AbstractClientBase.MethodInfo(
    protos_audioNode_pb.ServiceResponse,
    (request: protos_audioNode_pb.ControlRequest) => {
      return request.serializeBinary();
    },
    protos_audioNode_pb.ServiceResponse.deserializeBinary
  );

  pauseTrack(
    request: protos_audioNode_pb.ControlRequest,
    metadata: grpcWeb.Metadata | null): Promise<protos_audioNode_pb.ServiceResponse>;

  pauseTrack(
    request: protos_audioNode_pb.ControlRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: protos_audioNode_pb.ServiceResponse) => void): grpcWeb.ClientReadableStream<protos_audioNode_pb.ServiceResponse>;

  pauseTrack(
    request: protos_audioNode_pb.ControlRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: protos_audioNode_pb.ServiceResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/audioNode.AudioNodeService/PauseTrack',
        request,
        metadata || {},
        this.methodInfoPauseTrack,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/audioNode.AudioNodeService/PauseTrack',
    request,
    metadata || {},
    this.methodInfoPauseTrack);
  }

  methodInfoRewind = new grpcWeb.AbstractClientBase.MethodInfo(
    protos_audioNode_pb.ServiceResponse,
    (request: protos_audioNode_pb.ControlRequest) => {
      return request.serializeBinary();
    },
    protos_audioNode_pb.ServiceResponse.deserializeBinary
  );

  rewind(
    request: protos_audioNode_pb.ControlRequest,
    metadata: grpcWeb.Metadata | null): Promise<protos_audioNode_pb.ServiceResponse>;

  rewind(
    request: protos_audioNode_pb.ControlRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: protos_audioNode_pb.ServiceResponse) => void): grpcWeb.ClientReadableStream<protos_audioNode_pb.ServiceResponse>;

  rewind(
    request: protos_audioNode_pb.ControlRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: protos_audioNode_pb.ServiceResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/audioNode.AudioNodeService/Rewind',
        request,
        metadata || {},
        this.methodInfoRewind,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/audioNode.AudioNodeService/Rewind',
    request,
    metadata || {},
    this.methodInfoRewind);
  }

  methodInfoForward = new grpcWeb.AbstractClientBase.MethodInfo(
    protos_audioNode_pb.ServiceResponse,
    (request: protos_audioNode_pb.ControlRequest) => {
      return request.serializeBinary();
    },
    protos_audioNode_pb.ServiceResponse.deserializeBinary
  );

  forward(
    request: protos_audioNode_pb.ControlRequest,
    metadata: grpcWeb.Metadata | null): Promise<protos_audioNode_pb.ServiceResponse>;

  forward(
    request: protos_audioNode_pb.ControlRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: protos_audioNode_pb.ServiceResponse) => void): grpcWeb.ClientReadableStream<protos_audioNode_pb.ServiceResponse>;

  forward(
    request: protos_audioNode_pb.ControlRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: protos_audioNode_pb.ServiceResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/audioNode.AudioNodeService/Forward',
        request,
        metadata || {},
        this.methodInfoForward,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/audioNode.AudioNodeService/Forward',
    request,
    metadata || {},
    this.methodInfoForward);
  }

  methodInfoSetVolume = new grpcWeb.AbstractClientBase.MethodInfo(
    protos_audioNode_pb.ServiceResponse,
    (request: protos_audioNode_pb.VolumeRequest) => {
      return request.serializeBinary();
    },
    protos_audioNode_pb.ServiceResponse.deserializeBinary
  );

  setVolume(
    request: protos_audioNode_pb.VolumeRequest,
    metadata: grpcWeb.Metadata | null): Promise<protos_audioNode_pb.ServiceResponse>;

  setVolume(
    request: protos_audioNode_pb.VolumeRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: protos_audioNode_pb.ServiceResponse) => void): grpcWeb.ClientReadableStream<protos_audioNode_pb.ServiceResponse>;

  setVolume(
    request: protos_audioNode_pb.VolumeRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: protos_audioNode_pb.ServiceResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/audioNode.AudioNodeService/SetVolume',
        request,
        metadata || {},
        this.methodInfoSetVolume,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/audioNode.AudioNodeService/SetVolume',
    request,
    metadata || {},
    this.methodInfoSetVolume);
  }

  methodInfoSeekTrack = new grpcWeb.AbstractClientBase.MethodInfo(
    protos_audioNode_pb.ServiceResponse,
    (request: protos_audioNode_pb.SeekRequest) => {
      return request.serializeBinary();
    },
    protos_audioNode_pb.ServiceResponse.deserializeBinary
  );

  seekTrack(
    request: protos_audioNode_pb.SeekRequest,
    metadata: grpcWeb.Metadata | null): Promise<protos_audioNode_pb.ServiceResponse>;

  seekTrack(
    request: protos_audioNode_pb.SeekRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: protos_audioNode_pb.ServiceResponse) => void): grpcWeb.ClientReadableStream<protos_audioNode_pb.ServiceResponse>;

  seekTrack(
    request: protos_audioNode_pb.SeekRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: protos_audioNode_pb.ServiceResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/audioNode.AudioNodeService/SeekTrack',
        request,
        metadata || {},
        this.methodInfoSeekTrack,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/audioNode.AudioNodeService/SeekTrack',
    request,
    metadata || {},
    this.methodInfoSeekTrack);
  }

}

