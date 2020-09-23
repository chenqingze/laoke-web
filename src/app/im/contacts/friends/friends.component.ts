import {Component, Input, OnInit} from '@angular/core';
import { DbService } from '../../shared/db.service';
import { Friend } from './friend.model';
import { FriendService } from './service/friend.service';

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

    ionViewWillEnter(){
        console.log("friends ionViewWillEnter ...")
    }


}
