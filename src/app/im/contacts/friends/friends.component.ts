import {Component, Input, OnInit} from '@angular/core';
import { DbService } from '../../shared/db.service';
import { Friend } from './shared/friend.model';
import { FriendService } from './shared/friend.service';
import {concatMap, mergeMap} from 'rxjs/operators';
import {forkJoin, of} from 'rxjs';

@Component({
    selector: 'app-friends',
    templateUrl: './friends.component.html',
    styleUrls: ['./friends.component.scss'],
})
export class FriendsComponent implements OnInit {

    friends:Array<Friend>;

    constructor(private friendService:FriendService) {
        this.friends = [];


    }

    ngOnInit() {
        console.log("friends ngOnInit ...")
        this.friendService.getFriend().subscribe((friendResult)=>{
            if(friendResult != null){
                this.friends=friendResult.rows;
            }
        })
    }

    // 字母
    alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    // 搜索内容绑定
    searchContent: string;
    // 测试数据
    friends1 = [
        {
            orderStr: 'a', name: '爱斯基摩',
            phone: '770-504-2217',
            photo: 'https://randomuser.me/api/portraits/men/27.jpg',
            isFavorite: false
        }, {
            orderStr: 'a', name: 'aichard Mahoney',
            phone: '423-676-2869',
            photo: 'https://randomuser.me/api/portraits/men/1.jpg',
            isFavorite: true
        }, {
            orderStr: 'r', name: 'richard Mahoney',
            phone: '423-676-2869',
            photo: 'https://randomuser.me/api/portraits/men/1.jpg',
            isFavorite: true
        }, {
            orderStr: 'r', name: 'richard Mahoney',
            phone: '423-676-2869',
            photo: 'https://randomuser.me/api/portraits/men/1.jpg',
            isFavorite: true
        }, {
            orderStr: 'r', name: 'richard Mahoney',
            phone: '423-676-2869',
            photo: 'https://randomuser.me/api/portraits/men/1.jpg',
            isFavorite: true
        }, {
            orderStr: 'd', name: 'donna Price',
            phone: '859-496-2817',
            photo: 'https://randomuser.me/api/portraits/women/50.jpg',
            isFavorite: false
        }, {
            orderStr: 'd', name: 'Dorothy H. Spencer',
            phone: '573-394-9254',
            photo: 'https://randomuser.me/api/portraits/women/67.jpg',
            isFavorite: true
        }, {
            orderStr: 'd', name: 'Dorothy H. Spencer',
            phone: '573-394-9254',
            photo: 'https://randomuser.me/api/portraits/women/67.jpg',
            isFavorite: true
        }, {
            orderStr: 'd', name: 'Dorothy H. Spencer',
            phone: '573-394-9254',
            photo: 'https://randomuser.me/api/portraits/women/67.jpg',
            isFavorite: true
        }, {
            orderStr: 'l', name: 'Lisa Landers',
            phone: '901-747-3428',
            photo: 'https://randomuser.me/api/portraits/women/3.jpg',
            isFavorite: false
        }, {
            orderStr: 'd', name: 'Dorothy H. Spencer',
            phone: '573-394-9254',
            photo: 'https://randomuser.me/api/portraits/women/67.jpg',
            isFavorite: true
        },
        {
            orderStr: 'z', name: 'zisa Landers',
            phone: '901-747-3428',
            photo: 'https://randomuser.me/api/portraits/women/3.jpg',
            isFavorite: false
        },
        {
            orderStr: 'w', name: 'wisa Landers',
            phone: '901-747-3428',
            photo: 'https://randomuser.me/api/portraits/women/3.jpg',
            isFavorite: false
        },
        {
            orderStr: 'y', name: 'yisa Landers',
            phone: '901-747-3428',
            photo: 'https://randomuser.me/api/portraits/women/3.jpg',
            isFavorite: false
        },
        {
            orderStr: 'y', name: 'yisa Landers',
            phone: '901-747-3428',
            photo: 'https://randomuser.me/api/portraits/women/3.jpg',
            isFavorite: false
        }];


}
