// package: 
// file: Msg.proto

import * as jspb from "google-protobuf";

export class MsgRequest extends jspb.Message {
  getMsgId(): string;
  setMsgId(value: string): void;

  getConversationId(): string;
  setConversationId(value: string): void;

  getConversationType(): number;
  setConversationType(value: number): void;

  getMsgStatus(): number;
  setMsgStatus(value: number): void;

  getMsgType(): number;
  setMsgType(value: number): void;

  getMsgAttachstr(): string;
  setMsgAttachstr(value: string): void;

  getContent(): string;
  setContent(value: string): void;

  getTime(): number;
  setTime(value: number): void;

  getExtendData(): string;
  setExtendData(value: string): void;

  getSenderId(): string;
  setSenderId(value: string): void;

  getReceiverId(): string;
  setReceiverId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MsgRequest): MsgRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgRequest;
  static deserializeBinaryFromReader(message: MsgRequest, reader: jspb.BinaryReader): MsgRequest;
}

export namespace MsgRequest {
  export type AsObject = {
    msgId: string,
    conversationId: string,
    conversationType: number,
    msgStatus: number,
    msgType: number,
    msgAttachstr: string,
    content: string,
    time: number,
    extendData: string,
    senderId: string,
    receiverId: string,
  }
}

export class MsgAck extends jspb.Message {
  getMsgId(): string;
  setMsgId(value: string): void;

  getSeq(): string;
  setSeq(value: string): void;

  getConversationType(): number;
  setConversationType(value: number): void;

  getCreatedAt(): number;
  setCreatedAt(value: number): void;

  getUpdatedAt(): number;
  setUpdatedAt(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgAck.AsObject;
  static toObject(includeInstance: boolean, msg: MsgAck): MsgAck.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgAck, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgAck;
  static deserializeBinaryFromReader(message: MsgAck, reader: jspb.BinaryReader): MsgAck;
}

export namespace MsgAck {
  export type AsObject = {
    msgId: string,
    seq: string,
    conversationType: number,
    createdAt: number,
    updatedAt: number,
  }
}

export class MsgReadNotify extends jspb.Message {
  getMsgId(): string;
  setMsgId(value: string): void;

  getConversationId(): string;
  setConversationId(value: string): void;

  getConversationType(): number;
  setConversationType(value: number): void;

  getMsgStatus(): number;
  setMsgStatus(value: number): void;

  getMsgType(): number;
  setMsgType(value: number): void;

  getMsgAttachstr(): string;
  setMsgAttachstr(value: string): void;

  getContent(): string;
  setContent(value: string): void;

  getTime(): number;
  setTime(value: number): void;

  getExtendData(): string;
  setExtendData(value: string): void;

  getSenderId(): string;
  setSenderId(value: string): void;

  getReceiverId(): string;
  setReceiverId(value: string): void;

  getCreatedAt(): number;
  setCreatedAt(value: number): void;

  getUpdatedAt(): number;
  setUpdatedAt(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgReadNotify.AsObject;
  static toObject(includeInstance: boolean, msg: MsgReadNotify): MsgReadNotify.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgReadNotify, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgReadNotify;
  static deserializeBinaryFromReader(message: MsgReadNotify, reader: jspb.BinaryReader): MsgReadNotify;
}

export namespace MsgReadNotify {
  export type AsObject = {
    msgId: string,
    conversationId: string,
    conversationType: number,
    msgStatus: number,
    msgType: number,
    msgAttachstr: string,
    content: string,
    time: number,
    extendData: string,
    senderId: string,
    receiverId: string,
    createdAt: number,
    updatedAt: number,
  }
}

export class MsgReadAck extends jspb.Message {
  getMsgId(): string;
  setMsgId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgReadAck.AsObject;
  static toObject(includeInstance: boolean, msg: MsgReadAck): MsgReadAck.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgReadAck, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgReadAck;
  static deserializeBinaryFromReader(message: MsgReadAck, reader: jspb.BinaryReader): MsgReadAck;
}

export namespace MsgReadAck {
  export type AsObject = {
    msgId: string,
  }
}

export class MsgRequestNotify extends jspb.Message {
  getMsgId(): string;
  setMsgId(value: string): void;

  getConversationId(): string;
  setConversationId(value: string): void;

  getConversationType(): number;
  setConversationType(value: number): void;

  getMsgStatus(): number;
  setMsgStatus(value: number): void;

  getMsgType(): number;
  setMsgType(value: number): void;

  getMsgAttachstr(): string;
  setMsgAttachstr(value: string): void;

  getContent(): string;
  setContent(value: string): void;

  getTime(): number;
  setTime(value: number): void;

  getExtendData(): string;
  setExtendData(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgRequestNotify.AsObject;
  static toObject(includeInstance: boolean, msg: MsgRequestNotify): MsgRequestNotify.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgRequestNotify, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgRequestNotify;
  static deserializeBinaryFromReader(message: MsgRequestNotify, reader: jspb.BinaryReader): MsgRequestNotify;
}

export namespace MsgRequestNotify {
  export type AsObject = {
    msgId: string,
    conversationId: string,
    conversationType: number,
    msgStatus: number,
    msgType: number,
    msgAttachstr: string,
    content: string,
    time: number,
    extendData: string,
  }
}

export class MsgReadConfirmNotify extends jspb.Message {
  getMsgId(): string;
  setMsgId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgReadConfirmNotify.AsObject;
  static toObject(includeInstance: boolean, msg: MsgReadConfirmNotify): MsgReadConfirmNotify.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgReadConfirmNotify, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgReadConfirmNotify;
  static deserializeBinaryFromReader(message: MsgReadConfirmNotify, reader: jspb.BinaryReader): MsgReadConfirmNotify;
}

export namespace MsgReadConfirmNotify {
  export type AsObject = {
    msgId: string,
  }
}

export class OfflineMsgRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OfflineMsgRequest.AsObject;
  static toObject(includeInstance: boolean, msg: OfflineMsgRequest): OfflineMsgRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OfflineMsgRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OfflineMsgRequest;
  static deserializeBinaryFromReader(message: OfflineMsgRequest, reader: jspb.BinaryReader): OfflineMsgRequest;
}

export namespace OfflineMsgRequest {
  export type AsObject = {
  }
}

export class OfflineMsgAck extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OfflineMsgAck.AsObject;
  static toObject(includeInstance: boolean, msg: OfflineMsgAck): OfflineMsgAck.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OfflineMsgAck, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OfflineMsgAck;
  static deserializeBinaryFromReader(message: OfflineMsgAck, reader: jspb.BinaryReader): OfflineMsgAck;
}

export namespace OfflineMsgAck {
  export type AsObject = {
  }
}

