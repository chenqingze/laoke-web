

import {BaseModel} from '../../core/base.model';
import {OpCode} from '../../core/lib/OpCode_pb';
import {Message} from '../../core/lib/Message_pb';
import {InvitationAcceptAck} from '../../core/lib/Invitation_pb';
import {FriendProto as FriendModel} from '../../core/lib/Friend_pb';
import {Friend} from '../../contacts/friends/shared/friend.model';


export class InvitationAcceptAckModel extends BaseModel {
    readonly opCode = OpCode.INVITATION_ACCEPT_ACK;
    id: string;
    friend: Friend;
    res: number; // 0-失败，1-成功*/

    convertMessageToModel(message: Message): BaseModel {
        const friendInvitationAcceptAck = message.getInvitationAcceptAck();
        this.id = friendInvitationAcceptAck.getId();
        const friendModel = friendInvitationAcceptAck.getFriendproto();
        const friend = new Friend();
        friend.id = friendModel.getId();
        friend.userId = friendModel.getUserid();
        friend.friendId = friendModel.getFriendid();
        friend.friendName = friendModel.getFriendname();
        friend.friendProfile = friendModel.getFriendprofile();
        friend.alias = friendModel.getAlias();
        friend.isBlocked = friendModel.getIsblocked();
        friend.isMute = friendModel.getIsmute();
        friend.isStickOnTop = friendModel.getIsstickontop();
        friend.status = friendModel.getUserid();
        friend.createdAt = friendModel.getCreatedat();
        friend.updatedAt = friendModel.getUpdatedat();
        this.friend = friend;
        this.res = friendInvitationAcceptAck.getRes();
        return this;
    }

    convertToMessage(): Message {
        const friendInvitationAcceptAck = new InvitationAcceptAck();
        friendInvitationAcceptAck.setId(this.id);
        const friendModel = new FriendModel();
        friendModel.setId(this.friend.id);
        friendModel.setUserid(this.friend.userId);
        friendModel.setFriendid(this.friend.friendId);
        friendModel.setFriendname(this.friend.friendName);
        friendModel.setFriendprofile(this.friend.friendProfile);
        friendModel.setAlias(this.friend.alias);
        friendModel.setIsblocked(this.friend.isBlocked);
        friendModel.setIsmute(this.friend.isMute);
        friendModel.setIsstickontop(this.friend.isStickOnTop);
        friendModel.setStatus(this.friend.status);
        friendModel.setCreatedat(this.friend.createdAt);
        friendModel.setUpdatedat(this.friend.updatedAt);
        friendInvitationAcceptAck.setFriendproto(friendModel);
        friendInvitationAcceptAck.setRes(this.res);
        const message = this.createMessage();
        message.setOpCode(this.opCode);
        message.setInvitationAcceptAck(friendInvitationAcceptAck);
        return message;
    }

}
