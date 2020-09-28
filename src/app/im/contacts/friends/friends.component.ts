/// <reference types="node" />
import {Component, ElementRef, Input, OnInit} from '@angular/core';
import { Friend } from './shared/friend.model';
import { FriendService } from './shared/friend.service';
import {IonContent} from '@ionic/angular';
import {LetterObjs} from './shared/letter-objs.model';
import * as pinyin from 'pinyin';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'app-friends',
    templateUrl: './friends.component.html',
    styleUrls: ['./friends.component.scss'],
})
export class FriendsComponent implements OnInit {

    @Input() content: IonContent;

    objectKeys = Object.keys;

    friends: Array<Friend>;

    userId: string;

    letterObjs: LetterObjs;

    constructor(
        private friendService: FriendService,
        private router: Router,
        private route: ActivatedRoute,
        private elementRef: ElementRef
        ) {
        this.friends = [];
        this.letterObjs = new LetterObjs();
    }

    ngOnInit() {
        console.log('friends ngOnInit ...');
        this.friendService.getFriend().subscribe((friendResult) => {
            if (friendResult != null){
                const letterObjs = new LetterObjs();
                const friendList = new Array<Friend>();
                for (let i = 0; i < friendResult.rows.length; i++) {
                    const friend = friendResult.rows.item(i);
                    // if(friend.status != "effective") continue;
                    friendList.push(friend);

                    const arrays = pinyin(friend.alias ? friend.alias : friend.nickname, {style: pinyin.STYLE_NORMAL});
                    const byte = arrays[0][0];
                    const first = byte.split('')[0].toUpperCase();
                    const isletter = /^[a-zA-Z]+$/.test(first);
                    if (isletter) {
                        letterObjs[first].push(friend);
                    } else {
                        letterObjs.digit.push(friend);
                    }
                }
                this.friends = friendList;
                this.letterObjs = letterObjs;
            }
        });
    }

    scrollToTop(letter) {
        if (this.elementRef.nativeElement.querySelector('ion-item-divider#' + letter)) {
            const scrollTop = this.elementRef.nativeElement.querySelector('ion-item-divider#' + letter).offsetTop;
            this.content.scrollToPoint(0, scrollTop);
        }
    }

    goChat($event: MouseEvent, friend: Friend) {
        /*const  user: any = await this.friendsService.goFriend(friend);
        await this.sqlService.updFriendMsg(user);
        if (user.status == 'effective') {
            this.router.navigate(['/chat-window'],{relativeTo: this.route, queryParams: {id:friend.friendId,chatType:'friend'}});
        }else{
            this.commonUtil.showToast('该用户已注销');
        }*/

        this.router.navigate(['/tabs/im/chat-window'], {relativeTo: this.route, queryParams: {id: friend.friendId, chatType: 'friend'}});
    }

}
