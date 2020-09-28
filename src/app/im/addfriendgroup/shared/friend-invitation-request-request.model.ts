import {BaseModel} from '../../core/base.model';
import {OpCode} from '../../core/lib/OpCode_pb';
import {Message} from '../../core/lib/Message_pb';
import {InvitationRequestRequest} from '../../core/lib/Invitation_pb';


export class InvitationRequestRequestModel extends BaseModel {
    readonly opCode = OpCode.INVITATION_REQUEST_REQUEST;
    addresseeId:string;
    addresseeAlias:string;
    content:string;

    convertMessageToModel(message: Message): BaseModel {
        const friendInvitationRequestRequest = message.getInvitationRequestRequest();
        this.addresseeId = friendInvitationRequestRequest.getAddresseeid();
        this.addresseeAlias = friendInvitationRequestRequest.getAddresseealias();
        this.content = friendInvitationRequestRequest.getContent();
        return this;
    }

    convertToMessage(): Message {
        const friendInvitationRequestRequest = new InvitationRequestRequest();
        friendInvitationRequestRequest.setAddresseeid(this.addresseeId);
        friendInvitationRequestRequest.setAddresseealias(this.addresseeAlias);
        friendInvitationRequestRequest.setContent(this.content);
        const message = this.createMessage();
        message.setOpCode(this.opCode);
        message.setInvitationRequestRequest(friendInvitationRequestRequest);
        return message;
    }

}
