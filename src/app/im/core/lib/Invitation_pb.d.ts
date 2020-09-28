// package: 
// file: Invitation.proto

import * as jspb from "google-protobuf";
import * as Friend_pb from "./Friend_pb";

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

export class InvitationRequestRequest extends jspb.Message {
  getAddresseeid(): string;
  setAddresseeid(value: string): void;

  getAddresseealias(): string;
  setAddresseealias(value: string): void;

  getContent(): string;
  setContent(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InvitationRequestRequest.AsObject;
  static toObject(includeInstance: boolean, msg: InvitationRequestRequest): InvitationRequestRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: InvitationRequestRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InvitationRequestRequest;
  static deserializeBinaryFromReader(message: InvitationRequestRequest, reader: jspb.BinaryReader): InvitationRequestRequest;
}

export namespace InvitationRequestRequest {
  export type AsObject = {
    addresseeid: string,
    addresseealias: string,
    content: string,
  }
}

export class InvitationRequestAck extends jspb.Message {
  hasInvitationproto(): boolean;
  clearInvitationproto(): void;
  getInvitationproto(): InvitationProto | undefined;
  setInvitationproto(value?: InvitationProto): void;

  getRes(): number;
  setRes(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InvitationRequestAck.AsObject;
  static toObject(includeInstance: boolean, msg: InvitationRequestAck): InvitationRequestAck.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: InvitationRequestAck, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InvitationRequestAck;
  static deserializeBinaryFromReader(message: InvitationRequestAck, reader: jspb.BinaryReader): InvitationRequestAck;
}

export namespace InvitationRequestAck {
  export type AsObject = {
    invitationproto?: InvitationProto.AsObject,
    res: number,
  }
}

export class InvitationAcceptRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InvitationAcceptRequest.AsObject;
  static toObject(includeInstance: boolean, msg: InvitationAcceptRequest): InvitationAcceptRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: InvitationAcceptRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InvitationAcceptRequest;
  static deserializeBinaryFromReader(message: InvitationAcceptRequest, reader: jspb.BinaryReader): InvitationAcceptRequest;
}

export namespace InvitationAcceptRequest {
  export type AsObject = {
    id: string,
  }
}

export class InvitationAcceptAck extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  hasFriendproto(): boolean;
  clearFriendproto(): void;
  getFriendproto(): Friend_pb.FriendProto | undefined;
  setFriendproto(value?: Friend_pb.FriendProto): void;

  getRes(): number;
  setRes(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InvitationAcceptAck.AsObject;
  static toObject(includeInstance: boolean, msg: InvitationAcceptAck): InvitationAcceptAck.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: InvitationAcceptAck, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InvitationAcceptAck;
  static deserializeBinaryFromReader(message: InvitationAcceptAck, reader: jspb.BinaryReader): InvitationAcceptAck;
}

export namespace InvitationAcceptAck {
  export type AsObject = {
    id: string,
    friendproto?: Friend_pb.FriendProto.AsObject,
    res: number,
  }
}

export class InvitationDeclinedRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InvitationDeclinedRequest.AsObject;
  static toObject(includeInstance: boolean, msg: InvitationDeclinedRequest): InvitationDeclinedRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: InvitationDeclinedRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InvitationDeclinedRequest;
  static deserializeBinaryFromReader(message: InvitationDeclinedRequest, reader: jspb.BinaryReader): InvitationDeclinedRequest;
}

export namespace InvitationDeclinedRequest {
  export type AsObject = {
    id: string,
  }
}

export class InvitationDeclinedAck extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getRes(): number;
  setRes(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InvitationDeclinedAck.AsObject;
  static toObject(includeInstance: boolean, msg: InvitationDeclinedAck): InvitationDeclinedAck.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: InvitationDeclinedAck, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InvitationDeclinedAck;
  static deserializeBinaryFromReader(message: InvitationDeclinedAck, reader: jspb.BinaryReader): InvitationDeclinedAck;
}

export namespace InvitationDeclinedAck {
  export type AsObject = {
    id: string,
    res: number,
  }
}

export class InvitationRequest extends jspb.Message {
  getUpdatedat(): number;
  setUpdatedat(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InvitationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: InvitationRequest): InvitationRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: InvitationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InvitationRequest;
  static deserializeBinaryFromReader(message: InvitationRequest, reader: jspb.BinaryReader): InvitationRequest;
}

export namespace InvitationRequest {
  export type AsObject = {
    updatedat: number,
  }
}

export class InvitationAck extends jspb.Message {
  clearInvitationprotoList(): void;
  getInvitationprotoList(): Array<InvitationProto>;
  setInvitationprotoList(value: Array<InvitationProto>): void;
  addInvitationproto(value?: InvitationProto, index?: number): InvitationProto;

  getRes(): number;
  setRes(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InvitationAck.AsObject;
  static toObject(includeInstance: boolean, msg: InvitationAck): InvitationAck.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: InvitationAck, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InvitationAck;
  static deserializeBinaryFromReader(message: InvitationAck, reader: jspb.BinaryReader): InvitationAck;
}

export namespace InvitationAck {
  export type AsObject = {
    invitationprotoList: Array<InvitationProto.AsObject>,
    res: number,
  }
}

