import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {WebSocketService} from '../../core/web-socket.service';
import {AlertControllerService} from '../../service/alert-controller/alert-controller.service';
import {IonRouterOutlet} from '@ionic/angular';
import {GroupModel} from '../../contacts/groups/group.model';
import {GroupService} from '../../service/group-service/group.service';
import {AskForJoinGroupRequestModel} from './ask-for-join-group-request.model';
import {OpCode} from '../../core/lib/OpCode_pb';

@Component({
    selector: 'app-group-info',
    templateUrl: './group-info.page.html',
    styleUrls: ['./group-info.page.scss'],
})
export class GroupInfoPage implements OnInit {
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
        this.wsService.messages$(OpCode.ASK_FOR_JOIN_GROUP_ACK).subscribe((f) => {
            console.log(f);
        });

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
