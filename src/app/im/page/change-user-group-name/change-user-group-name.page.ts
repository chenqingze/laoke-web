import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {NavController} from '@ionic/angular';
import {AlertControllerService} from '../../service/alert-controller/alert-controller.service';
import {WebSocketService} from '../../core/web-socket.service';
import {GroupService} from '../../service/group-service/group.service';

@Component({
    selector: 'app-change-user-group-name',
    templateUrl: './change-user-group-name.page.html',
    styleUrls: ['./change-user-group-name.page.scss'],
})
export class ChangeUserGroupNamePage implements OnInit {
    name;
    userId;
    groupId;

    constructor(private router: Router,
                private nav: NavController,
                private groupSer: GroupService,
                private dialog: AlertControllerService,
                private wsService: WebSocketService,
                private activeRouter: ActivatedRoute) {
        this.groupId = this.activeRouter.snapshot.params.groupId;
        this.userId = this.activeRouter.snapshot.params.userId;
        this.name = this.activeRouter.snapshot.params.name;
    }

    ngOnInit() {
    }


    // 更新群内我的昵称
    updateUserGroupName() {
        if (this.name == '' || this.name.trim() == '' || this.name.trim().length == 0) {
            this.dialog.presentAlert('昵称不能为空');
            return;
        }
        if (this.name.trim().length > 20) {
            this.dialog.presentAlert('昵称长度不能大于20');
            return;
        }
        this.groupSer.updateGroupMemberNickname(this.groupId, this.name).toPromise().then((d) => {
            if (d.ok) {
                this.dialog.presentAlert('修改成功');
                this.router.navigate(['/tabs/im/group-chat-setting', {
                    groupId: this.groupId
                }], {replaceUrl: false});
            }
        });

    }
}
