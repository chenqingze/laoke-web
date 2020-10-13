import {Component, OnDestroy, OnInit} from '@angular/core';
import {InvitationGroupModel} from './invitation-group.model';
import {AlertControllerService} from '../../service/alert-controller/alert-controller.service';
import {WebSocketService} from '../../core/web-socket.service';
import {GroupService} from '../../service/group-service/group.service';
import {AccessUserJoinMucRequestModel} from './access-user-join-muc-request.model';
import {OpCode} from '../../core/lib/OpCode_pb';
import {RefuseUserJoinMucRequestModel} from './refuse-user-join-muc-request.model';
import {RefuseUserJoinMucAckModel} from './refuse-user-join-muc-ack.model';

@Component({
    selector: 'app-group-notify',
    templateUrl: './group-notify.page.html',
    styleUrls: ['./group-notify.page.scss'],
})
export class GroupNotifyPage implements OnInit, OnDestroy {
    invitationGroups: Array<InvitationGroupModel>;
    receiveSub;
    refuseSub;
    currentUser;

    constructor(private groupSer: GroupService,
                private dialog: AlertControllerService,
                private wsService: WebSocketService) {
        this.invitationGroups = [];
        this.currentUser = '123';
    }

    ngOnInit() {
        this.queryInvitation();
        this.receiveSub = this.wsService.messages$(OpCode.ACCESS_USER_JOIN_GROUP_ACK).subscribe({
            next: (d: AccessUserJoinMucRequestModel) => {
                if (d.success === 'ok') {
                    this.dialog.presentAlert(d.message);
                    this.queryInvitation();
                } else if (d.success === 'joined') {
                    this.dialog.presentAlert(d.message);
                    this.queryInvitation();
                } else if (d.success === 'no') {
                    this.dialog.presentAlert(d.message);
                    this.queryInvitation();
                }
            }, error: (err) => {
                console.log(err);
            }
        });

        this.refuseSub = this.wsService.messages$(OpCode.REFUSE_USER_JOIN_MUC_ACK).subscribe({
            next: (d: RefuseUserJoinMucAckModel) => {
                if (d.success === 'ok') {
                    this.dialog.presentAlert(d.message);
                    this.queryInvitation();
                } else if (d.success === 'no') {
                    this.dialog.presentAlert(d.message);
                    this.queryInvitation();
                }
            }, error: (err) => {
                console.log(err);
            }
        });
    }

    async queryInvitation() {
        this.invitationGroups = [];

        // 拉取未读数据
        this.groupSer.queryGroupInvitation().toPromise().then((d) => {
            console.log(d.list);
            for (let i = 0; i < d.list.length; i++) {
                const ini = d.list[i];
                if (ini.requesterId == this.currentUser) {
                    ini.type = 0;
                } else {
                    ini.type = 1;
                }
                this.invitationGroups.push(ini);

            }
        });
        // 更新为已读状态
        this.groupSer.updateUnreadGroupInvitation().toPromise().then((d) => {
            console.log(d);
        });

    }

    ngOnDestroy() {
        this.receiveSub.unsubscribe();
        this.refuseSub.unsubscribe();
    }


    access(addressId, requesterId) {
        // 同意加入
        const accessUserJoinMucRequest = new AccessUserJoinMucRequestModel();
        accessUserJoinMucRequest.message = '';
        accessUserJoinMucRequest.success = 'wait';
        accessUserJoinMucRequest.userId = requesterId;
        accessUserJoinMucRequest.groupId = addressId;
        this.wsService.sendMessage(accessUserJoinMucRequest);
    }

    declined(addressId, requesterId) {
        // 拒绝加入
        const msg = new RefuseUserJoinMucRequestModel();
        msg.message = '';
        msg.success = 'wait';
        msg.groupId = addressId;
        msg.userId = requesterId;
        this.wsService.sendMessage(msg);
    }

    // 忽略未同意的请求
    isRead() {

    }
}
