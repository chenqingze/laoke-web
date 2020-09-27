import {OpCode} from '../../core/lib/OpCode_pb';
import {BaseModel} from '../../core/base.model';
import {Message} from '../../core/lib/Message_pb';
import {FriendInvitationDeclinedRequest} from '../../core/lib/Invitation_pb';


export class FriendInvitationDeclinedRequestModel extends BaseModel {
    readonly opCode = OpCode.FRIEND_INVITATION_DECLINED_REQUEST;
    id:string;

    convertMessageToModel(message: Message): BaseModel {
        let friendInvitationDeclinedRequest = message.getFriendInvitationDeclinedRequest();
        this.id = friendInvitationDeclinedRequest.getId();
        return this;
    }

    convertToMessage(): Message {
        let friendInvitationDeclinedRequest = new FriendInvitationDeclinedRequest();
        friendInvitationDeclinedRequest.setId(this.id);

        const message = this.createMessage();
        message.setOpCode(this.opCode);
        message.setFriendInvitationDeclinedRequest(friendInvitationDeclinedRequest);
        return message;
    }



}
