import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {IonContent} from '@ionic/angular';
import {AlertControllerService} from '../../service/alert-controller/alert-controller.service';
import {ActivatedRoute, Router} from '@angular/router';
import {GroupFriendModel} from './shared/group-friend.model';
import {GroupService} from '../../service/group-service/group.service';

@Component({
    selector: 'app-create-group',
    templateUrl: './create-group.page.html',
    styleUrls: ['./create-group.page.scss'],
})
export class CreateGroupPage implements OnInit {
    @ViewChild('content', {static: false}) content: IonContent;
    letters: Array<string>;
    friendList: GroupFriendModel[];
    allLetters: Array<string>;
    search;
    selected: any[];
    currentUser;
    onSearch = false;
    maxMemberCount = 0;

    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private dialog: AlertControllerService,
        private groupSer: GroupService,
        public elementRef: ElementRef) {
        this.search = '';
        this.friendList = new Array();
        this.selected = new Array();
        this.letters = [];
        this.allLetters = ['#', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
        this.currentUser = '123';
    }

    ngOnInit() {

        // 群人数上限
        this.groupSer.queryGroupMaxMemberCount().toPromise().then((d) => {
            this.maxMemberCount = d.max;
        });

        this.groupSer.queryFriends().toPromise().then((d) => {
            this.friendList = d.friends;
            console.log(this.friendList);
            for (let i = 0; i < this.friendList.length; i++) {
                this.friendList[i].display = true;

                if (this.letters.length == 0) {
                    this.letters.push(this.friendList[i].pinyin);
                } else {
                    if (this.letters.indexOf(this.friendList[i].pinyin) == -1) {
                        this.letters.push(this.friendList[i].pinyin);
                    }
                }
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
        if (this.search != '' && this.search.trim() != '') {
            this.onSearch = true;
            this.friendList.forEach((item) => {
                var hid = item.alias.toLowerCase().indexOf(this.search) > -1;
                item.display = hid;
            });
        } else {
            this.onSearch = false;
            this.friendList.forEach((item) => {
                var hid = item.alias.toLowerCase().indexOf(this.search) > -1;
                item.display = hid;
            });
        }
    }

    checked(friend: GroupFriendModel) {
        for (let i = 0; i < this.friendList.length; i++) {
            const selected = this.friendList[i].friendId;
            const friendId = friend.friendId;
            if (friendId === selected) {
                if (this.selected.indexOf(selected) > -1) {
                    this.selected.splice(this.selected.indexOf(selected), 1);
                } else {
                    this.selected.push(selected);
                }
            }
        }

        console.log(this.selected);
    }

    checked1(friendId) {
        console.log(friendId);
        this.selected.splice(this.selected.indexOf(friendId), 1);
        for (let i = 0; i < this.friendList.length; i++) {
            const selected = this.friendList[i].friendId;
            if (friendId === selected) {
                this.friendList[i].checked = false;
            }

        }
    }

    // 跳转至设置群名称
    router2GroupName() {

        if (this.selected.length > this.maxMemberCount) {
            this.dialog.presentAlert('群成员数量过多，最多为:' + this.maxMemberCount);
            return;
        }
        if (this.selected.length === 0) {
            this.dialog.presentAlert('请选择好友!');
            return;
        }
        if (this.selected.length < 2) {
            this.dialog.presentAlert('至少要选择两个好友!');
            return;
        }
        if (this.selected.length > 0) {
            this.router.navigate(['/tabs/im/set-group-name', {
                selected: this.selected,
                owner: this.currentUser
            }]);
        }
    }


}
