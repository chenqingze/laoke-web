import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {GroupService} from '../../service/group-service/group.service';
import {combineLatest, fromEvent, interval, merge, Observable, Subject, Subscription, timer} from 'rxjs';
import {filter, map, mergeAll} from 'rxjs/operators';
import {AlertController, IonContent, ModalController} from '@ionic/angular';
import {QueryGroupRequestModel} from '../../contacts/groups/query-group-request.model';
import {GroupMsgRequestModel} from './group-msg-request.model';
import {WebSocketService} from '../../core/web-socket.service';
import {OpCode} from '../../core/lib/OpCode_pb';
import {BaseModel} from '../../core/base.model';
import {MsgAck, MsgRequest} from '../../core/lib/Msg_pb';
import {MucMsgModel} from './muc-msg.model';

@Component({
    selector: 'app-group-chat',
    templateUrl: './group-chat.page.html',
    styleUrls: ['./group-chat.page.scss'],
})
export class GroupChatPage implements OnInit, OnDestroy {
    @ViewChild(IonContent, {static: false}) content: IonContent;
    @ViewChild('textarea', {static: false}) textarea;
    // 群id
    groupId;
    // 群名
    name;
    // 群成员数量
    memberCount;
    // 是否在群中
    inGroup;
    // 预览大图设置
    isMaxImg = false;
    // 是否禁言
    mute;
    // 群主
    owner;
    // 当前用户
    currentUser;
    // 安卓弹出键盘
    showKeyboard: boolean;
    // 未读位置
    firstUnread: any;
    // @用
    atList: Array<any>;


    // Oss 相关
    client: any;
    dir: string;
    // 图片转换
    base64;
    // blob对象
    blob;
    // 文件类型
    fileType;


    // 是否显示语音长按按钮
    showVoice: boolean;
    // 是否显示上传区域
    showUpload: boolean;
    // 显示emoji
    showEmoji: boolean;
    // 键盘处理content上滑
    public moveScroll: boolean;
    bfscrolltop;
    // 是否开始录音
    startRecord: boolean;
    isCheck: boolean;
    messageContent = '';
    private showModel: boolean;

    private receiveSub: Subscription;
    private receiveSub1: Subscription;
    public slideOpt = {
        initialSlide: 0,
        speed: 300,
        autoplay: true,
        autoHeight: true,
    };
    public showList: Array<any>;

    public conversationList: Array<MucMsgModel>;

    constructor(private activeRouter: ActivatedRoute,
                private modalCtrl: ModalController,
                private wsService: WebSocketService,
                private dialog: AlertController,
                private groupService: GroupService) {
        this.groupId = this.activeRouter.snapshot.params.groupId;
        this.name = this.activeRouter.snapshot.params.groupName;
        this.currentUser = '123';

        this.firstUnread = '';
        this.isCheck = true;
        this.showEmoji = false;
        this.showVoice = true;
        this.showUpload = false;
        this.moveScroll = false;

        this.startRecord = false;
        this.atList = [];
        this.conversationList =[];
        this.showList = new Array<any>();
        // console.log('111');
    }

    queryGroupInfo() {
        this.groupService.queryGroupInfo(this.groupId).subscribe({
            next: (data) => {
                console.log(data);
                this.memberCount = data.group.count;
                this.name = data.group.name;
                this.mute = data.group.groupSetting.mute;
                this.owner = data.group.owner;
            }, error: (err) => {
                console.log(err);
            }
        });
        this.groupService.queryUserInGroup(this.groupId).subscribe({
            next: (data) => {
                this.inGroup = data.in;
            }, error: (err) => {
                console.log(err);
            }
        });
    }

    ngOnInit() {
        this.queryGroupInfo();

        this.receiveSub = this.wsService.messages$(OpCode.MSG_REQUEST)
            .pipe(filter((model: GroupMsgRequestModel) => model.conversationType === 1)).subscribe({
            next: (message: GroupMsgRequestModel) => {
                const conversation = new MucMsgModel();
                conversation.content = message.content;
                conversation.msgId = message.msgId;
                conversation.createdAt = message.time;
                conversation.msgType = message.msgType;
                conversation.msgStatus = message.msgStatus;
                // 从后台获取头像
                this.conversationList.push(conversation);
            }, error: (err) => {
                    console.log(err);
            }
        });
    }

    ngOnDestroy() {
        this.receiveSub.unsubscribe();
    }


    // 移除at
    removeAt(at, i) {
        this.atList.splice(i, 1);
    }

    // 按住说话按钮显示隐藏
    showSendVoice() {
        this.showVoice = !this.showVoice;
        this.showEmoji = false;
        this.showUpload = false;
        this.moveScroll = false;

    }

    startRecordAudio() {

    }

    finishRecord() {

    }

    getFocus() {
        this.showEmoji = false;
        this.showUpload = false;
    }

    /**
     * 跳转到底部
     */
    async scrollToBottom() {
        setTimeout(() => {
            if (this.content.scrollY) {
                this.content.scrollToBottom(1);
            }
        }, 50);
    }

    /**
     * 输入框失去焦点
     */
    async blurInput() {
        document.body.scrollTop = this.bfscrolltop;
        await this.scrollToBottom();
    }

    /**
     * 输入框输入信息后变化
     */
    async updateEditor() {
        this.isCheck = false;
        await this.scrollToBottom();
        if (this.messageContent.length === 0) {
            this.isCheck = true;
        } else {
            if (this.messageContent.lastIndexOf('@') == this.messageContent.length - 1) {
                if (!this.showModel) {

                }
            }

        }
    }

    // 点击表情
    async triggerEmoji() {
        this.showEmoji = !this.showEmoji;
        this.showVoice = true;
        this.showUpload = false;
        this.moveScroll = !this.moveScroll;

        await this.scrollToBottom();
    }

    /**
     * 显示文件上传等
     */
    async showUploadFile() {
        this.showEmoji = false;
        this.showUpload = !this.showUpload;
        this.moveScroll = !this.moveScroll;

        await this.scrollToBottom();
    }

    sendMessage() {
        this.moveScroll = false;
        this.textarea.setFocus();
        if (this.messageContent == null || this.messageContent === '') {
            // this.dialog.presentAlert('请输入消息内容！');
            alert('请输入内容');
            return;
        }
        if (this.messageContent.trim() === '') {
            // this.dialog.presentAlert('请输入消息内容！');
            alert('请输入内容');

            this.messageContent = '';
            return;
        }
        if (this.messageContent.trim().length > 200) {
            // this.commonUtil.showToast('消息过长');
            alert('请输入内容');
            return;
        }
        const groupMsgReq = GroupMsgRequestModel.createMessageModel();
        groupMsgReq.senderId = this.currentUser;
        groupMsgReq.conversationId = this.groupId;
        groupMsgReq.conversationType = 1;
        groupMsgReq.msgStatus = 0;
        groupMsgReq.msgType = '0';
        groupMsgReq.msgAttachStr = '';
        groupMsgReq.content = this.messageContent;
        groupMsgReq.time = new Date().getTime();

        this.wsService.sendMessage(groupMsgReq);
    }


}
