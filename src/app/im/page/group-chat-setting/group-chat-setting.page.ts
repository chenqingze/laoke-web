import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AlertControllerService} from '../../service/alert-controller/alert-controller.service';
import {WebSocketService} from '../../core/web-socket.service';
import {ActionSheetController, Platform} from '@ionic/angular';
import {GroupChatSettingModel} from './group-chat-setting.model';

@Component({
    selector: 'app-group-chat-setting',
    templateUrl: './group-chat-setting.page.html',
    styleUrls: ['./group-chat-setting.page.scss'],
})
export class GroupChatSettingPage implements OnInit, OnDestroy {
    groupId: string;
    groupSetting;
    owner;
    currentUser;
    receiveMsgSub;
    public isIos = false;
    constructor( private router: Router,
                 private dialog: AlertControllerService,
                 private wsService: WebSocketService,
                 private actionSheetCtrl: ActionSheetController,
                 private activeRouter: ActivatedRoute,
                 private platform: Platform) {
        this.groupId = this.activeRouter.snapshot.params.groupId;
        this.groupSetting = new GroupChatSettingModel();
        this.currentUser = '123';
    }

    ngOnInit() {
    }

    ngOnDestroy() {
    }

}
