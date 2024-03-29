import {Component, OnInit} from '@angular/core';
import {Invitation, InviteStatus} from '../shared/Invitation.model';
import {InvitationService} from '../shared/invitation.service';
import {WebSocketService} from '../../../core/web-socket.service';
import {OpCode} from '../../../core/lib/OpCode_pb';
import {InvitationRequestAckModel} from '../shared/friend-invitation-request-ack.model';
import {InvitationAcceptRequestModel} from '../shared/friend-invitation-accept-request.model';
import {Router} from '@angular/router';
import {ToastController} from '@ionic/angular';
import {InvitationAcceptAckModel} from '../shared/friend-invitation-accept-ack.model';
import {InvitationDeclinedAckModel} from '../shared/friend-invitation-declined-ack.model';
import {InvitationDeclinedRequestModel} from '../shared/friend-invitation-declined-request.model';

@Component({
    selector: 'app-new-friend',
    templateUrl: './new-friend.page.html',
    styleUrls: ['./new-friend.page.scss'],
})
export class NewFriendPage implements OnInit {

    userId: number;

    invitations: Array<Invitation> = new Array<Invitation>();

    constructor(
        private invitationService: InvitationService,
        private wsService: WebSocketService,
        private router: Router,
        private toastCtrl: ToastController,
    ) {
        console.log('NewFriendPage constructor ...');
    }

    ngOnInit() {
        // @ts-ignore
        this.userId = window.userId;
        this.initInvitation();
        this.listenInvitation();
    }

    initInvitation() {
        this.invitationService.getInvitation().subscribe(data => {
            for (let i = 0; i < data.rows.length; i++) {
                this.invitations.push(data.rows[i]);
            }
        }, err => {
            console.error('getInvitation err:', err);
        });
    }

    listenInvitation() {
        console.log(InviteStatus.REQUESTED);
        this.wsService.messages$(OpCode.INVITATION_REQUEST_ACK).subscribe((
            friendInvitationRequestAckModel: InvitationRequestAckModel
        ) => {
            this.invitations.unshift(friendInvitationRequestAckModel.invitation);
        });

        this.wsService.messages$(OpCode.INVITATION_ACCEPT_ACK).subscribe((
            friendInvitationAcceptAckModel: InvitationAcceptAckModel
        ) => {
            for (let i = 0; i < this.invitations.length; i++) {
                if (this.invitations[i].id == friendInvitationAcceptAckModel.id) {
                    this.invitations[i].inviteStatus = InviteStatus.ACCEPTED;
                }
            }
        });

        this.wsService.messages$(OpCode.INVITATION_DECLINED_ACK).subscribe((
            friendInvitationDeclinedAckModel: InvitationDeclinedAckModel
        ) => {
            for (let i = 0; i < this.invitations.length; i++) {
                if (this.invitations[i].id == friendInvitationDeclinedAckModel.id) {
                    this.invitations[i].inviteStatus = InviteStatus.DECLINED;
                }
            }
        });
    }

    decline($event: MouseEvent, item: Invitation) {
        const friendInvitationDeclinedRequestModel = InvitationDeclinedRequestModel.createMessageModel();
        friendInvitationDeclinedRequestModel.id = item.id;
        this.wsService.sendMessage(friendInvitationDeclinedRequestModel);

        this.showToast('发送成功！');

        this.router.navigate(['/tabs/im']);
    }

    accept($event: MouseEvent, item: Invitation) {
        const friendInvitationAcceptRequestModel = InvitationAcceptRequestModel.createMessageModel();
        friendInvitationAcceptRequestModel.id = item.id;
        this.wsService.sendMessage(friendInvitationAcceptRequestModel);

        this.showToast('发送成功！');

        this.router.navigate(['/tabs/im']);
    }

    delInvitation(item: Invitation) {

    }


    async showToast(messages: string) {
        const toast = await this.toastCtrl.create({
            message: messages,
            duration: 1000,
            position: 'middle',
            color: 'dark',
            cssClass: 'toastdefault'
        });
        toast.present();
    }
}
