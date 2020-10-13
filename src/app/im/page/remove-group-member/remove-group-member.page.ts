import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {IonContent} from '@ionic/angular';
import {GroupMemberModel} from '../../shared/model/group-member.model';
import {ActivatedRoute, Router} from '@angular/router';
import {AlertControllerService} from '../../service/alert-controller/alert-controller.service';
import {WebSocketService} from '../../core/web-socket.service';
import {GroupService} from '../../service/group-service/group.service';
import {RemoveGroupMemberRequestModel} from './remove-group-member-request.model';
import {OpCode} from '../../core/lib/OpCode_pb';
import {RemoveGroupMemberAckModel} from './remove-group-member-ack.model';

@Component({
    selector: 'app-remove-group-member',
    templateUrl: './remove-group-member.page.html',
    styleUrls: ['./remove-group-member.page.scss'],
})
export class RemoveGroupMemberPage implements OnInit, OnDestroy {
    @ViewChild('content', {static: false}) content: IonContent;
    // 群号
    groupId;
    // 群主
    owner;
    letters: Array<string>;
    allLetters: Array<string>;
    memberList: Array<GroupMemberModel>;
    selected: string[];
    currentUser;
    receiveSub;
    backMemberList;
    searchContent;

    constructor(private router: Router,
                private dialog: AlertControllerService,
                public elementRef: ElementRef,
                private groupSer: GroupService,
                private wsService: WebSocketService,
                private activeRouter: ActivatedRoute) {
        this.groupId = this.activeRouter.snapshot.params.groupId;
        this.selected = new Array();
        this.owner = this.activeRouter.snapshot.params.owner;
        this.allLetters = ['#', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
        this.currentUser = '123';
    }

    ngOnInit() {
        this.letters = [];
        this.groupSer.queryGroupMembers(this.groupId).toPromise().then((rs) => {
            this.memberList = rs.list;
            this.backMemberList = rs.list;
            this.memberList.forEach((member) => {
                if (member.userId == this.currentUser) {
                    return;
                }
                this.groupSer.queryFriendById(member.userId).then((d) => {
                    if (d.rows.length > 0) {
                        member.nickname = d.rows.item(0).alias == '' ? d.rows.item(0).friendName : d.rows.item(0).alias;
                    }
                });

                if (this.letters.length === 0) {
                    this.letters.push(member.pinyin);
                } else {
                    if (this.letters.indexOf(member.pinyin) === -1) {
                        this.letters.push(member.pinyin);
                    }
                }
            });
            console.log(this.memberList);
        });
        this.receiveSub = this.wsService.messages$(OpCode.DETACH_USER_FROM_GROUP_ACK).subscribe((d: RemoveGroupMemberAckModel) => {
            // console.log(d) ;
            if (d.success == 'ok') {
                this.dialog.presentAlert(d.message);
                this.router.navigate(['/tabs/im/group-chat-setting', {
                    groupId: this.groupId
                }], {replaceUrl: false});
            }
        });

    }

    ngOnDestroy(): void {
        this.receiveSub.unsubscribe();
    }

    scrollToTop(letter) {
        if (this.elementRef.nativeElement.querySelector('ion-item-divider#' + letter)) {
            const scrollTop = this.elementRef.nativeElement.querySelector('ion-item-divider#' + letter).offsetTop;
            this.content.scrollToPoint(0, scrollTop);
        }
    }

    checked(friend) {
        console.log(friend);
        const selected = friend.userId;
        if (this.selected.indexOf(selected) > -1) {
            this.selected.splice(this.selected.indexOf(selected), 1);
        } else {
            this.selected.push(selected);
        }
        console.log(this.selected);
    }

    // 移除成员
    detachUser() {
        if (this.selected.length === 0) {
            this.dialog.presentAlert('请先选择成员');
        } else {
            const removeGroupMemberRequestModel = RemoveGroupMemberRequestModel.createMessageModel();
            removeGroupMemberRequestModel.currentUser = this.currentUser;
            removeGroupMemberRequestModel.groupId = this.groupId;
            removeGroupMemberRequestModel.user = this.selected;
            removeGroupMemberRequestModel.message = '';
            removeGroupMemberRequestModel.success = 'wait';
            this.wsService.sendMessage(removeGroupMemberRequestModel);
        }
    }

    input() {
        if (this.searchContent === '') {
            this.memberList = this.backMemberList;
        } else {
            this.memberList = this.backMemberList.filter((member) => {
                return member.nickname.search(this.searchContent) >= 0;
            });
        }
        this.letters = [];
        for (let i = 0; i < this.memberList.length; i++) {
            if (this.letters.length === 0) {
                this.letters.push(this.memberList[i].pinyin);
            } else {
                if (this.letters.indexOf(this.memberList[i].pinyin) === -1) {
                    this.letters.push(this.memberList[i].pinyin);
                }
            }
        }
    }
}
