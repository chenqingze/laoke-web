import {BaseModel} from '../../core/base.model';
import {OpCode} from '../../core/lib/OpCode_pb';
import {Message} from '../../core/lib/Message_pb';
import {FriendInvitationAcceptRequest} from '../../core/lib/Invitation_pb';


export class FriendInvitationAcceptRequestModel extends BaseModel {
    readonly opCode = OpCode.FRIEND_INVITATION_ACCEPT_REQUEST;
    id:string;

    convertMessageToModel(message: Message): BaseModel {
        const friendInvitationAcceptRequest = message.getFriendInvitationAcceptRequest();
        this.id = friendInvitationAcceptRequest.getId();
        return this;
    }

    convertToMessage(): Message {
        const friendInvitationAcceptRequest = new FriendInvitationAcceptRequest();
        friendInvitationAcceptRequest.setId(this.id);
        const message = this.createMessage();
        message.setOpCode(this.opCode);
        message.setFriendInvitationAcceptRequest(friendInvitationAcceptRequest);
        return message;
    }

}
