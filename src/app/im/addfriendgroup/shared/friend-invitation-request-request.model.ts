import {BaseModel} from '../../core/base.model';
import {OpCode} from '../../core/lib/OpCode_pb';
import {Message} from '../../core/lib/Message_pb';
import {FriendInvitationRequestRequest} from '../../core/lib/Invitation_pb';


export class FriendInvitationRequestRequestModel extends BaseModel {
    readonly opCode = OpCode.FRIEND_INVITATION_REQUEST_REQUEST;
    addresseeId:string;
    addresseeAlias:string;
    content:string;

    convertMessageToModel(message: Message): BaseModel {
        const friendInvitationRequestRequest = message.getFriendInvitationRequestRequest();
        this.addresseeId = friendInvitationRequestRequest.getAddresseeid();
        this.addresseeAlias = friendInvitationRequestRequest.getAddresseealias();
        this.content = friendInvitationRequestRequest.getContent();
        return this;
    }

    convertToMessage(): Message {
        const friendInvitationRequestRequest = new FriendInvitationRequestRequest();
        friendInvitationRequestRequest.setAddresseeid(this.addresseeId);
        friendInvitationRequestRequest.setAddresseealias(this.addresseeAlias);
        friendInvitationRequestRequest.setContent(this.content);
        const message = this.createMessage();
        message.setOpCode(this.opCode);
        message.setFriendInvitationRequestRequest(friendInvitationRequestRequest);
        return message;
    }

}
