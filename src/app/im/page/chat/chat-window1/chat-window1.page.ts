import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {Friend} from '../../contacts/friends/shared/friend.model';
import {MsgModel} from '../shared/msg.model';
import {FriendService} from '../../contacts/friends/shared/friend.service';

@Component({
  selector: 'app-chat-window1',
  templateUrl: './chat-window1.page.html',
  styleUrls: ['./chat-window1.page.scss'],
})
export class ChatWindow1Page implements OnInit {

  params: ParamMap;
  friend: Friend;
  user = '大威天龙';

  msgs: Array<MsgModel>;

  keyBoardShow: boolean;
  voiceShow: boolean;
  emojiShow: boolean;
  mediaShow: boolean;

  constructor(
      private router: Router,
      private route: ActivatedRoute,
      private friendService: FriendService
  ) {
    console.log('ChatWindowPage constructor ...');
    this.friend = new Friend();
    this.keyBoardShow = false;
    this.voiceShow = true;
    this.emojiShow = true;
    this.mediaShow = false;
  }

  ngOnInit() {
    this.initParams();
    this.getMsgs();

    this.listenMsgAck();
    this.listenMsgReadNotify();
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

  getMsgs(){
    const msgModel = new MsgModel();
    msgModel.content = '大威天龙诸佛慈悲';
    msgModel.msgDirection = 'in';

    const msgModel1 = new MsgModel();
    msgModel1.content = '艳阳天那个风光好，红的花是绿的草，乐乐呵呵向前跑，踏遍青山认为老';
    msgModel1.msgDirection = 'out';

    const msgModel2 = new MsgModel();
    msgModel2.content = '春城花飞飞，荷花四处追';
    msgModel2.msgDirection = 'in';

    const msgModel3 = new MsgModel();
    msgModel3.content = '你家中必有千年的蛇妖，一条白，一条青';
    msgModel3.msgDirection = 'out';
    this.msgs = [msgModel, msgModel1, msgModel2, msgModel3];
  }

  private listenMsgAck() {

  }

  private listenMsgReadNotify() {

  }

  goSettingPage() {
    this.router.navigate(['/tabs/im/setting'], {queryParams: {id: this.friend.friendId}});
  }

}
