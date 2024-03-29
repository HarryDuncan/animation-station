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

  getPlaylistsList(): Array<string>;
  setPlaylistsList(value: Array<string>): InitializeAudioNodeResponse;
  clearPlaylistsList(): InitializeAudioNodeResponse;
  addPlaylists(value: string, index?: number): InitializeAudioNodeResponse;

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
    playlistsList: Array<string>,
  }
}

export class PlaylistRequest extends jspb.Message {
  getPlaylistname(): string;
  setPlaylistname(value: string): PlaylistRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PlaylistRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PlaylistRequest): PlaylistRequest.AsObject;
  static serializeBinaryToWriter(message: PlaylistRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PlaylistRequest;
  static deserializeBinaryFromReader(message: PlaylistRequest, reader: jspb.BinaryReader): PlaylistRequest;
}

export namespace PlaylistRequest {
  export type AsObject = {
    playlistname: string,
  }
}

export class PlaylistResponse extends jspb.Message {
  getTracksList(): Array<string>;
  setTracksList(value: Array<string>): PlaylistResponse;
  clearTracksList(): PlaylistResponse;
  addTracks(value: string, index?: number): PlaylistResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PlaylistResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PlaylistResponse): PlaylistResponse.AsObject;
  static serializeBinaryToWriter(message: PlaylistResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PlaylistResponse;
  static deserializeBinaryFromReader(message: PlaylistResponse, reader: jspb.BinaryReader): PlaylistResponse;
}

export namespace PlaylistResponse {
  export type AsObject = {
    tracksList: Array<string>,
  }
}

export class SetUpTrackRequest extends jspb.Message {
  getTrackindex(): number;
  setTrackindex(value: number): SetUpTrackRequest;

  getPlaylistindex(): number;
  setPlaylistindex(value: number): SetUpTrackRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetUpTrackRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SetUpTrackRequest): SetUpTrackRequest.AsObject;
  static serializeBinaryToWriter(message: SetUpTrackRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetUpTrackRequest;
  static deserializeBinaryFromReader(message: SetUpTrackRequest, reader: jspb.BinaryReader): SetUpTrackRequest;
}

export namespace SetUpTrackRequest {
  export type AsObject = {
    trackindex: number,
    playlistindex: number,
  }
}

export class SetUpTrackResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetUpTrackResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SetUpTrackResponse): SetUpTrackResponse.AsObject;
  static serializeBinaryToWriter(message: SetUpTrackResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetUpTrackResponse;
  static deserializeBinaryFromReader(message: SetUpTrackResponse, reader: jspb.BinaryReader): SetUpTrackResponse;
}

export namespace SetUpTrackResponse {
  export type AsObject = {
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

export class AudioData extends jspb.Message {
  getMeanList(): Array<number>;
  setMeanList(value: Array<number>): AudioData;
  clearMeanList(): AudioData;
  addMean(value: number, index?: number): AudioData;

  getMedianList(): Array<number>;
  setMedianList(value: Array<number>): AudioData;
  clearMedianList(): AudioData;
  addMedian(value: number, index?: number): AudioData;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AudioData.AsObject;
  static toObject(includeInstance: boolean, msg: AudioData): AudioData.AsObject;
  static serializeBinaryToWriter(message: AudioData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AudioData;
  static deserializeBinaryFromReader(message: AudioData, reader: jspb.BinaryReader): AudioData;
}

export namespace AudioData {
  export type AsObject = {
    meanList: Array<number>,
    medianList: Array<number>,
  }
}

export class StreamResponse extends jspb.Message {
  getResponsemessage(): string;
  setResponsemessage(value: string): StreamResponse;

  getStreamdata(): AudioData | undefined;
  setStreamdata(value?: AudioData): StreamResponse;
  hasStreamdata(): boolean;
  clearStreamdata(): StreamResponse;

  getResponsemessageCase(): StreamResponse.ResponsemessageCase;

  getStreamdataCase(): StreamResponse.StreamdataCase;

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
    streamdata?: AudioData.AsObject,
  }

  export enum ResponsemessageCase { 
    _RESPONSEMESSAGE_NOT_SET = 0,
    RESPONSEMESSAGE = 1,
  }

  export enum StreamdataCase { 
    _STREAMDATA_NOT_SET = 0,
    STREAMDATA = 2,
  }
}

