import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {Friend} from '../../contacts/friends/shared/friend.model';
import {AlertControllerService} from '../../../shared/service/alert-controller/alert-controller.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FriendService} from '../../contacts/friends/shared/friend.service';

@Component({
  selector: 'app-friend-alias',
  templateUrl: './friend-alias.page.html',
  styleUrls: ['./friend-alias.page.scss'],
})
export class FriendAliasPage implements OnInit {

  public friend: Friend;
  public alias: string;
  constructor(
      private alertControllerService: AlertControllerService,
      private route: ActivatedRoute,
      private router: Router,
      private location: Location,
      // private commonUtil: CommonUtil,
      private friendService: FriendService
  ) {
    this.route.queryParams.subscribe((queryFriend: Friend) => {
      console.log('FriendAliasPage constructor ...');

      this.friend = queryFriend;
      this.alias = queryFriend.alias || queryFriend.friendName;
    });
  }

  ngOnInit() {}

  updAlias(e) {
    if (this.alias.length == 0) {
      // this.commonUtil.showToast('备注不能为空');
      return;
    }

    this.friendService.updateAlias(this.friend.id, this.alias).subscribe(res => {
      this.router.navigate(['/tabs/im/setting'], {queryParams: {id: this.friend.friendId}});
    }, error => {
      console.error('error', error);
    });
  }

}
