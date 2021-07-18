import * as jspb from 'google-protobuf'



export class CopyRequest extends jspb.Message {
  getAudiofilenamesList(): Array<string>;
  setAudiofilenamesList(value: Array<string>): CopyRequest;
  clearAudiofilenamesList(): CopyRequest;
  addAudiofilenames(value: string, index?: number): CopyRequest;

  getTrackindex(): number;
  setTrackindex(value: number): CopyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CopyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CopyRequest): CopyRequest.AsObject;
  static serializeBinaryToWriter(message: CopyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CopyRequest;
  static deserializeBinaryFromReader(message: CopyRequest, reader: jspb.BinaryReader): CopyRequest;
}

export namespace CopyRequest {
  export type AsObject = {
    audiofilenamesList: Array<string>,
    trackindex: number,
  }
}

export class CopyResponse extends jspb.Message {
  getReply(): string;
  setReply(value: string): CopyResponse;

  getError(): boolean;
  setError(value: boolean): CopyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CopyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CopyResponse): CopyResponse.AsObject;
  static serializeBinaryToWriter(message: CopyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CopyResponse;
  static deserializeBinaryFromReader(message: CopyResponse, reader: jspb.BinaryReader): CopyResponse;
}

export namespace CopyResponse {
  export type AsObject = {
    reply: string,
    error: boolean,
  }
}

