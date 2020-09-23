import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {GroupService} from '../../service/group-service/group.service';
import {combineLatest, fromEvent, interval, merge, Observable, timer} from 'rxjs';
import {map, mergeAll} from 'rxjs/operators';

@Component({
    selector: 'app-group-chat',
    templateUrl: './group-chat.page.html',
    styleUrls: ['./group-chat.page.scss'],
})
export class GroupChatPage implements OnInit {
    // 群id
    groupId;
    // 群名
    name;
    // 群成员数量
    memberCount;
    // 是否在群中
    inGroup;

    constructor(private activeRouter: ActivatedRoute,
                private groupService: GroupService) {
        this.groupId = this.activeRouter.snapshot.params.groupId;
        this.name = this.activeRouter.snapshot.params.groupName;
    }

    queryGroupInfo() {
        this.groupService.queryGroupInfo(this.groupId).subscribe({
            next: (data) => {
                console.log(data);
                this.memberCount = data.group.count;
                this.name = data.group.name;
            }, error: (err) => {
                console.log(err);
            }
        });
        this.groupService.queryUserInGroup(this.groupId).subscribe({
            next: (data) => {
                this.inGroup = data.in;
            }, error: (err) => {
                console.log(err);
            }
        });
    }

    ngOnInit() {
        this.queryGroupInfo();
    }

}
