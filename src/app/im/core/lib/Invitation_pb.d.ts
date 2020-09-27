// package: 
// file: Invitation.proto

import * as jspb from "google-protobuf";

export class InvitationProto extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getRequesterid(): string;
  setRequesterid(value: string): void;

  getRequesteralias(): string;
  setRequesteralias(value: string): void;

  getRequesternickname(): string;
  setRequesternickname(value: string): void;

  getRequesterprofile(): string;
  setRequesterprofile(value: string): void;

  getAddresseeid(): string;
  setAddresseeid(value: string): void;

  getAddresseealias(): string;
  setAddresseealias(value: string): void;

  getAddresseenickname(): string;
  setAddresseenickname(value: string): void;

  getAddresseeprofile(): string;
  setAddresseeprofile(value: string): void;

  getContent(): string;
  setContent(value: string): void;

  getInvitestatus(): string;
  setInvitestatus(value: string): void;

  getInvitetype(): string;
  setInvitetype(value: string): void;

  getCreatedat(): number;
  setCreatedat(value: number): void;

  getUpdatedat(): number;
  setUpdatedat(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InvitationProto.AsObject;
  static toObject(includeInstance: boolean, msg: InvitationProto): InvitationProto.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: InvitationProto, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InvitationProto;
  static deserializeBinaryFromReader(message: InvitationProto, reader: jspb.BinaryReader): InvitationProto;
}

export namespace InvitationProto {
  export type AsObject = {
    id: string,
    requesterid: string,
    requesteralias: string,
    requesternickname: string,
    requesterprofile: string,
    addresseeid: string,
    addresseealias: string,
    addresseenickname: string,
    addresseeprofile: string,
    content: string,
    invitestatus: string,
    invitetype: string,
    createdat: number,
    updatedat: number,
  }
}

export class FriendProto extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getUserid(): number;
  setUserid(value: number): void;

  getFriendid(): number;
  setFriendid(value: number): void;

  getFriendname(): string;
  setFriendname(value: string): void;

  getAlias(): string;
  setAlias(value: string): void;

  getIsblocked(): number;
  setIsblocked(value: number): void;

  getIsmute(): number;
  setIsmute(value: number): void;

  getIsstickontop(): number;
  setIsstickontop(value: number): void;

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
    userid: number,
    friendid: number,
    friendname: string,
    alias: string,
    isblocked: number,
    ismute: number,
    isstickontop: number,
    createdat: number,
    updatedat: number,
  }
}

export class FriendInvitationRequestRequest extends jspb.Message {
  getAddresseeid(): string;
  setAddresseeid(value: string): void;

  getAddresseealias(): string;
  setAddresseealias(value: string): void;

  getContent(): string;
  setContent(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FriendInvitationRequestRequest.AsObject;
  static toObject(includeInstance: boolean, msg: FriendInvitationRequestRequest): FriendInvitationRequestRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FriendInvitationRequestRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FriendInvitationRequestRequest;
  static deserializeBinaryFromReader(message: FriendInvitationRequestRequest, reader: jspb.BinaryReader): FriendInvitationRequestRequest;
}

export namespace FriendInvitationRequestRequest {
  export type AsObject = {
    addresseeid: string,
    addresseealias: string,
    content: string,
  }
}

export class FriendInvitationRequestAck extends jspb.Message {
  hasInvitationproto(): boolean;
  clearInvitationproto(): void;
  getInvitationproto(): InvitationProto | undefined;
  setInvitationproto(value?: InvitationProto): void;

  getRes(): number;
  setRes(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FriendInvitationRequestAck.AsObject;
  static toObject(includeInstance: boolean, msg: FriendInvitationRequestAck): FriendInvitationRequestAck.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FriendInvitationRequestAck, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FriendInvitationRequestAck;
  static deserializeBinaryFromReader(message: FriendInvitationRequestAck, reader: jspb.BinaryReader): FriendInvitationRequestAck;
}

export namespace FriendInvitationRequestAck {
  export type AsObject = {
    invitationproto?: InvitationProto.AsObject,
    res: number,
  }
}

export class FriendInvitationAcceptRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FriendInvitationAcceptRequest.AsObject;
  static toObject(includeInstance: boolean, msg: FriendInvitationAcceptRequest): FriendInvitationAcceptRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FriendInvitationAcceptRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FriendInvitationAcceptRequest;
  static deserializeBinaryFromReader(message: FriendInvitationAcceptRequest, reader: jspb.BinaryReader): FriendInvitationAcceptRequest;
}

export namespace FriendInvitationAcceptRequest {
  export type AsObject = {
    id: string,
  }
}

export class FriendInvitationAcceptAck extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  hasFriendproto(): boolean;
  clearFriendproto(): void;
  getFriendproto(): FriendProto | undefined;
  setFriendproto(value?: FriendProto): void;

  getRes(): number;
  setRes(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FriendInvitationAcceptAck.AsObject;
  static toObject(includeInstance: boolean, msg: FriendInvitationAcceptAck): FriendInvitationAcceptAck.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FriendInvitationAcceptAck, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FriendInvitationAcceptAck;
  static deserializeBinaryFromReader(message: FriendInvitationAcceptAck, reader: jspb.BinaryReader): FriendInvitationAcceptAck;
}

export namespace FriendInvitationAcceptAck {
  export type AsObject = {
    id: string,
    friendproto?: FriendProto.AsObject,
    res: number,
  }
}

export class FriendInvitationDeclinedRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FriendInvitationDeclinedRequest.AsObject;
  static toObject(includeInstance: boolean, msg: FriendInvitationDeclinedRequest): FriendInvitationDeclinedRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FriendInvitationDeclinedRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FriendInvitationDeclinedRequest;
  static deserializeBinaryFromReader(message: FriendInvitationDeclinedRequest, reader: jspb.BinaryReader): FriendInvitationDeclinedRequest;
}

export namespace FriendInvitationDeclinedRequest {
  export type AsObject = {
    id: string,
  }
}

export class FriendInvitationDeclinedAck extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getRes(): number;
  setRes(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FriendInvitationDeclinedAck.AsObject;
  static toObject(includeInstance: boolean, msg: FriendInvitationDeclinedAck): FriendInvitationDeclinedAck.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FriendInvitationDeclinedAck, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FriendInvitationDeclinedAck;
  static deserializeBinaryFromReader(message: FriendInvitationDeclinedAck, reader: jspb.BinaryReader): FriendInvitationDeclinedAck;
}

export namespace FriendInvitationDeclinedAck {
  export type AsObject = {
    id: string,
    res: number,
  }
}

export class FriendInvitationRequest extends jspb.Message {
  getUpdatedat(): number;
  setUpdatedat(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FriendInvitationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: FriendInvitationRequest): FriendInvitationRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FriendInvitationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FriendInvitationRequest;
  static deserializeBinaryFromReader(message: FriendInvitationRequest, reader: jspb.BinaryReader): FriendInvitationRequest;
}

export namespace FriendInvitationRequest {
  export type AsObject = {
    updatedat: number,
  }
}

export class FriendInvitationAck extends jspb.Message {
  clearInvitationprotoList(): void;
  getInvitationprotoList(): Array<InvitationProto>;
  setInvitationprotoList(value: Array<InvitationProto>): void;
  addInvitationproto(value?: InvitationProto, index?: number): InvitationProto;

  getRes(): number;
  setRes(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FriendInvitationAck.AsObject;
  static toObject(includeInstance: boolean, msg: FriendInvitationAck): FriendInvitationAck.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FriendInvitationAck, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FriendInvitationAck;
  static deserializeBinaryFromReader(message: FriendInvitationAck, reader: jspb.BinaryReader): FriendInvitationAck;
}

export namespace FriendInvitationAck {
  export type AsObject = {
    invitationprotoList: Array<InvitationProto.AsObject>,
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

