import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {NavController, Platform} from '@ionic/angular';
import {AlertControllerService} from '../../service/alert-controller/alert-controller.service';
import {WebSocketService} from '../../core/web-socket.service';
import {EditGroupNoticeRequestModel} from './edit-group-notice-request.model';
import {OpCode} from '../../core/lib/OpCode_pb';
import {EditGroupNoticeAckModel} from './edit-group-notice-ack.model';

@Component({
    selector: 'app-edit-group-notice',
    templateUrl: './edit-group-notice.page.html',
    styleUrls: ['./edit-group-notice.page.scss'],
})
export class EditGroupNoticePage implements OnInit, OnDestroy {
    groupId;
    notice;
    oldNotice;
    owner;
    receiveSub;

    constructor(private activeRouter: ActivatedRoute,
                private platform: Platform,
                private router: Router,
                private dialog: AlertControllerService,
                private nav: NavController,
                private wsService: WebSocketService) {
        this.groupId = this.activeRouter.snapshot.params.groupId;
        this.owner = this.activeRouter.snapshot.params.owner;
        this.oldNotice = this.activeRouter.snapshot.params.notice;
        this.notice = this.activeRouter.snapshot.params.notice;
        if (this.notice === '暂无群公告') {
            this.notice = '';
        } else {
            const reg = new RegExp('<br>', 'g');
            this.notice = this.notice.replace(reg, '\n');
        }
    }

    ngOnInit() {
        this.receiveSub = this.wsService.messages$(OpCode.EDIT_GROUP_NOTICE_ACK).subscribe((d: EditGroupNoticeAckModel) => {
            if (d.success == 'ok') {
                this.dialog.presentAlert(d.message);
                this.router.navigate(['/tabs/im/group-chat-setting', {
                    groupId: this.groupId
                }], {replaceUrl: false});
            } else {
                this.dialog.presentAlert(d.message);
            }
        });
    }

    ngOnDestroy() {
        this.receiveSub.unsubscribe();
    }

    saveGroupNotice() {
        if (this.notice === '' || this.notice.length === 0) {
            this.dialog.presentAlert('请正确填写群公告');
            return;
        }
        if (this.notice.trim().length > 200) {
            this.dialog.presentAlert('公告长度最大为200,请重新输入');
            return;
        }
        // 处理回车
        const reg = new RegExp('\n', 'g');
        this.notice = this.notice.replace(reg, '<br>');
        const message = EditGroupNoticeRequestModel.createMessageModel();
        message.success = '';
        message.notice = this.notice;
        message.message = '';
        message.groupId = this.groupId;
        this.wsService.sendMessage(message);

    }
}
