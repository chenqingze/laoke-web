// package: 
// file: Group.proto

import * as jspb from "google-protobuf";

export class CreateGroupRequest extends jspb.Message {
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

