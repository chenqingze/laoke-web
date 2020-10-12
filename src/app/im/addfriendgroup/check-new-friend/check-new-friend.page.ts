import {ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ApiService} from '../../shared/api/api.service';
import {WebSocketService} from '../../core/web-socket.service';
import {ToastController} from '@ionic/angular';
import {FriendService} from '../../contacts/friends/shared/friend.service';
import {InvitationRequestRequestModel} from '../shared/friend-invitation-request-request.model';

@Component({
  selector: 'app-check-new-friend',
  templateUrl: './check-new-friend.page.html',
  styleUrls: ['./check-new-friend.page.scss'],
})
export class CheckNewFriendPage implements OnInit, OnDestroy {

  public friendId: string;
  public profile: string;
  public nickname: string;
  public content = '你好希克斯';
  public alias = '666';

  constructor(
          private toastCtrl: ToastController,
          private router: Router,
          private activeRouter: ActivatedRoute,
          // private sqlService: SqlService,
          private apiService: ApiService,
          private friendService: FriendService,
          private wsService: WebSocketService,
          public changeDetectorRef: ChangeDetectorRef
  ) {
    console.log('check-new-friend constructor');
    this.friendId = this.activeRouter.snapshot.params.userId;
    this.profile = this.activeRouter.snapshot.params.profile;
    this.nickname = this.activeRouter.snapshot.params.nickname;
  }

  ngOnInit() {
    console.log('check-new-friends ngOnInit');
  }

  ngOnDestroy() {
    console.log('check-new-friends ngDestroy');
  }

  addFriend() {

    this.showToast('发送成功');
    // this.showToast('申请添加好友发送成功');

    const friendInvitationRequestRequestModel  = InvitationRequestRequestModel.createMessageModel();
    friendInvitationRequestRequestModel.addresseeId = this.friendId;
    friendInvitationRequestRequestModel.addresseeAlias = this.alias;
    friendInvitationRequestRequestModel.content = this.content;

    if (this.wsService.isAuthed()){
      this.wsService.sendMessage(friendInvitationRequestRequestModel);
    }else {
      this.showToast('请稍后再试！');
    }

    this.router.navigate(['/tabs/im']);

  }

  async showToast(messages: string){
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
