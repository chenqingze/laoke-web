import {Component, Input, OnInit} from '@angular/core';
import {IonContent} from '@ionic/angular';
import {Router} from '@angular/router';
import {GroupService} from '../../shared/service/group-service/group.service';


export enum ContactType {
    FRIENDS,  // 消息
    GROUPS, // 联系人
    FANS  // 动态发现
}

@Component({
    selector: 'app-contacts',
    templateUrl: './contacts.component.html',
    styleUrls: ['./contacts.component.scss'],
})
export class ContactsComponent implements OnInit {
    readonly contactTypeEnum = ContactType;
    @Input() content: IonContent;
    contactType: ContactType;

    groupUnreadCount;

    constructor(private router: Router, private groupSer: GroupService) {
        this.contactType = ContactType.FRIENDS;
        this.groupUnreadCount = 0;
    }

    ngOnInit() {
        this.groupSer.queryUnreadGroupInvitationCount().toPromise().then((d) => {
            this.groupUnreadCount = d.size;
        });
    }

    openGroupNotify() {
        this.router.navigate(['/tabs/im/group-notify']);
        this.groupUnreadCount = 0;
    }
}
