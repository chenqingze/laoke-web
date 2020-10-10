import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {WebSocketService} from '../../core/web-socket.service';
import {Friend} from '../../contacts/friends/shared/friend.model';
import {AlertController, Platform} from '@ionic/angular';
import {AlertControllerService} from '../../service/alert-controller/alert-controller.service';
import {FriendService} from '../../contacts/friends/shared/friend.service';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.page.html',
  styleUrls: ['./setting.page.scss'],
})
export class SettingPage implements OnInit {

  friend: Friend;
  blacklistToggle = false;
  DNDToggle = false;
  isTopToggle = false;
  public isIos = false;

  constructor(
      public route: ActivatedRoute,
      public wsService: WebSocketService,
      private friendService: FriendService,
      public alertController: AlertController,
      private dialog: AlertControllerService,
      // private sqlService: SqlService,
      // private commonUtil: CommonUtil,
      public router: Router,
      private platform: Platform,
      // private eventSer: EventService,
  ) {
    console.log('SettingPage constructor ...');
    this.friend = new Friend();
  }

  ngOnInit() {
    this.isIos = this.platform.is('android') ? false : true;
    // 接收到传递过来的friendId从数据库中查询该好友信息展示
    this.initParams();
  }

  initParams(){
    this.route.queryParams.subscribe((params: any) => {
      this.friendService.getFriendById(params.id).subscribe(res => {
        if (res.rows.item(0)) {
          this.friend = res.rows.item(0);
        }
      });
    });
  }

  ionViewWillEnter() {
    console.log('individual-setting ionViewWillEnter');
  }

  router2SearchHis() {
    this.router.navigate(['/check-chat-record-private', {
      friendId: this.friend.friendId
    }], {relativeTo: this.route});
  }

  mute(e) {
    const value = e.detail.checked;
    const mute = value === true ? 1 : 0;
    this.friendService.updFriendMute(this.friend.id, mute).subscribe(res => {
      console.log(res);
    }, error => {
      console.log('error', error);
    });
  }

  stickOnTop(e) {
    const value = e.detail.checked;
    const stickOnTop = value === true ? 1 : 0;
    this.friendService.updFriendStickOnTop(this.friend.id, stickOnTop).subscribe(res => {
      console.log(res);
    }, error => {
      console.log('error', error);
    });
  }

  blacklist(e) {
    const value = e.detail.checked;
    const black = value === true ? 1 : 0;
    this.friendService.updFriendBlocked(this.friend.id, black).subscribe(res => {
      console.log(res);
    }, error => {
      console.log('error', error);
    });
  }

  delFriend() {
    console.log('individual-setting delFriend');
    const alert = this.alertController.create({
      header: '确定删除该好友?',
      buttons: ['取消',
        {
          text: '确定', handler: (e) => {
            /*let friendMsg = new Invitation_pb.FriendMsg()
            friendMsg.setId(this.friend.id);
            friendMsg.setFriendid(this.friend.friendId);
            friendMsg.setStatus("delete");
            this.wsService.send(friendMsg, OpCode.Friend);
            this.router.navigate(['/tabs/im']);
            this.commonUtil.showToast('删除好友成功');
            const userId = JSON.parse(window.localStorage.getItem('accountModel')).userId;
            this.sqlService.delConversationWithFriend(this.friend.friendId, userId);*/
          }
        }]
    });
    alert.then(alertElement => {
      alertElement.present();
    });
  }

  // 删除聊天记录
  public deleteGroupConversation() {
    this.dialog.doubleAlert('', '确定要删除聊天记录吗？', '取消', '确定', () => {
      console.log('已取消');
    }, () => {
      /*this.sqlService.deleteGroupMsg(this.groupId).then((data) => {
        this.wsService.publish('clearGroupMsg');
        this.dialog.presentAlert('聊天记录已删除');
      });*/
      /*this.chatService.deleteConversationLocal(this.friend.friendId).then((data)=>{
        this.commonUtil.showToast('聊天记录已删除');
        this.router.navigate(['/tabs/im']);
      });*/
    });
  }

}
