import {OpCode} from '../../core/lib/OpCode_pb';
import {Friend} from '../../contacts/friends/shared/friend.model';
import {BaseModel} from '../../core/base.model';
import {Message} from '../../core/lib/Message_pb';
import {InvitationDeclinedAck} from '../../core/lib/Invitation_pb';

export class InvitationDeclinedAckModel extends BaseModel {
    readonly opCode = OpCode.FRIEND_INVITATION_DECLINED_ACK;
    id:string;
    res:number; //0-失败，1-成功*/

    convertMessageToModel(message: Message): BaseModel {
        let friendInvitationDeclinedAck = message.getInvitationDeclinedAck();
        this.id = friendInvitationDeclinedAck.getId();
        this.res = friendInvitationDeclinedAck.getRes();
        return this;
    }

    convertToMessage(): Message {
        let friendInvitationDeclinedAck = new InvitationDeclinedAck();
        friendInvitationDeclinedAck.setId(this.id);
        friendInvitationDeclinedAck.setRes(this.res);

        const message = this.createMessage();
        message.setOpCode(this.opCode);
        message.setInvitationDeclinedAck(friendInvitationDeclinedAck);
        return message;
    }

}
