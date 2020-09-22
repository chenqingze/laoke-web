import {Component, Input, OnInit} from '@angular/core';
import {IonContent} from '@ionic/angular';


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

    constructor() {
        this.contactType = ContactType.FRIENDS;
    }

    ngOnInit() {
    }

}
