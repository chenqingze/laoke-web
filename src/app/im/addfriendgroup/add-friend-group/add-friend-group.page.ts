import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AlertController} from '@ionic/angular';
import {FriendService} from '../../contacts/friends/shared/friend.service';
import {AlertControllerService} from '../../service/alert-controller/alert-controller.service';

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
        this.friendService.getFriendById(data.data.id).subscribe(res => {
          res = res.rows;
          if (!!res && res.length === 0) {
            this.router.navigate(['/tabs/im/check-new-friend', {
              userId: this.friend.id,
              nickname: this.friend.nickname,
              profile: this.friend.headImgPath
            }]);
          }
          if (!!res && res.length > 0) {
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

  /*searchGroup() {
    this.messageSer.checkGroup(this.searchCon).then((data) => {
      if (data.group) {
        this.messageSer.queryUserInGroupByNum(this.searchCon).then((d) => {
          if (d.in) {
            this.messageSer.queryGroupInfoByNum(this.searchCon).then((dd) => {

              this.router.navigate(
                      ['/tabs/im/group-chat-window'], {
                        relativeTo: this.route,
                        queryParams: {
                          id: dd.groupId,
                          name: dd.groupName,
                          header: dd.header
                        }
                      }
              );
            });
          } else {
            this.router.navigate(['/tabs/im/group-info', {groupNo: this.searchCon}], {replaceUrl: false});
          }
        });
      } else {
        this.dialog.presentAlert('未找到群');
      }

    });
  }*/

}
