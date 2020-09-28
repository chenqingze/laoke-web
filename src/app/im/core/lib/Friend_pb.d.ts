// package: 
// file: Friend.proto

import * as jspb from "google-protobuf";

export class FriendProto extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getUserid(): string;
  setUserid(value: string): void;

  getFriendid(): string;
  setFriendid(value: string): void;

  getFriendname(): string;
  setFriendname(value: string): void;

  getFriendprofile(): string;
  setFriendprofile(value: string): void;

  getAlias(): string;
  setAlias(value: string): void;

  getIsblocked(): number;
  setIsblocked(value: number): void;

  getIsmute(): number;
  setIsmute(value: number): void;

  getIsstickontop(): number;
  setIsstickontop(value: number): void;

  getStatus(): string;
  setStatus(value: string): void;

  getCreatedat(): number;
  setCreatedat(value: number): void;

  getUpdatedat(): number;
  setUpdatedat(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FriendProto.AsObject;
  static toObject(includeInstance: boolean, msg: FriendProto): FriendProto.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FriendProto, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FriendProto;
  static deserializeBinaryFromReader(message: FriendProto, reader: jspb.BinaryReader): FriendProto;
}

export namespace FriendProto {
  export type AsObject = {
    id: string,
    userid: string,
    friendid: string,
    friendname: string,
    friendprofile: string,
    alias: string,
    isblocked: number,
    ismute: number,
    isstickontop: number,
    status: string,
    createdat: number,
    updatedat: number,
  }
}

export class FriendDeleteRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FriendDeleteRequest.AsObject;
  static toObject(includeInstance: boolean, msg: FriendDeleteRequest): FriendDeleteRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FriendDeleteRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FriendDeleteRequest;
  static deserializeBinaryFromReader(message: FriendDeleteRequest, reader: jspb.BinaryReader): FriendDeleteRequest;
}

export namespace FriendDeleteRequest {
  export type AsObject = {
    id: string,
  }
}

export class FriendDeleteAck extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getRes(): number;
  setRes(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FriendDeleteAck.AsObject;
  static toObject(includeInstance: boolean, msg: FriendDeleteAck): FriendDeleteAck.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FriendDeleteAck, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FriendDeleteAck;
  static deserializeBinaryFromReader(message: FriendDeleteAck, reader: jspb.BinaryReader): FriendDeleteAck;
}

export namespace FriendDeleteAck {
  export type AsObject = {
    id: string,
    res: number,
  }
}

export class FriendRequest extends jspb.Message {
  getUpdatedat(): number;
  setUpdatedat(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FriendRequest.AsObject;
  static toObject(includeInstance: boolean, msg: FriendRequest): FriendRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FriendRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FriendRequest;
  static deserializeBinaryFromReader(message: FriendRequest, reader: jspb.BinaryReader): FriendRequest;
}

export namespace FriendRequest {
  export type AsObject = {
    updatedat: number,
  }
}

export class FriendAck extends jspb.Message {
  clearFriendprotoList(): void;
  getFriendprotoList(): Array<FriendProto>;
  setFriendprotoList(value: Array<FriendProto>): void;
  addFriendproto(value?: FriendProto, index?: number): FriendProto;

  getRes(): number;
  setRes(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FriendAck.AsObject;
  static toObject(includeInstance: boolean, msg: FriendAck): FriendAck.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FriendAck, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FriendAck;
  static deserializeBinaryFromReader(message: FriendAck, reader: jspb.BinaryReader): FriendAck;
}

export namespace FriendAck {
  export type AsObject = {
    friendprotoList: Array<FriendProto.AsObject>,
    res: number,
  }
}

