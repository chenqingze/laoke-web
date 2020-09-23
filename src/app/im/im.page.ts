import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {DbService} from './shared/db.service';
import {IonContent} from '@ionic/angular';

export enum ImSubComponent {
    RECENT_CONTACTS,  // 消息
    CONTACTS, // 联系人
    DISCOVERY  // 动态发现
}

@Component({
    selector: 'app-im',
    templateUrl: './im.page.html',
    styleUrls: ['./im.page.scss'],
})
export class ImPage implements OnInit {

    readonly imSubComponentEnum = ImSubComponent;
    @ViewChild('content', {static: false}) content: IonContent;

    isLogin: boolean; // 是否登录
    imSubComponent: ImSubComponent = ImSubComponent.RECENT_CONTACTS; // 子页面

    constructor(
        private dbService: DbService,
        private router: Router,
        private activatedRoute: ActivatedRoute
    ) {
        // this.isLogin = !!localStorage.getItem('token');
        // for test
        this.isLogin = true;
        // 测试用：todo：删除此代码
        // this.dbService.dbReady$().subscribe((isReady) => {
        //     if (isReady) {
        //         this.dbService.storage.executeSql('INSERT INTO testTab (artist_name, song_name) VALUES (?, ?)', [1, 'sum']);
        //         console.log('数据库准备就绪！');
        //     }
        // });
    }

    ngOnInit() {
    }

}
