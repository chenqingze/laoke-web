import {NgModule, Optional, SkipSelf} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {ImPage} from './im.page';
import {ImRoutingModule} from './im-routing.module';
import {WebSocketService} from './core/web-socket.service';
import {DiscoveryComponent} from './discovery/discovery.component';
import {ContactsComponent} from './contacts/contacts.component';
import {RecentChatsComponent} from './recent-chats/recent-chats.component';
import {ChatComponent} from './recent-chats/chat/chat.component';
import {FansComponent} from './contacts/fans/fans.component';
import {FriendsComponent} from './contacts/friends/friends.component';
import {GroupsComponent} from './contacts/groups/groups.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ImRoutingModule
    ],
    declarations: [ImPage, RecentChatsComponent, ContactsComponent, DiscoveryComponent, ChatComponent, FansComponent, FriendsComponent, GroupsComponent]
})
export class ImModule {

    constructor(
        private webSocketService: WebSocketService,
        @Optional() @SkipSelf() parentModule?: ImModule
    ) {
        if (parentModule) {
            throw new Error(
                'ImModule is already loaded. Import it in the AppModule only');
        }

        // let subject = new Subject();
        // console.log('subject is closed ?', subject.closed);
        // const inSub = interval(1_000).subscribe(subject);
        // const sub1 = subject.subscribe((d) => {
        //         console.log('sub1', d);
        //     },
        //     error => console.log(error));
        // const sub2 = subject.subscribe((d) => {
        //     console.log('sub2', d);
        // });

        // setTimeout(() => {
        //     sub1.unsubscribe();
        //     console.log('sub1 is closed ?', sub1.closed);
        //     console.log('sub2 is closed ?', sub2.closed);
        //
        // }, 3_000);

        // setTimeout(() => {
        //     console.log('subject is closed ?', subject.closed);
        //
        //     subject.complete();
        //     // subject.unsubscribe();
        //     // subject.unsubscribe();
        //     console.log('subject is closed ?', subject.closed);
        //     console.log('subject is closed ?', subject);
        //     console.log('sub1 is closed ?', sub1.closed);
        //     console.log('sub2 is closed ?', sub2.closed);
        // }, 5_000);
        //
        // setTimeout(() => {
        //     subject = new Subject();
        //     console.log('subject is closed ?', subject.closed);
        //     // interval(1_000).subscribe(subject);
        //     // const sub3 = subject.subscribe((d) => {
        //     //     console.log('sub3', d);
        //     // });
        // }, 15_000);

    }

    /**
     * 根模块导入使用
     */
    // static forRoot(config: ImConfig): ModuleWithProviders<ImModule> {
    //     return {
    //         ngModule: ImModule,
    //         providers: [
    //             {provide: ImConfig, useValue: config}
    //         ]
    //     };
    // }

}
