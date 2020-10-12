import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {IonContent, NavController} from '@ionic/angular';
import {ActivatedRoute, Router} from '@angular/router';
import {AlertControllerService} from '../../service/alert-controller/alert-controller.service';
import {WebSocketService} from '../../core/web-socket.service';
import {GroupFriendModel} from '../create-group/shared/group-friend.model';
import {GroupService} from '../../service/group-service/group.service';
import {InvitationUserJoinGroupRequestModel} from './invitation-user-join-group-request.model';
import {OpCode} from '../../core/lib/OpCode_pb';
import {InvitationUserJoinGroupAckModel} from './invitation-user-join-group-ack.model';

@Component({
    selector: 'app-invite-group-member',
    templateUrl: './invite-group-member.page.html',
    styleUrls: ['./invite-group-member.page.scss'],
})
export class InviteGroupMemberPage implements OnInit, OnDestroy {
    @ViewChild('content', {static: false}) content: IonContent;
    // 已选中的成员
    selected: string[];
    groupId;
    owner;
    friends: GroupFriendModel[];
    backFriends;

    letters: Array<string>;
    allLetters: Array<string>;
    search;
    currentUser;
    groupName;
    receiveSub;

    constructor(private activeRouter: ActivatedRoute,
                public elementRef: ElementRef,
                private dialog: AlertControllerService,
                private router: Router,
                private navCtrl: NavController,
                private groupSer: GroupService,
                private wsService: WebSocketService) {
        this.groupId = this.activeRouter.snapshot.params.groupId;
        this.owner = this.activeRouter.snapshot.params.owner;
        this.groupName = this.activeRouter.snapshot.params.groupName;
        this.friends = new Array();
        this.selected = new Array();
        this.allLetters = ['#', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
        this.currentUser = '123';
        this.search = '';
    }

    ngOnInit() {
        this.letters = [];
        this.groupSer.queryFriendNotInGroup(this.groupId).toPromise().then((d) => {
            this.friends = d.list;
            this.backFriends = d.list;
            for (let i = 0; i < this.friends.length; i++) {
                this.friends[i].display = true;
                if (this.letters.length == 0) {
                    this.letters.push(this.friends[i].pinyin);
                } else {
                    if (this.letters.indexOf(this.friends[i].pinyin) == -1) {
                        this.letters.push(this.friends[i].pinyin);
                    }
                }
            }
            console.log(d);
        });
        this.receiveSub = this.wsService.messages$(OpCode.INVITATION_USER_JOIN_GROUP_ACK).subscribe((message: InvitationUserJoinGroupAckModel) => {
            if (message.success === 'full') {
                this.dialog.presentAlert(message.message);
            } else if (message.success === 'ok') {
                this.dialog.presentAlert(message.message);
                this.router.navigate(['/tabs/im/group-chat-setting', {
                    groupId: this.groupId
                }], {replaceUrl: false});
            }
        });
    }

    ngOnDestroy() {
        this.receiveSub.unsubscribe();
    }

    scrollToTop(letter) {
        if (this.elementRef.nativeElement.querySelector('ion-item-divider#' + letter)) {
            const scrollTop = this.elementRef.nativeElement.querySelector('ion-item-divider#' + letter).offsetTop;
            this.content.scrollToPoint(0, scrollTop);
        }
    }

    checked(friend: GroupFriendModel) {
        console.log(friend);
        for (let i = 0; i < this.friends.length; i++) {
            const selected = this.friends[i].userId;
            const friendId = friend.userId;
            if (friendId == selected) {
                if (this.selected.indexOf(selected) > -1) {
                    this.selected.splice(this.selected.indexOf(selected), 1);
                } else {
                    this.selected.push(selected);
                }
            }
        }
    }

    checked1(friendId) {
        console.log(friendId);
        this.selected.splice(this.selected.indexOf(friendId), 1);
        for (let i = 0; i < this.friends.length; i++) {
            const selected = this.friends[i].userId;
            if (friendId == selected) {
                this.friends[i].checked = false;
            }

        }
    }

    addUserInGroup() {
        if (this.selected.length == 0) {
            this.dialog.presentAlert('请选择好友');
        } else {
            this.groupSer.checkGroupIsFull(this.groupId, this.selected.length).toPromise().then((d) => {
                if (d.max) {
                    this.dialog.presentAlert('邀请失败，此群已超过最大人数');
                } else {
                    console.log('发送请求');
                    const invitationUserJoinGroupRequest = InvitationUserJoinGroupRequestModel.createMessageModel();
                    invitationUserJoinGroupRequest.user = this.selected;
                    invitationUserJoinGroupRequest.success = 'wait';
                    invitationUserJoinGroupRequest.message = '';
                    invitationUserJoinGroupRequest.groupId = this.groupId;
                    invitationUserJoinGroupRequest.currentUser = this.currentUser;
                    this.wsService.sendMessage(invitationUserJoinGroupRequest);

                }
            });
        }
    }

    input() {
        if (this.search == '') {
            this.friends = this.backFriends;
        } else {
            this.friends = this.backFriends.filter((f) => {
                return f.nickname.search(this.search) >= 0;
            });
        }
        this.letters = [];
        for (let i = 0; i < this.friends.length; i++) {
            if (this.letters.length == 0) {
                this.letters.push(this.friends[i].pinyin);
            } else {
                if (this.letters.indexOf(this.friends[i].pinyin) == -1) {
                    this.letters.push(this.friends[i].pinyin);
                }
            }
        }
    }
}
