import {Component, ElementRef, Input, OnDestroy, OnInit} from '@angular/core';
import {WebSocketService, WsStatus} from '../../core/web-socket.service';
import {QueryGroupRequestModel} from './query-group-request.model';
import {OpCode} from '../../core/lib/OpCode_pb';
import {Subscription} from 'rxjs';
import {QueryGroupAckModel} from './query-group-ack.model';
import {GroupModel} from './group.model';
import {DbService} from '../../shared/db.service';
import {IonContent} from '@ionic/angular';
import {Router} from '@angular/router';

@Component({
    selector: 'app-groups',
    templateUrl: './groups.component.html',
    styleUrls: ['./groups.component.scss'],
})
export class GroupsComponent implements OnInit, OnDestroy {
    @Input() content: IonContent;

    letters: Array<string>;
    allLetters: Array<string>;
    groupSub: Subscription;
    groupList: Array<GroupModel>;

    constructor(private webSocketService: WebSocketService,
                public elementRef: ElementRef,
                private router: Router,
                private dbSer: DbService) {
        this.groupList = new Array<GroupModel>();
        this.allLetters = ['#', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

    }

    ngOnInit() {

        console.log('测试开始了呀');
        const groupReq = QueryGroupRequestModel.createMessageModel();

        groupReq.userId = '123';
        this.webSocketService.status$.subscribe((status) => {
            if (status === WsStatus.AUTHED) {
                this.webSocketService.sendMessage(groupReq);
            }
        });


        this.groupSub = this.webSocketService.messages$(OpCode.QUERY_USER_GROUP_ACK).subscribe({
            next: (message: QueryGroupAckModel) => {
                this.letters = [];
                for (let i = 0; i < message.groups.length; i++) {
                    let g = new GroupModel();
                    g.isConfirmJoin = message.groups[i].getSetting().getIsconfirmjoin();
                    g.isMute = message.groups[i].getSetting().getIsmute();
                    g.groupNo = message.groups[i].getGroupNo();
                    g.notice = message.groups[i].getNotice();
                    g.id = message.groups[i].getId();
                    g.name = message.groups[i].getName();
                    g.header = message.groups[i].getHeader();
                    g.pinyin = message.groups[i].getPinyin();
                    if (this.letters.length === 0) {
                        this.letters.push(g.pinyin);
                    } else {
                        if (this.letters.indexOf(g.pinyin) === -1) {
                            this.letters.push(g.pinyin);
                        }
                    }
                    this.groupList.push(g);
                    this.dbSer.dbReady$().subscribe((isReady) => {
                        if (isReady) {
                            this.dbSer.storage.executeSql('INSERT OR REPLACE INTO "group" (id,name,notice,groupNo,header,isMute,isConfirmJoin) VALUES (?,?, ?,?,?,?,?)',
                                [g.id, g.name, g.notice, g.groupNo, g.header, g.isMute, g.isConfirmJoin]);
                            console.log('yes！');
                        }
                    });
                }
            },
            error: (err: any) => {
                console.log('error！', err);
            }
        });
    }

    ngOnDestroy() {
        this.groupSub.unsubscribe();
    }


    openCreateGroup() {

    }

    openGroupChat(id, name) {
        this.router.navigate(['/tabs/im/group-chat', {groupName: name, groupId: id}]);
    }

    scrollToTop(letter) {
        if (this.elementRef.nativeElement.querySelector('ion-item-divider#' + letter)) {
            const scrollTop = this.elementRef.nativeElement.querySelector('ion-item-divider#' + letter).offsetTop;
            this.content.scrollToPoint(0, scrollTop);

        }
    }

}
