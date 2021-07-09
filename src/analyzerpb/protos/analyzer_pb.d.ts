import * as jspb from 'google-protobuf'



export class InitRequest extends jspb.Message {
  getInitmessage(): string;
  setInitmessage(value: string): InitRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InitRequest.AsObject;
  static toObject(includeInstance: boolean, msg: InitRequest): InitRequest.AsObject;
  static serializeBinaryToWriter(message: InitRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InitRequest;
  static deserializeBinaryFromReader(message: InitRequest, reader: jspb.BinaryReader): InitRequest;
}

export namespace InitRequest {
  export type AsObject = {
    initmessage: string,
  }
}

export class InitResponse extends jspb.Message {
  getInitresponsemessage(): string;
  setInitresponsemessage(value: string): InitResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InitResponse.AsObject;
  static toObject(includeInstance: boolean, msg: InitResponse): InitResponse.AsObject;
  static serializeBinaryToWriter(message: InitResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InitResponse;
  static deserializeBinaryFromReader(message: InitResponse, reader: jspb.BinaryReader): InitResponse;
}

export namespace InitResponse {
  export type AsObject = {
    initresponsemessage: string,
  }
}

export class TrackData extends jspb.Message {
  getTrackfilename(): string;
  setTrackfilename(value: string): TrackData;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TrackData.AsObject;
  static toObject(includeInstance: boolean, msg: TrackData): TrackData.AsObject;
  static serializeBinaryToWriter(message: TrackData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TrackData;
  static deserializeBinaryFromReader(message: TrackData, reader: jspb.BinaryReader): TrackData;
}

export namespace TrackData {
  export type AsObject = {
    trackfilename: string,
  }
}

export class StreamData extends jspb.Message {
  getTrackfilename(): string;
  setTrackfilename(value: string): StreamData;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StreamData.AsObject;
  static toObject(includeInstance: boolean, msg: StreamData): StreamData.AsObject;
  static serializeBinaryToWriter(message: StreamData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StreamData;
  static deserializeBinaryFromReader(message: StreamData, reader: jspb.BinaryReader): StreamData;
}

export namespace StreamData {
  export type AsObject = {
    trackfilename: string,
  }
}

export class DataPoints extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DataPoints.AsObject;
  static toObject(includeInstance: boolean, msg: DataPoints): DataPoints.AsObject;
  static serializeBinaryToWriter(message: DataPoints, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DataPoints;
  static deserializeBinaryFromReader(message: DataPoints, reader: jspb.BinaryReader): DataPoints;
}

export namespace DataPoints {
  export type AsObject = {
  }
}

