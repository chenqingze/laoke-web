// package: 
// file: Group.proto

import * as jspb from "google-protobuf";

export class CreateGroupRequest extends jspb.Message {
  clearUsersList(): void;
  getUsersList(): Array<string>;
  setUsersList(value: Array<string>): void;
  addUsers(value: string, index?: number): string;

  getOwner(): string;
  setOwner(value: string): void;

  getHeader(): string;
  setHeader(value: string): void;

  getName(): string;
  setName(value: string): void;

  getGroupId(): string;
  setGroupId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateGroupRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateGroupRequest): CreateGroupRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateGroupRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateGroupRequest;
  static deserializeBinaryFromReader(message: CreateGroupRequest, reader: jspb.BinaryReader): CreateGroupRequest;
}

export namespace CreateGroupRequest {
  export type AsObject = {
    usersList: Array<string>,
    owner: string,
    header: string,
    name: string,
    groupId: string,
  }
}

export class CreateGroupAck extends jspb.Message {
  getSuccess(): string;
  setSuccess(value: string): void;

  getMessage(): string;
  setMessage(value: string): void;

  getGroupId(): string;
  setGroupId(value: string): void;

  getOwner(): string;
  setOwner(value: string): void;

  getName(): string;
  setName(value: string): void;

  getHeader(): string;
  setHeader(value: string): void;

  getGroupNo(): string;
  setGroupNo(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateGroupAck.AsObject;
  static toObject(includeInstance: boolean, msg: CreateGroupAck): CreateGroupAck.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateGroupAck, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateGroupAck;
  static deserializeBinaryFromReader(message: CreateGroupAck, reader: jspb.BinaryReader): CreateGroupAck;
}

export namespace CreateGroupAck {
  export type AsObject = {
    success: string,
    message: string,
    groupId: string,
    owner: string,
    name: string,
    header: string,
    groupNo: string,
  }
}

export class DismissGroupRequest extends jspb.Message {
  getTime(): number;
  setTime(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DismissGroupRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DismissGroupRequest): DismissGroupRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DismissGroupRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DismissGroupRequest;
  static deserializeBinaryFromReader(message: DismissGroupRequest, reader: jspb.BinaryReader): DismissGroupRequest;
}

export namespace DismissGroupRequest {
  export type AsObject = {
    time: number,
  }
}

export class QueryUserGroupsRequest extends jspb.Message {
  getUserId(): number;
  setUserId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryUserGroupsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryUserGroupsRequest): QueryUserGroupsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryUserGroupsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryUserGroupsRequest;
  static deserializeBinaryFromReader(message: QueryUserGroupsRequest, reader: jspb.BinaryReader): QueryUserGroupsRequest;
}

export namespace QueryUserGroupsRequest {
  export type AsObject = {
    userId: number,
  }
}

export class QueryUserGroupsAck extends jspb.Message {
  clearGroupsList(): void;
  getGroupsList(): Array<Group>;
  setGroupsList(value: Array<Group>): void;
  addGroups(value?: Group, index?: number): Group;

  getUserId(): number;
  setUserId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryUserGroupsAck.AsObject;
  static toObject(includeInstance: boolean, msg: QueryUserGroupsAck): QueryUserGroupsAck.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryUserGroupsAck, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryUserGroupsAck;
  static deserializeBinaryFromReader(message: QueryUserGroupsAck, reader: jspb.BinaryReader): QueryUserGroupsAck;
}

export namespace QueryUserGroupsAck {
  export type AsObject = {
    groupsList: Array<Group.AsObject>,
    userId: number,
  }
}

export class Group extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getName(): string;
  setName(value: string): void;

  getNotice(): string;
  setNotice(value: string): void;

  getQrCode(): string;
  setQrCode(value: string): void;

  hasSetting(): boolean;
  clearSetting(): void;
  getSetting(): GroupSetting | undefined;
  setSetting(value?: GroupSetting): void;

  getOwner(): string;
  setOwner(value: string): void;

  getGroupNo(): string;
  setGroupNo(value: string): void;

  getHeader(): string;
  setHeader(value: string): void;

  clearMembersList(): void;
  getMembersList(): Array<GroupMember>;
  setMembersList(value: Array<GroupMember>): void;
  addMembers(value?: GroupMember, index?: number): GroupMember;

  getPinyin(): string;
  setPinyin(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Group.AsObject;
  static toObject(includeInstance: boolean, msg: Group): Group.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Group, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Group;
  static deserializeBinaryFromReader(message: Group, reader: jspb.BinaryReader): Group;
}

export namespace Group {
  export type AsObject = {
    id: string,
    name: string,
    notice: string,
    qrCode: string,
    setting?: GroupSetting.AsObject,
    owner: string,
    groupNo: string,
    header: string,
    membersList: Array<GroupMember.AsObject>,
    pinyin: string,
  }
}

export class GroupSetting extends jspb.Message {
  getIsmute(): boolean;
  setIsmute(value: boolean): void;

  getIsconfirmjoin(): boolean;
  setIsconfirmjoin(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GroupSetting.AsObject;
  static toObject(includeInstance: boolean, msg: GroupSetting): GroupSetting.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GroupSetting, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GroupSetting;
  static deserializeBinaryFromReader(message: GroupSetting, reader: jspb.BinaryReader): GroupSetting;
}

export namespace GroupSetting {
  export type AsObject = {
    ismute: boolean,
    isconfirmjoin: boolean,
  }
}

export class GroupMember extends jspb.Message {
  getMemberId(): string;
  setMemberId(value: string): void;

  getUserId(): number;
  setUserId(value: number): void;

  getProfilePhoto(): string;
  setProfilePhoto(value: string): void;

  getNickname(): string;
  setNickname(value: string): void;

  getAlias(): string;
  setAlias(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GroupMember.AsObject;
  static toObject(includeInstance: boolean, msg: GroupMember): GroupMember.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GroupMember, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GroupMember;
  static deserializeBinaryFromReader(message: GroupMember, reader: jspb.BinaryReader): GroupMember;
}

export namespace GroupMember {
  export type AsObject = {
    memberId: string,
    userId: number,
    profilePhoto: string,
    nickname: string,
    alias: string,
  }
}

export class AskFroJoinGroupRequest extends jspb.Message {
  getGroupId(): string;
  setGroupId(value: string): void;

  getUserId(): string;
  setUserId(value: string): void;

  getMessage(): string;
  setMessage(value: string): void;

  getSuccess(): string;
  setSuccess(value: string): void;

  getContent(): string;
  setContent(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AskFroJoinGroupRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AskFroJoinGroupRequest): AskFroJoinGroupRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AskFroJoinGroupRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AskFroJoinGroupRequest;
  static deserializeBinaryFromReader(message: AskFroJoinGroupRequest, reader: jspb.BinaryReader): AskFroJoinGroupRequest;
}

export namespace AskFroJoinGroupRequest {
  export type AsObject = {
    groupId: string,
    userId: string,
    message: string,
    success: string,
    content: string,
  }
}

export class AskForJoinGroupAck extends jspb.Message {
  getGroupId(): string;
  setGroupId(value: string): void;

  getUserId(): string;
  setUserId(value: string): void;

  getMessage(): string;
  setMessage(value: string): void;

  getSuccess(): string;
  setSuccess(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AskForJoinGroupAck.AsObject;
  static toObject(includeInstance: boolean, msg: AskForJoinGroupAck): AskForJoinGroupAck.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AskForJoinGroupAck, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AskForJoinGroupAck;
  static deserializeBinaryFromReader(message: AskForJoinGroupAck, reader: jspb.BinaryReader): AskForJoinGroupAck;
}

export namespace AskForJoinGroupAck {
  export type AsObject = {
    groupId: string,
    userId: string,
    message: string,
    success: string,
  }
}

export class InvitationJoinGroupRequest extends jspb.Message {
  getGroupId(): string;
  setGroupId(value: string): void;

  clearUserList(): void;
  getUserList(): Array<string>;
  setUserList(value: Array<string>): void;
  addUser(value: string, index?: number): string;

  getCurrentUser(): string;
  setCurrentUser(value: string): void;

  getMessage(): string;
  setMessage(value: string): void;

  getSuccess(): string;
  setSuccess(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InvitationJoinGroupRequest.AsObject;
  static toObject(includeInstance: boolean, msg: InvitationJoinGroupRequest): InvitationJoinGroupRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: InvitationJoinGroupRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InvitationJoinGroupRequest;
  static deserializeBinaryFromReader(message: InvitationJoinGroupRequest, reader: jspb.BinaryReader): InvitationJoinGroupRequest;
}

export namespace InvitationJoinGroupRequest {
  export type AsObject = {
    groupId: string,
    userList: Array<string>,
    currentUser: string,
    message: string,
    success: string,
  }
}

export class InvitationJoinGroupAck extends jspb.Message {
  getGroupId(): string;
  setGroupId(value: string): void;

  getSuccess(): string;
  setSuccess(value: string): void;

  getMessage(): string;
  setMessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InvitationJoinGroupAck.AsObject;
  static toObject(includeInstance: boolean, msg: InvitationJoinGroupAck): InvitationJoinGroupAck.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: InvitationJoinGroupAck, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InvitationJoinGroupAck;
  static deserializeBinaryFromReader(message: InvitationJoinGroupAck, reader: jspb.BinaryReader): InvitationJoinGroupAck;
}

export namespace InvitationJoinGroupAck {
  export type AsObject = {
    groupId: string,
    success: string,
    message: string,
  }
}

export class RemoveGroupMemberRequest extends jspb.Message {
  getGroupId(): string;
  setGroupId(value: string): void;

  clearUserList(): void;
  getUserList(): Array<string>;
  setUserList(value: Array<string>): void;
  addUser(value: string, index?: number): string;

  getCurrentUser(): string;
  setCurrentUser(value: string): void;

  getMessage(): string;
  setMessage(value: string): void;

  getSuccess(): string;
  setSuccess(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveGroupMemberRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveGroupMemberRequest): RemoveGroupMemberRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RemoveGroupMemberRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveGroupMemberRequest;
  static deserializeBinaryFromReader(message: RemoveGroupMemberRequest, reader: jspb.BinaryReader): RemoveGroupMemberRequest;
}

export namespace RemoveGroupMemberRequest {
  export type AsObject = {
    groupId: string,
    userList: Array<string>,
    currentUser: string,
    message: string,
    success: string,
  }
}

export class RemoveGroupMemberAck extends jspb.Message {
  getGroupId(): string;
  setGroupId(value: string): void;

  getMessage(): string;
  setMessage(value: string): void;

  getSuccess(): string;
  setSuccess(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveGroupMemberAck.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveGroupMemberAck): RemoveGroupMemberAck.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RemoveGroupMemberAck, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveGroupMemberAck;
  static deserializeBinaryFromReader(message: RemoveGroupMemberAck, reader: jspb.BinaryReader): RemoveGroupMemberAck;
}

export namespace RemoveGroupMemberAck {
  export type AsObject = {
    groupId: string,
    message: string,
    success: string,
  }
}

export class ChangeGroupNameRequest extends jspb.Message {
  getGroupId(): string;
  setGroupId(value: string): void;

  getGroupName(): string;
  setGroupName(value: string): void;

  getSuccess(): string;
  setSuccess(value: string): void;

  getMessage(): string;
  setMessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChangeGroupNameRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ChangeGroupNameRequest): ChangeGroupNameRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ChangeGroupNameRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChangeGroupNameRequest;
  static deserializeBinaryFromReader(message: ChangeGroupNameRequest, reader: jspb.BinaryReader): ChangeGroupNameRequest;
}

export namespace ChangeGroupNameRequest {
  export type AsObject = {
    groupId: string,
    groupName: string,
    success: string,
    message: string,
  }
}

export class ChangeGroupNameAck extends jspb.Message {
  getGroupId(): string;
  setGroupId(value: string): void;

  getGroupName(): string;
  setGroupName(value: string): void;

  getSuccess(): string;
  setSuccess(value: string): void;

  getMessage(): string;
  setMessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChangeGroupNameAck.AsObject;
  static toObject(includeInstance: boolean, msg: ChangeGroupNameAck): ChangeGroupNameAck.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ChangeGroupNameAck, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChangeGroupNameAck;
  static deserializeBinaryFromReader(message: ChangeGroupNameAck, reader: jspb.BinaryReader): ChangeGroupNameAck;
}

export namespace ChangeGroupNameAck {
  export type AsObject = {
    groupId: string,
    groupName: string,
    success: string,
    message: string,
  }
}

export class ChangeGroupNoticeRequest extends jspb.Message {
  getGroupId(): string;
  setGroupId(value: string): void;

  getNotice(): string;
  setNotice(value: string): void;

  getSuccess(): string;
  setSuccess(value: string): void;

  getMessage(): string;
  setMessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChangeGroupNoticeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ChangeGroupNoticeRequest): ChangeGroupNoticeRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ChangeGroupNoticeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChangeGroupNoticeRequest;
  static deserializeBinaryFromReader(message: ChangeGroupNoticeRequest, reader: jspb.BinaryReader): ChangeGroupNoticeRequest;
}

export namespace ChangeGroupNoticeRequest {
  export type AsObject = {
    groupId: string,
    notice: string,
    success: string,
    message: string,
  }
}

export class ChangeGroupNoticeAck extends jspb.Message {
  getGroupId(): string;
  setGroupId(value: string): void;

  getNotice(): string;
  setNotice(value: string): void;

  getSuccess(): string;
  setSuccess(value: string): void;

  getMessage(): string;
  setMessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChangeGroupNoticeAck.AsObject;
  static toObject(includeInstance: boolean, msg: ChangeGroupNoticeAck): ChangeGroupNoticeAck.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ChangeGroupNoticeAck, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChangeGroupNoticeAck;
  static deserializeBinaryFromReader(message: ChangeGroupNoticeAck, reader: jspb.BinaryReader): ChangeGroupNoticeAck;
}

export namespace ChangeGroupNoticeAck {
  export type AsObject = {
    groupId: string,
    notice: string,
    success: string,
    message: string,
  }
}

export class ChangeMucMuteRequest extends jspb.Message {
  getGroupId(): string;
  setGroupId(value: string): void;

  getMute(): boolean;
  setMute(value: boolean): void;

  getSuccess(): string;
  setSuccess(value: string): void;

  getMessage(): string;
  setMessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChangeMucMuteRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ChangeMucMuteRequest): ChangeMucMuteRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ChangeMucMuteRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChangeMucMuteRequest;
  static deserializeBinaryFromReader(message: ChangeMucMuteRequest, reader: jspb.BinaryReader): ChangeMucMuteRequest;
}

export namespace ChangeMucMuteRequest {
  export type AsObject = {
    groupId: string,
    mute: boolean,
    success: string,
    message: string,
  }
}

export class ChangeMucMuteAck extends jspb.Message {
  getGroupId(): string;
  setGroupId(value: string): void;

  getMute(): boolean;
  setMute(value: boolean): void;

  getSuccess(): string;
  setSuccess(value: string): void;

  getMessage(): string;
  setMessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChangeMucMuteAck.AsObject;
  static toObject(includeInstance: boolean, msg: ChangeMucMuteAck): ChangeMucMuteAck.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ChangeMucMuteAck, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChangeMucMuteAck;
  static deserializeBinaryFromReader(message: ChangeMucMuteAck, reader: jspb.BinaryReader): ChangeMucMuteAck;
}

export namespace ChangeMucMuteAck {
  export type AsObject = {
    groupId: string,
    mute: boolean,
    success: string,
    message: string,
  }
}

export class ChangeMucConfirmJoinRequest extends jspb.Message {
  getGroupId(): string;
  setGroupId(value: string): void;

  getConfirm(): boolean;
  setConfirm(value: boolean): void;

  getSuccess(): string;
  setSuccess(value: string): void;

  getMessage(): string;
  setMessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChangeMucConfirmJoinRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ChangeMucConfirmJoinRequest): ChangeMucConfirmJoinRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ChangeMucConfirmJoinRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChangeMucConfirmJoinRequest;
  static deserializeBinaryFromReader(message: ChangeMucConfirmJoinRequest, reader: jspb.BinaryReader): ChangeMucConfirmJoinRequest;
}

export namespace ChangeMucConfirmJoinRequest {
  export type AsObject = {
    groupId: string,
    confirm: boolean,
    success: string,
    message: string,
  }
}

export class ChangeMucConfirmJoinAck extends jspb.Message {
  getGroupId(): string;
  setGroupId(value: string): void;

  getConfirm(): boolean;
  setConfirm(value: boolean): void;

  getSuccess(): string;
  setSuccess(value: string): void;

  getMessage(): string;
  setMessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChangeMucConfirmJoinAck.AsObject;
  static toObject(includeInstance: boolean, msg: ChangeMucConfirmJoinAck): ChangeMucConfirmJoinAck.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ChangeMucConfirmJoinAck, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChangeMucConfirmJoinAck;
  static deserializeBinaryFromReader(message: ChangeMucConfirmJoinAck, reader: jspb.BinaryReader): ChangeMucConfirmJoinAck;
}

export namespace ChangeMucConfirmJoinAck {
  export type AsObject = {
    groupId: string,
    confirm: boolean,
    success: string,
    message: string,
  }
}

export class ExitGroupRequest extends jspb.Message {
  getGroupId(): string;
  setGroupId(value: string): void;

  getUserId(): string;
  setUserId(value: string): void;

  getSuccess(): string;
  setSuccess(value: string): void;

  getMessage(): string;
  setMessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExitGroupRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ExitGroupRequest): ExitGroupRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExitGroupRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExitGroupRequest;
  static deserializeBinaryFromReader(message: ExitGroupRequest, reader: jspb.BinaryReader): ExitGroupRequest;
}

export namespace ExitGroupRequest {
  export type AsObject = {
    groupId: string,
    userId: string,
    success: string,
    message: string,
  }
}

export class ExitGroupAck extends jspb.Message {
  getGroupId(): string;
  setGroupId(value: string): void;

  getUserId(): string;
  setUserId(value: string): void;

  getSuccess(): string;
  setSuccess(value: string): void;

  getMessage(): string;
  setMessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExitGroupAck.AsObject;
  static toObject(includeInstance: boolean, msg: ExitGroupAck): ExitGroupAck.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExitGroupAck, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExitGroupAck;
  static deserializeBinaryFromReader(message: ExitGroupAck, reader: jspb.BinaryReader): ExitGroupAck;
}

export namespace ExitGroupAck {
  export type AsObject = {
    groupId: string,
    userId: string,
    success: string,
    message: string,
  }
}

