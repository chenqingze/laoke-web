
export enum InviteStatus {
    REQUESTED= 'REQUESTED', READ= 'READ', ACCEPTED= 'ACCEPTED', DECLINED= 'DECLINED', IGNORED= 'DECLINED'
}

export enum InviteType {
    INVITE_FRIEND= 'INVITE_FRIEND', // 好友邀请
    INVITE_MEMBER= 'INVITE_MEMBER' // 成员邀请
}

export enum ReadStatus {
    READ= 1, // 好友邀请
    UNREAD= 0 // 成员邀请
}

export class Invitation {
    id: string;
    requesterId: string;
    requesterAlias: string;
    requesterNickname: string;
    requesterProfile: string;
    addresseeId: string;
    addresseeAlias: string;
    addresseeNickname: string;
    addresseeProfile: string;
    content: string;
    inviteStatus: string;
    inviteType: string;
    readStatus: number;
    createdAt: number;
    updatedAt: number;
}
