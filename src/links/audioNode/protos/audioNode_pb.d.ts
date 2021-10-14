import * as jspb from 'google-protobuf'



export class InitializeAudioNodeRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InitializeAudioNodeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: InitializeAudioNodeRequest): InitializeAudioNodeRequest.AsObject;
  static serializeBinaryToWriter(message: InitializeAudioNodeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InitializeAudioNodeRequest;
  static deserializeBinaryFromReader(message: InitializeAudioNodeRequest, reader: jspb.BinaryReader): InitializeAudioNodeRequest;
}

export namespace InitializeAudioNodeRequest {
  export type AsObject = {
  }
}

export class InitializeAudioNodeResponse extends jspb.Message {
  getIsinitialized(): boolean;
  setIsinitialized(value: boolean): InitializeAudioNodeResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InitializeAudioNodeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: InitializeAudioNodeResponse): InitializeAudioNodeResponse.AsObject;
  static serializeBinaryToWriter(message: InitializeAudioNodeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InitializeAudioNodeResponse;
  static deserializeBinaryFromReader(message: InitializeAudioNodeResponse, reader: jspb.BinaryReader): InitializeAudioNodeResponse;
}

export namespace InitializeAudioNodeResponse {
  export type AsObject = {
    isinitialized: boolean,
  }
}

export class InitControllerRequest extends jspb.Message {
  getControlrequesttype(): string;
  setControlrequesttype(value: string): InitControllerRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InitControllerRequest.AsObject;
  static toObject(includeInstance: boolean, msg: InitControllerRequest): InitControllerRequest.AsObject;
  static serializeBinaryToWriter(message: InitControllerRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InitControllerRequest;
  static deserializeBinaryFromReader(message: InitControllerRequest, reader: jspb.BinaryReader): InitControllerRequest;
}

export namespace InitControllerRequest {
  export type AsObject = {
    controlrequesttype: string,
  }
}

export class InitControllerResponse extends jspb.Message {
  getIsconnected(): boolean;
  setIsconnected(value: boolean): InitControllerResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InitControllerResponse.AsObject;
  static toObject(includeInstance: boolean, msg: InitControllerResponse): InitControllerResponse.AsObject;
  static serializeBinaryToWriter(message: InitControllerResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InitControllerResponse;
  static deserializeBinaryFromReader(message: InitControllerResponse, reader: jspb.BinaryReader): InitControllerResponse;
}

export namespace InitControllerResponse {
  export type AsObject = {
    isconnected: boolean,
  }
}

export class ControlRequest extends jspb.Message {
  getAction(): string;
  setAction(value: string): ControlRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ControlRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ControlRequest): ControlRequest.AsObject;
  static serializeBinaryToWriter(message: ControlRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ControlRequest;
  static deserializeBinaryFromReader(message: ControlRequest, reader: jspb.BinaryReader): ControlRequest;
}

export namespace ControlRequest {
  export type AsObject = {
    action: string,
  }
}

export class StreamResponse extends jspb.Message {
  getResponsemessage(): string;
  setResponsemessage(value: string): StreamResponse;

  getStreamdataList(): Array<number>;
  setStreamdataList(value: Array<number>): StreamResponse;
  clearStreamdataList(): StreamResponse;
  addStreamdata(value: number, index?: number): StreamResponse;

  getResponsemessageCase(): StreamResponse.ResponsemessageCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StreamResponse.AsObject;
  static toObject(includeInstance: boolean, msg: StreamResponse): StreamResponse.AsObject;
  static serializeBinaryToWriter(message: StreamResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StreamResponse;
  static deserializeBinaryFromReader(message: StreamResponse, reader: jspb.BinaryReader): StreamResponse;
}

export namespace StreamResponse {
  export type AsObject = {
    responsemessage: string,
    streamdataList: Array<number>,
  }

  export enum ResponsemessageCase { 
    _RESPONSEMESSAGE_NOT_SET = 0,
    RESPONSEMESSAGE = 1,
  }
}

export class AudioData extends jspb.Message {
  getPointsList(): Array<number>;
  setPointsList(value: Array<number>): AudioData;
  clearPointsList(): AudioData;
  addPoints(value: number, index?: number): AudioData;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AudioData.AsObject;
  static toObject(includeInstance: boolean, msg: AudioData): AudioData.AsObject;
  static serializeBinaryToWriter(message: AudioData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AudioData;
  static deserializeBinaryFromReader(message: AudioData, reader: jspb.BinaryReader): AudioData;
}

export namespace AudioData {
  export type AsObject = {
    pointsList: Array<number>,
  }
}

export class ServiceResponse extends jspb.Message {
  getReply(): string;
  setReply(value: string): ServiceResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServiceResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ServiceResponse): ServiceResponse.AsObject;
  static serializeBinaryToWriter(message: ServiceResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServiceResponse;
  static deserializeBinaryFromReader(message: ServiceResponse, reader: jspb.BinaryReader): ServiceResponse;
}

export namespace ServiceResponse {
  export type AsObject = {
    reply: string,
  }
}

export class VolumeRequest extends jspb.Message {
  getNewvolume(): number;
  setNewvolume(value: number): VolumeRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VolumeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: VolumeRequest): VolumeRequest.AsObject;
  static serializeBinaryToWriter(message: VolumeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VolumeRequest;
  static deserializeBinaryFromReader(message: VolumeRequest, reader: jspb.BinaryReader): VolumeRequest;
}

export namespace VolumeRequest {
  export type AsObject = {
    newvolume: number,
  }
}

export class SeekRequest extends jspb.Message {
  getSeekpoint(): number;
  setSeekpoint(value: number): SeekRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SeekRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SeekRequest): SeekRequest.AsObject;
  static serializeBinaryToWriter(message: SeekRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SeekRequest;
  static deserializeBinaryFromReader(message: SeekRequest, reader: jspb.BinaryReader): SeekRequest;
}

export namespace SeekRequest {
  export type AsObject = {
    seekpoint: number,
  }
}

