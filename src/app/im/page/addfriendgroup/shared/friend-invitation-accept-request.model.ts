import {BaseModel} from '../../../core/base.model';
import {OpCode} from '../../../core/lib/OpCode_pb';
import {Message} from '../../../core/lib/Message_pb';
import {InvitationAcceptRequest} from '../../../core/lib/Invitation_pb';


export class InvitationAcceptRequestModel extends BaseModel {
    readonly opCode = OpCode.INVITATION_ACCEPT_REQUEST;
    id: string;

    convertMessageToModel(message: Message): BaseModel {
        const friendInvitationAcceptRequest = message.getInvitationAcceptRequest();
        this.id = friendInvitationAcceptRequest.getId();
        return this;
    }

    convertToMessage(): Message {
        const friendInvitationAcceptRequest = new InvitationAcceptRequest();
        friendInvitationAcceptRequest.setId(this.id);
        const message = this.createMessage();
        message.setOpCode(this.opCode);
        message.setInvitationAcceptRequest(friendInvitationAcceptRequest);
        return message;
    }

}
