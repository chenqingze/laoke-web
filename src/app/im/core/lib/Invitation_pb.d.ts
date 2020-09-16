// package: 
// file: Invitation.proto

import * as jspb from "google-protobuf";

export class Invitation extends jspb.Message {
    getId(): string;

    setId(value: string): void;

    getRequesterid(): number;

    setRequesterid(value: number): void;

    getRequesteralias(): string;

    setRequesteralias(value: string): void;

    getRequesternickname(): string;

    setRequesternickname(value: string): void;

    getAddresseeid(): number;

    setAddresseeid(value: number): void;

    getAddresseealias(): string;

    setAddresseealias(value: string): void;

    getAddresseenickname(): string;

    setAddresseenickname(value: string): void;

    getContent(): string;

    setContent(value: string): void;

    getInviteStatus(): string;

    setInviteStatus(value: string): void;

    getInviteType(): string;

    setInviteType(value: string): void;

    getCreatedat(): number;

    setCreatedat(value: number): void;

    getUpdatedat(): number;

    setUpdatedat(value: number): void;

    serializeBinary(): Uint8Array;

    toObject(includeInstance?: boolean): Invitation.AsObject;

    static toObject(includeInstance: boolean, msg: Invitation): Invitation.AsObject;

    static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
    static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };

    static serializeBinaryToWriter(message: Invitation, writer: jspb.BinaryWriter): void;

    static deserializeBinary(bytes: Uint8Array): Invitation;

    static deserializeBinaryFromReader(message: Invitation, reader: jspb.BinaryReader): Invitation;
}

export namespace Invitation {
    export type AsObject = {
        id: string,
        requesterid: number,
        requesteralias: string,
        requesternickname: string,
        addresseeid: number,
        addresseealias: string,
        addresseenickname: string,
        content: string,
        inviteStatus: string,
        inviteType: string,
        createdat: number,
        updatedat: number,
    }
}

