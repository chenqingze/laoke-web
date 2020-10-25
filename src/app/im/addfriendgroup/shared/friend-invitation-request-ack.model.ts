import {BaseModel} from '../../core/base.model';
import {OpCode} from '../../core/lib/OpCode_pb';
import {Message} from '../../core/lib/Message_pb';
import {AuthAck} from '../../core/lib/Auth_pb';
import {FriendInvitationRequestAck, FriendInvitationRequestRequest} from '../../core/lib/Invitation_pb';


export class FriendInvitationRequestAckModel extends BaseModel {
    readonly opCode = OpCode.FRIEND_INVITATION_REQUEST_ACK;
    id:string;
    requesterId:string;
    requesterAlias:string;
    requesterNickname:string;
    addresseeId:string;
    addresseeAlias:string;
    addresseeNickname:string;
    content:string;
    inviteStatus:string;
    inviteType:string;
    createdAt:number;
    updatedAt:number;
    res:number; //0-失败，1-成功*/

    convertMessageToModel(message: Message): BaseModel {
        const friendInvitationRequestAck = message.getFriendInvitationRequestAck();
        this.id = friendInvitationRequestAck.getId();
        this.requesterId = friendInvitationRequestAck.getRequesterid();
        this.requesterAlias = friendInvitationRequestAck.getRequesteralias();
        this.requesterNickname = friendInvitationRequestAck.getRequesternickname();
        this.addresseeId = friendInvitationRequestAck.getAddresseeid();
        this.addresseeAlias = friendInvitationRequestAck.getAddresseealias();
        this.addresseeNickname = friendInvitationRequestAck.getAddresseenickname();
        this.content = friendInvitationRequestAck.getContent();
        this.inviteStatus = friendInvitationRequestAck.getInvitestatus();
        this.inviteType = friendInvitationRequestAck.getInvitetype();
        this.createdAt = friendInvitationRequestAck.getCreatedat();
        this.updatedAt = friendInvitationRequestAck.getUpdatedat();
        this.res = friendInvitationRequestAck.getRes();
        return this;
    }

    convertToMessage(): Message {
        const friendInvitationRequestAck = new FriendInvitationRequestAck();
        friendInvitationRequestAck.setId(this.id);
        friendInvitationRequestAck.setRequesterid(this.requesterId);
        friendInvitationRequestAck.setRequesteralias(this.requesterAlias);
        friendInvitationRequestAck.setRequesternickname(this.requesterNickname);
        friendInvitationRequestAck.setAddresseeid(this.addresseeId);
        friendInvitationRequestAck.setAddresseealias(this.addresseeId);
        friendInvitationRequestAck.setAddresseenickname(this.addresseeId);
        friendInvitationRequestAck.setContent(this.addresseeId);
        friendInvitationRequestAck.setInvitestatus(this.addresseeId);
        friendInvitationRequestAck.setInvitetype(this.addresseeId);
        friendInvitationRequestAck.setCreatedat(this.createdAt);
        friendInvitationRequestAck.setUpdatedat(this.updatedAt);
        friendInvitationRequestAck.setRes(this.res);
        const message = this.createMessage();
        message.setOpCode(this.opCode);
        message.setFriendInvitationRequestRequest(friendInvitationRequestAck);
        return message;
    }

}
