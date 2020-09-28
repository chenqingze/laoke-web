import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AlertController} from '@ionic/angular';
import {FriendService} from '../../contacts/friends/shared/friend.service';
import {AlertControllerService} from '../../service/alert-controller/alert-controller.service';
import {GroupService} from '../../service/group-service/group.service';

@Component({
    selector: 'app-add-friend-group',
    templateUrl: './add-friend-group.page.html',
    styleUrls: ['./add-friend-group.page.scss'],
})
export class AddFriendGroupPage implements OnInit {

    public searchCon: string;

    public friend: any;
    startSearch;

    constructor(
        public route: ActivatedRoute,
        public friendService: FriendService,
        public groupService: GroupService,
        private dialog: AlertControllerService,
        // private messageSer: MessgeService,
        public router: Router,
    ) {
        this.startSearch = false;
        this.searchCon = '';
    }

    ngOnInit() {
    }

    search(e) {
        if (this.searchCon != '') {
            this.startSearch = true;
        } else {
            this.startSearch = false;
        }
    }

    searchFriend(e) {
        console.log('add-friend search');

        this.friendService.searchFriend(this.searchCon).then(data => {
            this.friend = data.data;
            if (data.data) {
                this.friendService.getFriendById(data.data.id).subscribe(data => {
                    data = data.rows;
                    if (!!data && data.length == 0) {
                        this.router.navigate(['/tabs/im/check-new-friend', {
                            userId: this.friend.id,
                            nickname: this.friend.nickname,
                            profile: this.friend.headImgPath
                        }]);
                    }
                    if (!!data && data.length > 0) {
                        this.dialog.presentAlert('已经是好友跳转个人主页');
                        // this.router.navigate(['/personal-home/' + data.item(0).friendId]);
                        // this.router.navigate(['/chat-window'], {queryParams: {id: data.item(0).friendId}});
                    }
                });
            } else {
                this.dialog.presentAlert('未找到用户');
            }

        });
    }

    searchGroup() {
        this.groupService.queryUserInGroupByNo(this.searchCon).toPromise().then((d) => {
            if (d.in) {
                this.router.navigate(['/tabs/im/group-chat', {groupName: d.groupName, groupId: d.groupId}]);
            } else {
                this.groupService.queryGroupByNo(this.searchCon).subscribe({
                    next: (data) => {
                        if (data.group) {
                            this.router.navigate(['/tabs/im/group-info'], {
                                queryParams: {
                                    groupId: data.group.id,
                                }
                            });
                        } else {
                            this.dialog.presentAlert('未找到群');
                        }
                    }, error: (err) => {
                        console.log(err);
                    }
                });
            }
        });
    }

}
