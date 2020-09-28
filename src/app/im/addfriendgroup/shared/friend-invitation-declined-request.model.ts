import {OpCode} from '../../core/lib/OpCode_pb';
import {BaseModel} from '../../core/base.model';
import {Message} from '../../core/lib/Message_pb';
import {InvitationDeclinedRequest} from '../../core/lib/Invitation_pb';


export class InvitationDeclinedRequestModel extends BaseModel {
    readonly opCode = OpCode.INVITATION_DECLINED_REQUEST;
    id: string;

    convertMessageToModel(message: Message): BaseModel {
        const friendInvitationDeclinedRequest = message.getInvitationDeclinedRequest();
        this.id = friendInvitationDeclinedRequest.getId();
        return this;
    }

    convertToMessage(): Message {
        const friendInvitationDeclinedRequest = new InvitationDeclinedRequest();
        friendInvitationDeclinedRequest.setId(this.id);

        const message = this.createMessage();
        message.setOpCode(this.opCode);
        message.setInvitationDeclinedRequest(friendInvitationDeclinedRequest);
        return message;
    }



}
