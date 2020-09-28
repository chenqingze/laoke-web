import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {WebSocketService} from '../../core/web-socket.service';
import {AlertControllerService} from '../../service/alert-controller/alert-controller.service';
import {IonRouterOutlet} from '@ionic/angular';
import {GroupModel} from '../../contacts/groups/group.model';
import {GroupService} from '../../service/group-service/group.service';
import {AskForJoinGroupRequestModel} from './ask-for-join-group-request.model';
import {OpCode} from '../../core/lib/OpCode_pb';
import {AskForJoinGroupAckModel} from './ask-for-join-group-ack.model';

@Component({
    selector: 'app-group-info',
    templateUrl: './group-info.page.html',
    styleUrls: ['./group-info.page.scss'],
})
export class GroupInfoPage implements OnInit, OnDestroy {
    groupId;
    groupInfo;
    content;
    currentUser;
    receiveSub;

    constructor(private activeRouter: ActivatedRoute,
                private wsService: WebSocketService,
                private dialog: AlertControllerService,
                private router: Router,
                private groupSer: GroupService,
                public outlet: IonRouterOutlet) {
        this.groupId = this.activeRouter.snapshot.queryParamMap.get('groupId');
        console.log(this.groupId);
        this.groupInfo = new GroupModel();
        this.content = '';
        this.currentUser = '123';

    }

    ngOnInit() {
        this.groupSer.queryGroupInfo(this.groupId).toPromise().then((d) => {
            this.groupInfo = d.group;
        });
        this.receiveSub = this.wsService.messages$(OpCode.ASK_FOR_JOIN_GROUP_ACK).subscribe((f: AskForJoinGroupAckModel) => {
            if (f.success == 'in') {
                this.dialog.presentAlert(f.message);
                this.router.navigate(['/tabs/im/group-chat', {groupName: this.groupInfo.name, groupId: this.groupId}], {replaceUrl: true});
            } else if (f.success == 'ok') {
                this.dialog.presentAlert(f.message);
                this.router.navigate(['/tabs/im/group-chat', {groupName: this.groupInfo.name, groupId: this.groupId}], {replaceUrl: true});
            } else if (f.success == 'full') {
                this.dialog.presentAlert(f.message);
            }
        });

    }

    ngOnDestroy() {
        this.receiveSub.unsubscribe();
    }

    // 加入群聊
    join() {
        const askForJoinGroupRequest = AskForJoinGroupRequestModel.createMessageModel();
        askForJoinGroupRequest.groupId = this.groupId;
        askForJoinGroupRequest.userId = this.currentUser;
        askForJoinGroupRequest.success = 'join';
        askForJoinGroupRequest.message = this.content;

        this.wsService.sendMessage(askForJoinGroupRequest);
    }

}
