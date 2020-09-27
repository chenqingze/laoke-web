// package: 
// file: Auth.proto

import * as jspb from "google-protobuf";

export class AuthRequest extends jspb.Message {
  getToken(): string;
  setToken(value: string): void;

  getDeviceCode(): string;
  setDeviceCode(value: string): void;

  getDeviceIdiom(): string;
  setDeviceIdiom(value: string): void;

  getDevicePlatform(): string;
  setDevicePlatform(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuthRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AuthRequest): AuthRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AuthRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuthRequest;
  static deserializeBinaryFromReader(message: AuthRequest, reader: jspb.BinaryReader): AuthRequest;
}

export namespace AuthRequest {
  export type AsObject = {
    token: string,
    deviceCode: string,
    deviceIdiom: string,
    devicePlatform: string,
  }
}

export class AuthAck extends jspb.Message {
  getResult(): boolean;
  setResult(value: boolean): void;

  getSessionId(): string;
  setSessionId(value: string): void;

  getInfo(): string;
  setInfo(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuthAck.AsObject;
  static toObject(includeInstance: boolean, msg: AuthAck): AuthAck.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AuthAck, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuthAck;
  static deserializeBinaryFromReader(message: AuthAck, reader: jspb.BinaryReader): AuthAck;
}

export namespace AuthAck {
  export type AsObject = {
    result: boolean,
    sessionId: string,
    info: string,
  }
}

