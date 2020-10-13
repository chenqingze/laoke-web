import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {GroupService} from '../../service/group-service/group.service';
import {ActionSheetController, IonContent} from '@ionic/angular';
import {GroupMemberModel} from '../../shared/model/group-member.model';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'app-group-members',
    templateUrl: './group-members.page.html',
    styleUrls: ['./group-members.page.scss'],
})
export class GroupMembersPage implements OnInit {
    @ViewChild('content', {static: false}) content: IonContent;
    isOwner = false;
    groupId: string;
    letters: Array<string>;
    allLetters: Array<string>;
    formatContacts: any;
    memberList: Array<GroupMemberModel>;
    searchContent;
    backMemberList;
    currentUser;

    constructor(private groupSer: GroupService,
                public elementRef: ElementRef,
                private activeRouter: ActivatedRoute,
                private router: Router,
                public actionSheetController: ActionSheetController) {
        this.memberList = [];
        this.groupId = this.activeRouter.snapshot.params.groupId;
        this.allLetters = ['#', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I',
            'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
        this.currentUser = '123';

    }

    ngOnInit() {
        this.letters = [];
        this.groupSer.queryGroupMembers(this.groupId).toPromise().then((rs) => {
            this.memberList = rs.list;
            this.backMemberList = rs.list;
            this.memberList.forEach((member) => {

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

        this.groupSer.queryGroupOwner(this.groupId).then((res) => {
            console.log(res);
            console.log(res.rows.item(0).owner);
            if (this.currentUser == res.rows.item(0).owner) {
                console.log('是群主');
                this.isOwner = true;
            } else {
                console.log('不是群主');
                this.isOwner = false;
            }
        });

    }


    scrollToTop(letter) {
        if (this.elementRef.nativeElement.querySelector('ion-item-divider#' + letter)) {
            const scrollTop = this.elementRef.nativeElement.querySelector('ion-item-divider#' + letter).offsetTop;
            this.content.scrollToPoint(0, scrollTop);
        }
    }

    input() {
        if (this.searchContent == '') {
            this.memberList = this.backMemberList;
        } else {
            this.memberList = this.backMemberList.filter((member) => {
                console.log(member.nickname);
                console.log(this.searchContent);
                console.log(member.nickname.search(this.searchContent));
                return member.nickname.search(this.searchContent) >= 0;
            });
        }
        console.log(this.memberList);
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

    async actionSheet() {
        const actionSheet = await this.actionSheetController.create({
            header: '操作',
            cssClass: 'my-custom-class',
            buttons: [{
                text: '添加成员',
                handler: () => {
                    this.router.navigate(['/invite-group-member', {
                        groupId: this.groupId,
                        owner: '',
                        groupName: ''
                    }], {relativeTo: this.activeRouter});
                }
            }, {
                text: '删除成员',
                handler: () => {
                    this.router.navigate(['/detach-group-member', {
                        groupId: this.groupId,
                        owner: '',
                    }], {relativeTo: this.activeRouter});
                }
            }, {
                text: '取消',
                icon: 'close',
                role: 'cancel',
                handler: () => {
                    console.log('Cancel clicked');
                }
            }]
        });
        await actionSheet.present();
    }
}
