import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AlertControllerService} from '../../shared/service/alert-controller/alert-controller.service';
import {ActionSheetController, IonRouterOutlet, LoadingController} from '@ionic/angular';
import {WebSocketService} from '../../core/web-socket.service';
import {GroupService} from '../../shared/service/group-service/group.service';
import {CreateGroupRequestModel} from './create-group-request.model';
import {OpCode} from '../../core/lib/OpCode_pb';
import {CreateGroupAckModel} from './create-group-ack.model';

@Component({
    selector: 'app-set-group-name',
    templateUrl: './set-group-name.page.html',
    styleUrls: ['./set-group-name.page.scss'],
})
export class SetGroupNamePage implements OnInit, OnDestroy {
    selected: Array<string>;
    owner;
    header;
    name;
    receiveMsgSub;
    loading;
    public btnStatus = false;

    constructor(private activeRouter: ActivatedRoute,
                private dialog: AlertControllerService,
                private loadingCtrl: LoadingController,
                private groupSer: GroupService,
                private router: Router,
                private wsService: WebSocketService,
                private actionSheetCtrl: ActionSheetController,
                public outlet: IonRouterOutlet) {
        this.header = '/assets/share-dongtai.png';
        this.selected = Array.of(this.activeRouter.snapshot.params.selected.split(','));
        this.owner = '123';
        this.name = '';
    }

    ngOnInit() {
        this.receiveMsgSub = this.wsService.messages$(OpCode.CREATE_GROUP_ACK).subscribe((d: CreateGroupAckModel) => {
            this.loading.dismiss();
            this.outlet.pop(2);
            if (d.success === 'full') {
                this.dialog.presentAlert(d.message);
            } else if (d.success === 'ok') {
                this.dialog.presentAlert('创建成功');
                const id = d.groupId;
                const name = d.name;
                const groupHeader = d.header;
                const groupNo = d.groupNo;
                // 保存至数据库
                this.groupSer.saveGroup(id, name, '暂无群公告', groupNo, groupHeader, false, false);
                this.router.navigate(['/tabs/im/group-chat', {groupName: name, groupId: id}], {replaceUrl: true});

            }
        });
    }

    ngOnDestroy() {
        this.receiveMsgSub.unsubscribe();

    }

    async saveGroup() {
        if (this.name === '' || this.name.trim() === '' || this.name.trim().length === 0) {
            this.dialog.presentAlert('请输入群聊名称');
            return;
        }
        if (this.name.trim().length > 20) {
            this.dialog.presentAlert('群名称长度过长,请重新输入');
            return;
        }
        this.btnStatus = true;
        this.loading = await this.loadingCtrl.create({
            cssClass: 'my-custom-class',
            message: '请稍等..',
        });
        await this.loading.present();

        // 判断用户创建群聊是否已达上限

        this.groupSer.checkUserGroupMaxCount().toPromise().then((d) => {
            if (d.ok) {
                const createGroupRequest = CreateGroupRequestModel.createMessageModel();
                createGroupRequest.userList = this.selected[0];
                createGroupRequest.owner = this.owner;
                createGroupRequest.header = this.header;
                createGroupRequest.name = this.name;
                createGroupRequest.groupId = '';
                this.wsService.sendMessage(createGroupRequest);

            } else {
                this.loading.dismiss();
                this.dialog.presentAlert('创建群聊失败，已达创建上限');
            }
        }).catch(err => this.btnStatus = false).finally(() => this.btnStatus = false);
    }

    openSheet() {

    }
}
