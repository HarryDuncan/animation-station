import * as jspb from 'google-protobuf'



export class InitControllerRequest extends jspb.Message {
  getAudiofilenamesList(): Array<string>;
  setAudiofilenamesList(value: Array<string>): InitControllerRequest;
  clearAudiofilenamesList(): InitControllerRequest;
  addAudiofilenames(value: string, index?: number): InitControllerRequest;

  getTrackindex(): number;
  setTrackindex(value: number): InitControllerRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InitControllerRequest.AsObject;
  static toObject(includeInstance: boolean, msg: InitControllerRequest): InitControllerRequest.AsObject;
  static serializeBinaryToWriter(message: InitControllerRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InitControllerRequest;
  static deserializeBinaryFromReader(message: InitControllerRequest, reader: jspb.BinaryReader): InitControllerRequest;
}

export namespace InitControllerRequest {
  export type AsObject = {
    audiofilenamesList: Array<string>,
    trackindex: number,
  }
}

export class InitControllerResponse extends jspb.Message {
  getReply(): string;
  setReply(value: string): InitControllerResponse;

  getError(): boolean;
  setError(value: boolean): InitControllerResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InitControllerResponse.AsObject;
  static toObject(includeInstance: boolean, msg: InitControllerResponse): InitControllerResponse.AsObject;
  static serializeBinaryToWriter(message: InitControllerResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InitControllerResponse;
  static deserializeBinaryFromReader(message: InitControllerResponse, reader: jspb.BinaryReader): InitControllerResponse;
}

export namespace InitControllerResponse {
  export type AsObject = {
    reply: string,
    error: boolean,
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

export class ServiceResponse extends jspb.Message {
  getReply(): string;
  setReply(value: string): ServiceResponse;

  getError(): boolean;
  setError(value: boolean): ServiceResponse;

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
    error: boolean,
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

