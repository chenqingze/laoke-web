import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {NavController} from '@ionic/angular';
import {AlertControllerService} from '../../service/alert-controller/alert-controller.service';
import {WebSocketService} from '../../core/web-socket.service';
import {ChangeGroupNameRequestModel} from './change-group-name-request.model';
import {OpCode} from '../../core/lib/OpCode_pb';
import {ChangeGroupNameAckModel} from './change-group-name-ack.model';

@Component({
    selector: 'app-change-group-name',
    templateUrl: './change-group-name.page.html',
    styleUrls: ['./change-group-name.page.scss'],
})
export class ChangeGroupNamePage implements OnInit, OnDestroy {
    // 群id
    groupId;
    // 群名
    name: string;

    receiveMsgSub;

    constructor(private router: Router,
                private nav: NavController,
                private dialog: AlertControllerService,
                private wsService: WebSocketService,
                private activeRouter: ActivatedRoute) {
        this.groupId = this.activeRouter.snapshot.params.groupId;
        this.name = this.activeRouter.snapshot.params.name;
    }

    ngOnInit() {
        this.receiveMsgSub = this.wsService.messages$(OpCode.EDIT_GROUP_NAME_ACK).subscribe((data: ChangeGroupNameAckModel) => {
            if (data.success == 'ok') {
                this.dialog.presentAlert(data.message);
                this.router.navigate(['/tabs/im/group-chat-setting', {
                    groupId: this.groupId
                }], {replaceUrl: false});
            }
        });
    }

    // 更新群名
    updateGroupName() {
        if (this.name == '' || this.name.trim() == '' || this.name.trim().length == 0) {
            this.dialog.presentAlert('群名不能为空');
            return;
        }
        if (this.name.trim().length > 20) {
            this.dialog.presentAlert('群名称过长');
            return;
        }
        // 发送
        const changeGroupNameRequestModel = ChangeGroupNameRequestModel.createMessageModel();
        changeGroupNameRequestModel.groupId = this.groupId;
        changeGroupNameRequestModel.groupName = this.name;
        changeGroupNameRequestModel.success = 'wait';
        changeGroupNameRequestModel.message = 'wait';
        this.wsService.sendMessage(changeGroupNameRequestModel);


    }

    ngOnDestroy(): void {
        this.receiveMsgSub.unsubscribe();
    }
}
