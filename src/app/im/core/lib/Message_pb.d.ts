// package: com.aihangxunxi.aitalk.im.protocol.buffers
// file: Message.proto

import * as jspb from "google-protobuf";
import * as Msg_pb from "./Msg_pb";
import * as OpCode_pb from "./OpCode_pb";
import * as Connection_pb from "./Connection_pb";
import * as Auth_pb from "./Auth_pb";
import * as Group_pb from "./Group_pb";

export class Message extends jspb.Message {
  getMagic(): string;
  setMagic(value: string): void;

  getVersion(): number;
  setVersion(value: number): void;

  getOpCode(): OpCode_pb.OpCodeMap[keyof OpCode_pb.OpCodeMap];
  setOpCode(value: OpCode_pb.OpCodeMap[keyof OpCode_pb.OpCodeMap]): void;

  getSeq(): string;
  setSeq(value: string): void;

  hasAuthRequest(): boolean;
  clearAuthRequest(): void;
  getAuthRequest(): Auth_pb.AuthRequest | undefined;
  setAuthRequest(value?: Auth_pb.AuthRequest): void;

  hasAuthAck(): boolean;
  clearAuthAck(): void;
  getAuthAck(): Auth_pb.AuthAck | undefined;
  setAuthAck(value?: Auth_pb.AuthAck): void;

  hasMsgRequest(): boolean;
  clearMsgRequest(): void;
  getMsgRequest(): Msg_pb.MsgRequest | undefined;
  setMsgRequest(value?: Msg_pb.MsgRequest): void;

  hasQueryUserGroupRequest(): boolean;
  clearQueryUserGroupRequest(): void;
  getQueryUserGroupRequest(): Group_pb.QueryUserGroupsRequest | undefined;
  setQueryUserGroupRequest(value?: Group_pb.QueryUserGroupsRequest): void;

  hasQueryUserGroupAck(): boolean;
  clearQueryUserGroupAck(): void;
  getQueryUserGroupAck(): Group_pb.QueryUserGroupsAck | undefined;
  setQueryUserGroupAck(value?: Group_pb.QueryUserGroupsAck): void;

  getPayloadCase(): Message.PayloadCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Message.AsObject;
  static toObject(includeInstance: boolean, msg: Message): Message.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Message, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Message;
  static deserializeBinaryFromReader(message: Message, reader: jspb.BinaryReader): Message;
}

export namespace Message {
  export type AsObject = {
    magic: string,
    version: number,
    opCode: OpCode_pb.OpCodeMap[keyof OpCode_pb.OpCodeMap],
    seq: string,
    authRequest?: Auth_pb.AuthRequest.AsObject,
    authAck?: Auth_pb.AuthAck.AsObject,
    msgRequest?: Msg_pb.MsgRequest.AsObject,
    queryUserGroupRequest?: Group_pb.QueryUserGroupsRequest.AsObject,
    queryUserGroupAck?: Group_pb.QueryUserGroupsAck.AsObject,
  }

  export enum PayloadCase {
    PAYLOAD_NOT_SET = 0,
    AUTH_REQUEST = 11,
    AUTH_ACK = 12,
    MSG_REQUEST = 20,
    QUERY_USER_GROUP_REQUEST = 21,
    QUERY_USER_GROUP_ACK = 22,
  }
}

