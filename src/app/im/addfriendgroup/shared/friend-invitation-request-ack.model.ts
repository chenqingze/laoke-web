import {BaseModel} from '../../core/base.model';
import {OpCode} from '../../core/lib/OpCode_pb';
import {Message} from '../../core/lib/Message_pb';
import {InvitationRequestAck, InvitationProto} from '../../core/lib/Invitation_pb';
import {Invitation, ReadStatus} from './Invitation.model';


export class InvitationRequestAckModel extends BaseModel {
    readonly opCode = OpCode.INVITATION_REQUEST_ACK;
    invitation:Invitation;
    res:number; //0-失败，1-成功*/

    convertMessageToModel(message: Message): BaseModel {
        const friendInvitationRequestAck = message.getInvitationRequestAck();
        this.invitation = this.convertToInvitationModel(friendInvitationRequestAck.getInvitationproto()) ;
        this.res = friendInvitationRequestAck.getRes();
        return this;
    }

    convertToMessage(): Message {
        const friendInvitationRequestAck = new InvitationRequestAck();
        friendInvitationRequestAck.setInvitationproto(this.convertToInvitationMessage(this.invitation));
        friendInvitationRequestAck.setRes(this.res);
        const message = this.createMessage();
        message.setOpCode(this.opCode);
        message.setInvitationRequestAck(friendInvitationRequestAck);
        return message;
    }

    convertToInvitationModel(invitationProto:InvitationProto): Invitation{
        let invite: Invitation = new Invitation();
        invite.id = invitationProto.getId();
        invite.requesterId = invitationProto.getRequesterid();
        invite.requesterAlias = invitationProto.getRequesteralias();
        invite.requesterNickname = invitationProto.getRequesternickname();
        invite.requesterProfile = invitationProto.getRequesterprofile();
        invite.addresseeId = invitationProto.getAddresseeid();
        invite.addresseeAlias = invitationProto.getAddresseealias();
        invite.addresseeNickname = invitationProto.getAddresseenickname();
        invite.addresseeProfile = invitationProto.getAddresseeprofile();
        invite.content = invitationProto.getContent();
        invite.inviteStatus = invitationProto.getInvitestatus();
        invite.inviteType = invitationProto.getInvitetype();
        invite.readStatus = ReadStatus.UNREAD;
        invite.createdAt = invitationProto.getCreatedat();
        invite.updatedAt = invitationProto.getUpdatedat();

        return invite;
    }

    convertToInvitationMessage(invitation:Invitation): InvitationProto{
        const invitationProto = new InvitationProto();
        invitationProto.setId(invitation.id);
        invitationProto.setRequesterid(invitation.requesterId);
        invitationProto.setRequesteralias(invitation.requesterAlias);
        invitationProto.setRequesternickname(invitation.requesterNickname);
        invitationProto.setRequesterprofile(invitation.requesterProfile);
        invitationProto.setAddresseeid(invitation.addresseeId);
        invitationProto.setAddresseealias(invitation.addresseeAlias);
        invitationProto.setAddresseenickname(invitation.addresseeNickname);
        invitationProto.setAddresseeprofile(invitation.addresseeProfile);
        invitationProto.setContent(invitation.content);
        invitationProto.setInvitestatus(invitation.inviteStatus);
        invitationProto.setInvitetype(invitation.inviteType);
        invitationProto.setCreatedat(invitation.createdAt);
        invitationProto.setUpdatedat(invitation.updatedAt);

        return invitationProto;
    }

}
