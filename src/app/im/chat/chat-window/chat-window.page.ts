import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {Friend} from '../../contacts/friends/shared/friend.model';
import {MsgModel} from '../shared/msg.model';
import {FriendService} from '../../contacts/friends/shared/friend.service';
import {IonContent, Platform} from '@ionic/angular';
import {AndroidPermissions} from '@ionic-native/android-permissions/ngx';
import {Vibration} from '@ionic-native/vibration/ngx';

@Component({
  selector: 'app-chat-window',
  templateUrl: './chat-window.page.html',
  styleUrls: ['./chat-window.page.scss'],
})
export class ChatWindowPage implements OnInit {

  @ViewChild(IonContent, { static: false }) content: IonContent;

  params: ParamMap;
  friend: Friend;
  user = {name: '大威天龙', userId: 90068};

  msgs: Array<MsgModel>;

  /**
   * 键盘处理content上滑
   */
  public moveScroll: boolean;
  public sendContent: string;
  // 安卓键盘弹出
  showKeyboard: boolean;
  keyBoardShow: boolean;
  plusIcon: boolean;
  plusFun: boolean;
  sendBtn: boolean;
  showEmoji: boolean;

  // 分享类型 good:产品 info:信息 preview:预购单
  shareType: string;

  isIos = false;

  constructor(
      private router: Router,
      private platform: Platform,
      // private file: File,
      private route: ActivatedRoute,
      // private vibration: Vibration,
      // private androidPermissions: AndroidPermissions,
      // public imagePicker: ImagePicker,
      // private camera: Camera,
      private friendService: FriendService
  ) {
    console.log('ChatWindowPage constructor ...');

    this.sendContent = '';
    this.keyBoardShow = false;
    this.plusIcon = false;
    this.plusFun = false;
    this.showEmoji = false;
    this.moveScroll = false;

    this.friend = new Friend();
  }

  ngOnInit() {

    this.isIos = this.platform.is('android') ? false : true;

    const that = this;
    this.platform.ready().then((rs) => {
      if (localStorage.getItem('phoneType') === 'ANDROID') {
        window.addEventListener('native.keyboardshow', function(e) {
          // todo 进行键盘可用时操作
          // e.keyboardHeight 表示软件盘显示的时候的高度
          that.showKeyboard = true;
          that.showEmoji = false;
          that.plusFun = false;
          that.scrollToBottom();

          // console.log('++++++++e.keyboardHeight+++++++++++', e.keyboardHeight);
        });
        window.addEventListener('native.keyboardhide', function(e) {
          // todo 进行键盘不可用时操作
          that.showKeyboard = false;
          that.scrollToBottom();
        });
      }
    });

    this.initParams();
    this.getMsgs();

    this.listenMsgAck();
    this.listenMsgReadNotify();
  }

  ionViewWillEnter() {
    console.log('chat-window ionViewWillEnter');

    switch (this.shareType) {
      case 'good':
        // this.queryGoodsDetail();
        break;
      case 'info':
        // this.queryInformationDetail();
        break;
      default:
        console.log('未分享产品');
        break;
    }
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

  sendMsg(msgType) {
    this.moveScroll = false;
    /*this.textarea.setFocus();
    if (this.sendCheck()) return;
    if (this.cont == null || this.cont === '') {
      this.dialog.presentAlert('请输入消息内容！');
      return;
    }
    if (this.cont.trim() === '') {
      this.dialog.presentAlert('请输入消息内容！');
      this.cont = '';
      return;
    }
    if (this.cont.trim().length > 200) {
      this.commonUtil.showToast('消息过长');
      return;
    }

    this.cont = this.cont.trim().replace(/[<>&"]/g, (c) => {
      return { '<': '&lt;', '>': '&gt;', '&': '&amp;', '"': '&quot;' }[c];
    });

    let msgId = new Date().getTime().toString();
    // 向服务器发送消息
    const con = new Conversation_pb.Conversation();
    con.setSenderId(this.user.userId);
    // con.setSenderType(this.chatType);
    con.setSenderClientType(this.platFormName);
    con.setReceiverId(this.chatter.id);
    // con.setReceiverType(this.chatType);
    con.setMsgId(msgId);
    con.setMsgType(String(msgType));
    con.setStatus(0);
    con.setContent(this.cont);

    if (this.isReplyMsg) {
      con.setMsgType('17');
      const reply = { content: this.cont, replyMsg: this.replyUser + ':' + this.replyMsg };
      con.setContent(JSON.stringify(reply));
    } else {
      con.setMsgType('0');
      con.setContent(this.cont);
    }

    this.wsService.send(con, OpCode.Conversation);

    this.isReplyMsg = false;

    this.cont = '';*/

  }

  goSettingPage() {
    this.router.navigate(['/tabs/im/setting'], {queryParams: {id: this.friend.friendId}});
  }

  // ----------------------------------------footer--------------------------------------------

  sendCheck(e) {
    // 用户输入内容状态：show send btn, hide + btn
    if (e) {
      this.plusIcon = false;
      this.plusFun = false;
      this.sendBtn = true;
    } else {
      this.plusIcon = true;
      this.sendBtn = false;
    }
    this.scrollToBottom();
  }

  getFocus() {
    this.showEmoji = false;
    this.plusFun = false;
  }

  /**
   * 输入框失去焦点
   */
  public blurInput() {
    this.scrollToBottom();
  }

  showVoiceBtn() {
    this.keyBoardShow = !this.keyBoardShow;
    this.showEmoji = false;
    this.plusFun = false;
    this.moveScroll = false;
  }

  startRecordAudio() {
    /*this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.RECORD_AUDIO).then((d) => {
      if (!!d && d.hasPermission) {
        this.platform.ready().then(() => {
          this.vibration.vibrate(100);
          const recordName = this.user.userId + new Date().getTime() + '.wav';
          this.mediaFileName = recordName;
          // IOS和 ANDROID区分对待
          if (this.platform.is('ios')) {
            this.file.createFile(this.file.documentsDirectory, recordName, true).then((fileEntry) => {
              this.mediaFile = fileEntry;
              if (this.mediaObj != undefined && this.mediaObj != null) {
                this.mediaObj.stopRecord();
                setTimeout(() => {
                  this.mediaObj = this.media.create(this.file.documentsDirectory.replace(/^file:\/\//, '') + recordName);
                  this.startRecord = true;
                  this.recordMedia();
                }, 400);
              } else {
                this.mediaObj = this.media.create(
                    this.file.documentsDirectory.replace(
                        /^file:\/\//,
                        ''
                    ) + recordName
                );
                this.startRecord = true;
                this.recordMedia();
              }
            });
          } else {
            this.file.createFile(this.file.dataDirectory, recordName, true).then((fileEntry) => {
              this.mediaFile = fileEntry;
              if (this.mediaObj != undefined && this.mediaObj != null) {
                this.mediaObj.stopRecord();
                this.mediaObj = this.media.create(this.file.dataDirectory.replace(/^file:\/\//, '') + recordName);
                this.startRecord = true;
                this.recordMedia();
              } else {
                // TODO 需要验证安卓是否可行
                this.mediaObj = this.media.create(
                    this.file.dataDirectory.replace(/^file:\/\//, '') + recordName
                );
                this.startRecord = true;
                this.recordMedia();
              }
            });
          }
        });
      } else {
        if (this.platform.is('android')) {
          const arr = [
            this.androidPermissions.PERMISSION.RECORD_AUDIO,
            this.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE,
            this.androidPermissions.PERMISSION.READ_EXTERNAL_STORAGE,
          ];
          this.androidPermissions.requestPermissions(arr);
        }
      }
    });*/
  }

  // 松开录音按键
  finishRecord() {
    /*clearInterval(this.recordInterval);
    this.startRecord = false;
    setTimeout(() => {
      this.startRecord = false;
      if (this.mediaObj != undefined && this.mediaObj != null) {
        this.mediaObj.stopRecord();
      }
    }, 400);*/
  }

  // 点击表情
  triggerEmoji() {
    this.keyBoardShow = false;
    this.showEmoji = !this.showEmoji;
    this.plusFun = false;
    this.moveScroll = !this.moveScroll;

    this.scrollToBottom();
  }

  // 点击多功能面板
  showPlusFun(e) {
    this.keyBoardShow = false;
    this.plusFun = !this.plusFun;
    this.showEmoji = false;
    this.moveScroll = !this.moveScroll;

    this.scrollToBottom();
  }

  /**
   * 输入框获取焦点
   */
  public focusInput() {
    // this.scrollToBottom();
    // document.body.scrollTop = document.body.scrollHeight;
    this.plusFun = false;
    this.showEmoji = false;
  }

  // 打开相册
  openGalaxy() {
    // 调用相册时传入的参数
    /*const imagePickerOpt = { maximumImagesCount: 9, quality: 100 };
    this.imagePicker.getPictures(imagePickerOpt).then((results) => {
      // tslint:disable-next-line: prefer-for-of
      for (let i = 0; i < results.length; i++) {
        this.uploadImg(results[i]);
        this.focusInput();
      }
    }, (err) => {
    });*/
  }

  openCamera() {
    /*return this.camera.getPicture(this.cameraOpt).then((imageData) => {
      // console.log(imageData);
      const temp = imageData;
      this.uploadCameraPic(temp.toString());
      this.plusFun = false;
      this.focusInput();
    }, (err) => {
      console.log('照相机错误', err);
    });*/
  }

  async choosePosition() {
    /*const lngLat = JSON.parse(window.localStorage.getItem('lngLat'));
    let currentPositions = new LngLat();
    if (lngLat != null && lngLat.name != null) {
      currentPositions.lat = lngLat.lat;
      currentPositions.lng = lngLat.lng;
      currentPositions.name = lngLat.name;
      currentPositions.adcode = lngLat.adcode;
    }
    const model = await this.modalCtrl.create({
      component: PositionPage,
      componentProps: {
        currentPosition: currentPositions,
        openPage: 'group-chat'
      }
    });
    await model.present();
    const { data } = await model.onWillDismiss();
    if (data !== undefined) {
      currentPositions = data.choosedPosition;
      this.sendPositionMsg({ lat: currentPositions.lat, lng: currentPositions.lng }, currentPositions.name);
      this.focusInput();
    }*/
  }

  // 选择文件
  chooseFile() {
    /*if (this.platform.is('android')) {
      this.getFileInfo()
          .then(async fileMeta => {
            this.dialog.presentAlert('发送成功');
          })
          .catch(error => {
          });
    } else {
      this.getFileInfoIos().then(async fileMeta => {
        this.dialog.presentAlert('发送成功');
      }).catch(error => {
        console.log('err');
      });
    }
    this.focusInput();*/
  }

  /**
   * 跳转到底部
   */
  async scrollToBottom() {
    setTimeout(() => {
      if (this.content.scrollY) {
        console.log('滚动到底部');
        this.content.scrollToBottom(1);
      }
    }, 50);
  }

}
