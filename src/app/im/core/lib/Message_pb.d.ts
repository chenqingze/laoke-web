// package: 
// file: Message.proto

import * as jspb from "google-protobuf";
import * as Msg_pb from "./Msg_pb";
import * as OpCode_pb from "./OpCode_pb";
import * as Connection_pb from "./Connection_pb";
import * as Auth_pb from "./Auth_pb";
import * as Group_pb from "./Group_pb";
import * as Invitation_pb from "./Invitation_pb";
import * as Friend_pb from "./Friend_pb";

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

  hasAskForJoinGroupRequest(): boolean;
  clearAskForJoinGroupRequest(): void;
  getAskForJoinGroupRequest(): Group_pb.AskFroJoinGroupRequest | undefined;
  setAskForJoinGroupRequest(value?: Group_pb.AskFroJoinGroupRequest): void;

  hasAskForJoinGroupAck(): boolean;
  clearAskForJoinGroupAck(): void;
  getAskForJoinGroupAck(): Group_pb.AskForJoinGroupAck | undefined;
  setAskForJoinGroupAck(value?: Group_pb.AskForJoinGroupAck): void;

  hasInvitationJoinGroupRequest(): boolean;
  clearInvitationJoinGroupRequest(): void;
  getInvitationJoinGroupRequest(): Group_pb.InvitationJoinGroupRequest | undefined;
  setInvitationJoinGroupRequest(value?: Group_pb.InvitationJoinGroupRequest): void;

  hasInvitationJoinGroupAck(): boolean;
  clearInvitationJoinGroupAck(): void;
  getInvitationJoinGroupAck(): Group_pb.InvitationJoinGroupAck | undefined;
  setInvitationJoinGroupAck(value?: Group_pb.InvitationJoinGroupAck): void;

  hasCreateGroupRequest(): boolean;
  clearCreateGroupRequest(): void;
  getCreateGroupRequest(): Group_pb.CreateGroupRequest | undefined;
  setCreateGroupRequest(value?: Group_pb.CreateGroupRequest): void;

  hasCreateGroupAck(): boolean;
  clearCreateGroupAck(): void;
  getCreateGroupAck(): Group_pb.CreateGroupAck | undefined;
  setCreateGroupAck(value?: Group_pb.CreateGroupAck): void;

  hasRemoveGroupMemberRequest(): boolean;
  clearRemoveGroupMemberRequest(): void;
  getRemoveGroupMemberRequest(): Group_pb.RemoveGroupMemberRequest | undefined;
  setRemoveGroupMemberRequest(value?: Group_pb.RemoveGroupMemberRequest): void;

  hasRemoveGroupMemberAck(): boolean;
  clearRemoveGroupMemberAck(): void;
  getRemoveGroupMemberAck(): Group_pb.RemoveGroupMemberAck | undefined;
  setRemoveGroupMemberAck(value?: Group_pb.RemoveGroupMemberAck): void;

  hasChangeGroupNameRequest(): boolean;
  clearChangeGroupNameRequest(): void;
  getChangeGroupNameRequest(): Group_pb.ChangeGroupNameRequest | undefined;
  setChangeGroupNameRequest(value?: Group_pb.ChangeGroupNameRequest): void;

  hasChangeGroupNameAck(): boolean;
  clearChangeGroupNameAck(): void;
  getChangeGroupNameAck(): Group_pb.ChangeGroupNameAck | undefined;
  setChangeGroupNameAck(value?: Group_pb.ChangeGroupNameAck): void;

  hasChangeGroupNoticeRequest(): boolean;
  clearChangeGroupNoticeRequest(): void;
  getChangeGroupNoticeRequest(): Group_pb.ChangeGroupNoticeRequest | undefined;
  setChangeGroupNoticeRequest(value?: Group_pb.ChangeGroupNoticeRequest): void;

  hasChangeGroupNoticeAck(): boolean;
  clearChangeGroupNoticeAck(): void;
  getChangeGroupNoticeAck(): Group_pb.ChangeGroupNoticeAck | undefined;
  setChangeGroupNoticeAck(value?: Group_pb.ChangeGroupNoticeAck): void;

  hasChangeMucMuteRequest(): boolean;
  clearChangeMucMuteRequest(): void;
  getChangeMucMuteRequest(): Group_pb.ChangeMucMuteRequest | undefined;
  setChangeMucMuteRequest(value?: Group_pb.ChangeMucMuteRequest): void;

  hasChangeMucMuteAck(): boolean;
  clearChangeMucMuteAck(): void;
  getChangeMucMuteAck(): Group_pb.ChangeMucMuteAck | undefined;
  setChangeMucMuteAck(value?: Group_pb.ChangeMucMuteAck): void;

  hasChangeMucConfirmJoinRequest(): boolean;
  clearChangeMucConfirmJoinRequest(): void;
  getChangeMucConfirmJoinRequest(): Group_pb.ChangeMucConfirmJoinRequest | undefined;
  setChangeMucConfirmJoinRequest(value?: Group_pb.ChangeMucConfirmJoinRequest): void;

  hasChangeMucConfirmJoinAck(): boolean;
  clearChangeMucConfirmJoinAck(): void;
  getChangeMucConfirmJoinAck(): Group_pb.ChangeMucConfirmJoinAck | undefined;
  setChangeMucConfirmJoinAck(value?: Group_pb.ChangeMucConfirmJoinAck): void;

  hasExitGroupRequest(): boolean;
  clearExitGroupRequest(): void;
  getExitGroupRequest(): Group_pb.ExitGroupRequest | undefined;
  setExitGroupRequest(value?: Group_pb.ExitGroupRequest): void;

  hasExitGroupAck(): boolean;
  clearExitGroupAck(): void;
  getExitGroupAck(): Group_pb.ExitGroupAck | undefined;
  setExitGroupAck(value?: Group_pb.ExitGroupAck): void;

  hasInvitationRequestRequest(): boolean;
  clearInvitationRequestRequest(): void;
  getInvitationRequestRequest(): Invitation_pb.InvitationRequestRequest | undefined;
  setInvitationRequestRequest(value?: Invitation_pb.InvitationRequestRequest): void;

  hasInvitationRequestAck(): boolean;
  clearInvitationRequestAck(): void;
  getInvitationRequestAck(): Invitation_pb.InvitationRequestAck | undefined;
  setInvitationRequestAck(value?: Invitation_pb.InvitationRequestAck): void;

  hasInvitationAcceptRequest(): boolean;
  clearInvitationAcceptRequest(): void;
  getInvitationAcceptRequest(): Invitation_pb.InvitationAcceptRequest | undefined;
  setInvitationAcceptRequest(value?: Invitation_pb.InvitationAcceptRequest): void;

  hasInvitationAcceptAck(): boolean;
  clearInvitationAcceptAck(): void;
  getInvitationAcceptAck(): Invitation_pb.InvitationAcceptAck | undefined;
  setInvitationAcceptAck(value?: Invitation_pb.InvitationAcceptAck): void;

  hasInvitationDeclinedRequest(): boolean;
  clearInvitationDeclinedRequest(): void;
  getInvitationDeclinedRequest(): Invitation_pb.InvitationDeclinedRequest | undefined;
  setInvitationDeclinedRequest(value?: Invitation_pb.InvitationDeclinedRequest): void;

  hasInvitationDeclinedAck(): boolean;
  clearInvitationDeclinedAck(): void;
  getInvitationDeclinedAck(): Invitation_pb.InvitationDeclinedAck | undefined;
  setInvitationDeclinedAck(value?: Invitation_pb.InvitationDeclinedAck): void;

  hasInvitationRequest(): boolean;
  clearInvitationRequest(): void;
  getInvitationRequest(): Invitation_pb.InvitationRequest | undefined;
  setInvitationRequest(value?: Invitation_pb.InvitationRequest): void;

  hasInvitationAck(): boolean;
  clearInvitationAck(): void;
  getInvitationAck(): Invitation_pb.InvitationAck | undefined;
  setInvitationAck(value?: Invitation_pb.InvitationAck): void;

  hasFriendRequest(): boolean;
  clearFriendRequest(): void;
  getFriendRequest(): Friend_pb.FriendRequest | undefined;
  setFriendRequest(value?: Friend_pb.FriendRequest): void;

  hasFriendAck(): boolean;
  clearFriendAck(): void;
  getFriendAck(): Friend_pb.FriendAck | undefined;
  setFriendAck(value?: Friend_pb.FriendAck): void;

  hasMsgReadNotify(): boolean;
  clearMsgReadNotify(): void;
  getMsgReadNotify(): Msg_pb.MsgReadNotify | undefined;
  setMsgReadNotify(value?: Msg_pb.MsgReadNotify): void;

  hasMsgReadAck(): boolean;
  clearMsgReadAck(): void;
  getMsgReadAck(): Msg_pb.MsgReadAck | undefined;
  setMsgReadAck(value?: Msg_pb.MsgReadAck): void;

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
    askForJoinGroupRequest?: Group_pb.AskFroJoinGroupRequest.AsObject,
    askForJoinGroupAck?: Group_pb.AskForJoinGroupAck.AsObject,
    invitationJoinGroupRequest?: Group_pb.InvitationJoinGroupRequest.AsObject,
    invitationJoinGroupAck?: Group_pb.InvitationJoinGroupAck.AsObject,
    createGroupRequest?: Group_pb.CreateGroupRequest.AsObject,
    createGroupAck?: Group_pb.CreateGroupAck.AsObject,
    removeGroupMemberRequest?: Group_pb.RemoveGroupMemberRequest.AsObject,
    removeGroupMemberAck?: Group_pb.RemoveGroupMemberAck.AsObject,
    changeGroupNameRequest?: Group_pb.ChangeGroupNameRequest.AsObject,
    changeGroupNameAck?: Group_pb.ChangeGroupNameAck.AsObject,
    changeGroupNoticeRequest?: Group_pb.ChangeGroupNoticeRequest.AsObject,
    changeGroupNoticeAck?: Group_pb.ChangeGroupNoticeAck.AsObject,
    changeMucMuteRequest?: Group_pb.ChangeMucMuteRequest.AsObject,
    changeMucMuteAck?: Group_pb.ChangeMucMuteAck.AsObject,
    changeMucConfirmJoinRequest?: Group_pb.ChangeMucConfirmJoinRequest.AsObject,
    changeMucConfirmJoinAck?: Group_pb.ChangeMucConfirmJoinAck.AsObject,
    exitGroupRequest?: Group_pb.ExitGroupRequest.AsObject,
    exitGroupAck?: Group_pb.ExitGroupAck.AsObject,
    invitationRequestRequest?: Invitation_pb.InvitationRequestRequest.AsObject,
    invitationRequestAck?: Invitation_pb.InvitationRequestAck.AsObject,
    invitationAcceptRequest?: Invitation_pb.InvitationAcceptRequest.AsObject,
    invitationAcceptAck?: Invitation_pb.InvitationAcceptAck.AsObject,
    invitationDeclinedRequest?: Invitation_pb.InvitationDeclinedRequest.AsObject,
    invitationDeclinedAck?: Invitation_pb.InvitationDeclinedAck.AsObject,
    invitationRequest?: Invitation_pb.InvitationRequest.AsObject,
    invitationAck?: Invitation_pb.InvitationAck.AsObject,
    friendRequest?: Friend_pb.FriendRequest.AsObject,
    friendAck?: Friend_pb.FriendAck.AsObject,
    msgReadNotify?: Msg_pb.MsgReadNotify.AsObject,
    msgReadAck?: Msg_pb.MsgReadAck.AsObject,
  }

  export enum PayloadCase {
    PAYLOAD_NOT_SET = 0,
    AUTH_REQUEST = 11,
    AUTH_ACK = 12,
    MSG_REQUEST = 20,
    MSG_ACK = 23,
    QUERY_USER_GROUP_REQUEST = 21,
    QUERY_USER_GROUP_ACK = 22,
    ASK_FOR_JOIN_GROUP_REQUEST = 24,
    ASK_FOR_JOIN_GROUP_ACK = 25,
    INVITATION_JOIN_GROUP_REQUEST = 26,
    INVITATION_JOIN_GROUP_ACK = 27,
    CREATE_GROUP_REQUEST = 28,
    CREATE_GROUP_ACK = 29,
    REMOVE_GROUP_MEMBER_REQUEST = 30,
    REMOVE_GROUP_MEMBER_ACK = 31,
    CHANGE_GROUP_NAME_REQUEST = 32,
    CHANGE_GROUP_NAME_ACK = 33,
    CHANGE_GROUP_NOTICE_REQUEST = 34,
    CHANGE_GROUP_NOTICE_ACK = 35,
    CHANGE_MUC_MUTE_REQUEST = 36,
    CHANGE_MUC_MUTE_ACK = 37,
    CHANGE_MUC_CONFIRM_JOIN_REQUEST = 38,
    CHANGE_MUC_CONFIRM_JOIN_ACK = 39,
    EXIT_GROUP_REQUEST = 40,
    EXIT_GROUP_ACK = 41,
    INVITATION_REQUEST_REQUEST = 1001,
    INVITATION_REQUEST_ACK = 1002,
    INVITATION_ACCEPT_REQUEST = 1003,
    INVITATION_ACCEPT_ACK = 1004,
    INVITATION_DECLINED_REQUEST = 1005,
    INVITATION_DECLINED_ACK = 1006,
    INVITATION_REQUEST = 1007,
    INVITATION_ACK = 1008,
    FRIEND_REQUEST = 1009,
    FRIEND_ACK = 1010,
    MSG_READ_NOTIFY = 1101,
    MSG_READ_ACK = 1102,
  }
}

