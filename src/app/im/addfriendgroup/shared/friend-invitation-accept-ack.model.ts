

import {BaseModel} from '../../core/base.model';
import {OpCode} from '../../core/lib/OpCode_pb';
import {Message} from '../../core/lib/Message_pb';
import {FriendProto as FriendModel, FriendInvitationAcceptAck} from '../../core/lib/Invitation_pb';
import {Friend} from '../../contacts/friends/shared/friend.model';


export class FriendInvitationAcceptAckModel extends BaseModel {
    readonly opCode = OpCode.FRIEND_INVITATION_ACCEPT_ACK;
    id:string;
    friend:Friend;
    res:number; //0-失败，1-成功*/

    convertMessageToModel(message: Message): BaseModel {
        const friendInvitationAcceptAck = message.getFriendInvitationAcceptAck();
        this.id = friendInvitationAcceptAck.getId();
        let friendModel = friendInvitationAcceptAck.getFriendproto();
        const friend = new Friend();
        // friend.id = friendModel.getId();
        //todo: 更新好友信息
        this.friend = friend;
        this.res = friendInvitationAcceptAck.getRes();
        return this;
    }

    convertToMessage(): Message {
        const friendInvitationAcceptAck = new FriendInvitationAcceptAck();
        friendInvitationAcceptAck.setId(this.id);
        let friendModel = new FriendModel();
        friendModel.setId(this.friend.id);
        //todo: 更新好友信息
        friendInvitationAcceptAck.setFriendproto(friendModel);
        friendInvitationAcceptAck.setRes(this.res);
        const message = this.createMessage();
        message.setOpCode(this.opCode);
        message.setFriendInvitationAcceptAck(friendInvitationAcceptAck);
        return message;
    }

    convertToFriend(friendModel:FriendModel): Friend{
        let friend: Friend = new Friend();
        friend.id = friendModel.getId();
        return friend;
    }

}
