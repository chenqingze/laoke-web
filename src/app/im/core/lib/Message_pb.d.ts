// package: com.aihangxunxi.aitalk.im.protocol.buffers
// file: Message.proto

import * as jspb from "google-protobuf";
import * as Msg_pb from "./Msg_pb";
import * as OpCode_pb from "./OpCode_pb";
import * as Connection_pb from "./Connection_pb";
import * as Auth_pb from "./Auth_pb";
import * as Group_pb from "./Group_pb";
import * as Invitation_pb from "./Invitation_pb";

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

  hasMsgAck(): boolean;
  clearMsgAck(): void;
  getMsgAck(): Msg_pb.MsgAck | undefined;
  setMsgAck(value?: Msg_pb.MsgAck): void;

  hasQueryUserGroupRequest(): boolean;
  clearQueryUserGroupRequest(): void;
  getQueryUserGroupRequest(): Group_pb.QueryUserGroupsRequest | undefined;
  setQueryUserGroupRequest(value?: Group_pb.QueryUserGroupsRequest): void;

  hasQueryUserGroupAck(): boolean;
  clearQueryUserGroupAck(): void;
  getQueryUserGroupAck(): Group_pb.QueryUserGroupsAck | undefined;
  setQueryUserGroupAck(value?: Group_pb.QueryUserGroupsAck): void;

  hasFriendInvitationRequestRequest(): boolean;
  clearFriendInvitationRequestRequest(): void;
  getFriendInvitationRequestRequest(): Invitation_pb.FriendInvitationRequestRequest | undefined;
  setFriendInvitationRequestRequest(value?: Invitation_pb.FriendInvitationRequestRequest): void;

  hasFriendInvitationRequestAck(): boolean;
  clearFriendInvitationRequestAck(): void;
  getFriendInvitationRequestAck(): Invitation_pb.FriendInvitationRequestAck | undefined;
  setFriendInvitationRequestAck(value?: Invitation_pb.FriendInvitationRequestAck): void;

  hasFriendInvitationAcceptRequest(): boolean;
  clearFriendInvitationAcceptRequest(): void;
  getFriendInvitationAcceptRequest(): Invitation_pb.FriendInvitationAcceptRequest | undefined;
  setFriendInvitationAcceptRequest(value?: Invitation_pb.FriendInvitationAcceptRequest): void;

  hasFriendInvitationAcceptAck(): boolean;
  clearFriendInvitationAcceptAck(): void;
  getFriendInvitationAcceptAck(): Invitation_pb.FriendInvitationAcceptAck | undefined;
  setFriendInvitationAcceptAck(value?: Invitation_pb.FriendInvitationAcceptAck): void;

  hasFriendInvitationDeclinedRequest(): boolean;
  clearFriendInvitationDeclinedRequest(): void;
  getFriendInvitationDeclinedRequest(): Invitation_pb.FriendInvitationDeclinedRequest | undefined;
  setFriendInvitationDeclinedRequest(value?: Invitation_pb.FriendInvitationDeclinedRequest): void;

  hasFriendInvitationDeclinedAck(): boolean;
  clearFriendInvitationDeclinedAck(): void;
  getFriendInvitationDeclinedAck(): Invitation_pb.FriendInvitationDeclinedAck | undefined;
  setFriendInvitationDeclinedAck(value?: Invitation_pb.FriendInvitationDeclinedAck): void;

  hasFriendInvitationRequest(): boolean;
  clearFriendInvitationRequest(): void;
  getFriendInvitationRequest(): Invitation_pb.FriendInvitationRequest | undefined;
  setFriendInvitationRequest(value?: Invitation_pb.FriendInvitationRequest): void;

  hasFriendInvitationAck(): boolean;
  clearFriendInvitationAck(): void;
  getFriendInvitationAck(): Invitation_pb.FriendInvitationAck | undefined;
  setFriendInvitationAck(value?: Invitation_pb.FriendInvitationAck): void;

  hasFriendRequest(): boolean;
  clearFriendRequest(): void;
  getFriendRequest(): Invitation_pb.FriendRequest | undefined;
  setFriendRequest(value?: Invitation_pb.FriendRequest): void;

  hasFriendAck(): boolean;
  clearFriendAck(): void;
  getFriendAck(): Invitation_pb.FriendAck | undefined;
  setFriendAck(value?: Invitation_pb.FriendAck): void;

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
    msgAck?: Msg_pb.MsgAck.AsObject,
    queryUserGroupRequest?: Group_pb.QueryUserGroupsRequest.AsObject,
    queryUserGroupAck?: Group_pb.QueryUserGroupsAck.AsObject,
    friendInvitationRequestRequest?: Invitation_pb.FriendInvitationRequestRequest.AsObject,
    friendInvitationRequestAck?: Invitation_pb.FriendInvitationRequestAck.AsObject,
    friendInvitationAcceptRequest?: Invitation_pb.FriendInvitationAcceptRequest.AsObject,
    friendInvitationAcceptAck?: Invitation_pb.FriendInvitationAcceptAck.AsObject,
    friendInvitationDeclinedRequest?: Invitation_pb.FriendInvitationDeclinedRequest.AsObject,
    friendInvitationDeclinedAck?: Invitation_pb.FriendInvitationDeclinedAck.AsObject,
    friendInvitationRequest?: Invitation_pb.FriendInvitationRequest.AsObject,
    friendInvitationAck?: Invitation_pb.FriendInvitationAck.AsObject,
    friendRequest?: Invitation_pb.FriendRequest.AsObject,
    friendAck?: Invitation_pb.FriendAck.AsObject,
  }

  export enum PayloadCase {
    PAYLOAD_NOT_SET = 0,
    AUTH_REQUEST = 11,
    AUTH_ACK = 12,
    MSG_REQUEST = 20,
    MSG_ACK = 23,
    QUERY_USER_GROUP_REQUEST = 21,
    QUERY_USER_GROUP_ACK = 22,
    FRIEND_INVITATION_REQUEST_REQUEST = 1001,
    FRIEND_INVITATION_REQUEST_ACK = 1002,
    FRIEND_INVITATION_ACCEPT_REQUEST = 1003,
    FRIEND_INVITATION_ACCEPT_ACK = 1004,
    FRIEND_INVITATION_DECLINED_REQUEST = 1005,
    FRIEND_INVITATION_DECLINED_ACK = 1006,
    FRIEND_INVITATION_REQUEST = 1007,
    FRIEND_INVITATION_ACK = 1008,
    FRIEND_REQUEST = 1009,
    FRIEND_ACK = 1010,
  }
}

