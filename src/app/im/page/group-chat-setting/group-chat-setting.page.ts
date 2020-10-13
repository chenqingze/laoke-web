import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AlertControllerService} from '../../service/alert-controller/alert-controller.service';
import {WebSocketService} from '../../core/web-socket.service';
import {ActionSheetController, NavController, Platform} from '@ionic/angular';
import {GroupChatSettingModel} from './group-chat-setting.model';
import {GroupService} from '../../service/group-service/group.service';
import {UploadService} from '../../service/upload/upload.service';
import * as OSS from 'ali-oss';
import {OpCode} from '../../core/lib/OpCode_pb';
import {MucMuteRequestModel} from './muc-mute-request.model';
import {MucConfirmJoinRequestModel} from './muc-confirm-join-request.model';
import {ExitGroupRequestModel} from './exit-group-request.model';

declare var window;

@Component({
    selector: 'app-group-chat-setting',
    templateUrl: './group-chat-setting.page.html',
    styleUrls: ['./group-chat-setting.page.scss'],
})
export class GroupChatSettingPage implements OnInit, OnDestroy {
    groupId: string;
    groupSetting: GroupChatSettingModel;
    owner;
    currentUser;
    receiveMsgSub;
    public isIos = false;

    constructor(private router: Router,
                private dialog: AlertControllerService,
                private wsService: WebSocketService,
                private uploadImgService: UploadService,
                private actionSheetCtrl: ActionSheetController,
                private groupSer: GroupService,
                private navCtrl: NavController,
                private activeRouter: ActivatedRoute,
                private platform: Platform) {
        this.groupId = this.activeRouter.snapshot.params.groupId;
        this.groupSetting = new GroupChatSettingModel();
        this.currentUser = '123';
    }

    ionViewWillEnter() {
        this.groupSer.queryGroupMemberNickname(this.groupId).toPromise().then((d) => {
            this.groupSetting.userNickname = d.alias;
        });
        this.groupSer.queryGroupMemberTop(this.groupId).toPromise().then((d) => {
            this.groupSetting.top = d.top;
        });
    }

    ngOnInit() {
        this.queryGroupInfo();
        this.receiveMsgSub = this.wsService.messages$([OpCode.INVITATION_USER_JOIN_GROUP_ACK,
            OpCode.INVITATION_USER_JOIN_GROUP_REQUEST,
            OpCode.DETACH_USER_FROM_GROUP_ACK,
            OpCode.EDIT_GROUP_NAME_ACK,
            OpCode.EDIT_GROUP_NAME_REQUEST,
            OpCode.DETACH_USER_FROM_GROUP_REQUEST,
            OpCode.EDIT_GROUP_NOTICE_ACK,
            OpCode.EXIT_GROUP_ACK,
            OpCode.UPDATE_GROUP_MUTE_SETTING_ACK,
            OpCode.UPDATE_GROUP_CONFIRM_SETTING_ACK,
            OpCode.INVITATION_USER_JOIN_GROUP_REQUEST]).subscribe((message) => {
            if (message.opCode === OpCode.EXIT_GROUP_ACK) {
                this.dialog.presentAlert('退出成功');
                this.navCtrl.pop();
            } else {
                this.queryGroupInfo();

            }


        });
    }

    queryGroupInfo() {
        this.groupSer.queryGroupSettingInfo(this.groupId).toPromise().then((d) => {
            this.groupSetting = d.info;
            this.owner = this.groupSetting.owner;
            console.log(this.groupSetting);
        });
    }

    ngOnDestroy() {
        this.receiveMsgSub.unsubscribe();
    }

    // 跳转至群成员
    router2Members() {
        this.router.navigate(['/tabs/im/group-members', {
            groupId: this.groupId
        }]);
    }

    // 更改置顶设置
    changeTop() {
        this.groupSer.updateGroupMemberTop(this.groupId, this.groupSetting.top).toPromise().then((d) => {
            console.log(d);
        });
    }

    // 打开选择框
    public async openActionSheet() {
        const actionSheet = await this.actionSheetCtrl.create({
            header: '请选择',
            buttons: [
                {
                    text: '拍照',
                    handler: () => {
                        this.uploadImgService.startCamera().then((data) => {
                            console.log('======调用相机的返回参数============', data);
                            if (data !== undefined) {
                                // this.imageList.push(data);
                                this.uploadFile(data);
                            }
                        });
                    }
                },
                {
                    text: '从手机相册选择',
                    handler: () => {
                        this.uploadImgService.openImgPicker(1).then((data) => {
                            console.log('======调用相机的返回参数============', data);
                            if (data !== undefined) {
                                this.uploadFile(data);
                            }
                        });
                    }
                },
                {
                    text: '取消',
                    role: 'cancel',
                    handler: () => {

                    }
                }
            ]
        });
        await actionSheet.present();
    }

    // 上传到oss文件
    public uploadFile(imageURL) {
        console.log('=========console============');
        console.log(imageURL);
        const self = this;
        const image = new Image();
        image.onload = () => {
            console.log('=========image.onload走了没有========');
            self.uploadImgService.base64 = self.uploadImgService.getBase64Image(image);
            // console.log('=======self.base64是什么==========',self.base64);
            const base64 = self.uploadImgService.base64.split(',').pop();
            self.uploadImgService.fileType = self.uploadImgService.base64.split(';').shift().split(':').pop();
            // base64转blob
            self.uploadImgService.blob = self.uploadImgService.toBlob(base64, self.uploadImgService.fileType);
            console.log('========blob的输出结果========', self.uploadImgService.blob);
            // blob转arrayBuffer
            const reader = new FileReader();
            console.log('============self.blob=============', self.uploadImgService.blob);
            reader.readAsArrayBuffer(self.uploadImgService.blob);
            reader.onload = (event) => {
                console.log('=====执行了没有reader.onload======', reader.result);

                // 文件名 一会改
                // tslint:disable-next-line: max-line-length
                const objectKey = 'group/' + `${new Date().getTime()}.${self.uploadImgService.fileType.split('/').pop()}`;
                console.log('=====执行了没有objectKey======', objectKey);

                // arrayBuffer转Buffer
                const buffer = new OSS.Buffer(reader.result);
                console.log('=====执行了没有buffer======', buffer);

                // 上传
                self.uploadImgService.client.put(objectKey, buffer).then((result) => {

                    this.dialog.doubleAlert(null, '确认要更换头像吗？', '取消', '确认', () => {
                    }, () => {
                        self.groupSetting.header = objectKey;
                        //  更新远程数据库为新头像
                        // 更新本地库
                    });
                    console.log('==========上传oss返回的结果===============', result);
                }).catch((err) => {
                    console.log('======上传oss返回的结果err=======', err);
                    this.dialog.presentAlert('图片上传失败，请重新上传');

                    // self.dialog.presentAlert('图片上传失败，请重新上传');
                    self.uploadImgService.getOssInfo();
                });
            };
        };
        image.src = window.Ionic.WebView.convertFileSrc(imageURL);
    }

    // 删除聊天记录
    deleteGroupConversation() {
        this.dialog.doubleAlert('', '确定要删除聊天记录吗？', '取消', '确定', () => {
            console.log('已取消');
        }, () => {
            // 删除本地聊天记录
            this.groupSer.deleteGroupMsg(this.groupId);
        });
    }

    // 邀请群成员
    router2InviteGroupMember() {
        this.router.navigate(['/tabs/im/invite-group-member', {
            groupId: this.groupId,
            owner: this.owner,
            groupName: this.groupSetting.name
        }]);
    }

    // 移除群成员
    router2DetachGroupMember() {
        this.router.navigate(['/tabs/im/remove-group-member', {
            groupId: this.groupId,
            owner: this.owner,
        }]);
    }

    // 跳转至修改群昵称
    router2ChangeGroupName() {
        this.router.navigate(['/tabs/im/change-group-name', {
            groupId: this.groupId,
            name: this.groupSetting.name
        }]);
    }

    // 跳转至群二维码

    router2QrCode() {
        this.router.navigate(['/tabs/im/group-qr-code', {
            groupId: this.groupId,
            groupName: this.groupSetting.name,
            groupHeader: this.groupSetting.header,
            groupNo: this.groupSetting.groupNo
        }]);
    }

    // 跳转至修改群公告

    router2GroupNotice() {
        const owner = this.currentUser === this.owner ? 'yes' : 'no'; // 是否群主
        console.log(this.owner);
        console.log(this.currentUser);
        this.router.navigate(['/tabs/im/edit-group-notice', {
            groupId: this.groupId,
            notice: this.groupSetting.notice,
            owner
        }]);
    }

    // 跳转至群昵称修改

    router2UserGroupNickname() {
        this.router.navigate(['/tabs/im/change-user-group-name', {
            groupId: this.groupId,
            name: this.groupSetting.userNickname,
            userId: this.currentUser
        }]);
    }

    // 群主退出群
    dismissGroup() {
        this.dialog.doubleAlert('', '删除并退出后，将不再接受此群聊信息', '取消', '确定', null, () => {
            const msg = new ExitGroupRequestModel();
            msg.userId = this.currentUser;
            msg.groupId = this.groupId;
            msg.message = '';
            msg.success = 'wait';
            this.wsService.sendMessage(msg);
        });
    }


    router2SearchHis() {
        this.router.navigate(['/tabs/im/query-chat-record', {
            groupId: this.groupId
        }]);
    }

    openStore(id) {
        this.router.navigate(['/tabs/my/personal-home/', id]);

    }

    // 更新群禁言
    changeGroupQuiet() {
        const mucMuteRequestModel = new MucMuteRequestModel();
        console.log(this.groupSetting.mute);
        mucMuteRequestModel.groupId = this.groupId;
        mucMuteRequestModel.mute = !this.groupSetting.mute;
        mucMuteRequestModel.success = 'wait';
        mucMuteRequestModel.message = '';
        this.wsService.sendMessage(mucMuteRequestModel);

    }

    // 更新群邀请确认
    changeGroupConfirm() {
        const muc = new MucConfirmJoinRequestModel();
        muc.success = 'wait';
        muc.message = '';
        muc.groupId = this.groupId;
        muc.confirm = !this.groupSetting.confirmJoin;
        this.wsService.sendMessage(muc);
    }
}
