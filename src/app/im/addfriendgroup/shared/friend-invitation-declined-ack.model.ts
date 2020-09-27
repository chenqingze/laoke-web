import {OpCode} from '../../core/lib/OpCode_pb';
import {Friend} from '../../contacts/friends/shared/friend.model';
import {BaseModel} from '../../core/base.model';
import {Message} from '../../core/lib/Message_pb';
import {FriendInvitationDeclinedAck} from '../../core/lib/Invitation_pb';

export class FriendInvitationDeclinedAckModel extends BaseModel {
    readonly opCode = OpCode.FRIEND_INVITATION_DECLINED_ACK;
    id:string;
    res:number; //0-失败，1-成功*/

    convertMessageToModel(message: Message): BaseModel {
        let friendInvitationDeclinedAck = message.getFriendInvitationDeclinedAck();
        this.id = friendInvitationDeclinedAck.getId();
        this.res = friendInvitationDeclinedAck.getRes();
        return this;
    }

    convertToMessage(): Message {
        let friendInvitationDeclinedAck = new FriendInvitationDeclinedAck();
        friendInvitationDeclinedAck.setId(this.id);
        friendInvitationDeclinedAck.setRes(this.res);

        const message = this.createMessage();
        message.setOpCode(this.opCode);
        message.setFriendInvitationDeclinedAck(friendInvitationDeclinedAck);
        return message;
    }

}
