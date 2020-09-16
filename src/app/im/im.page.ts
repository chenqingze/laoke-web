import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

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
    isLogin: boolean; // 是否登录
    imSubComponent: ImSubComponent = ImSubComponent.RECENT_CONTACTS; // 子页面

    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute
    ) {
        // this.isLogin = !!localStorage.getItem('token');
        // for test
        this.isLogin = true;
    }

    ngOnInit() {
    }

    // 跳转到 登录
    goToLogin() {
        this.router.navigate(['/sign-in', {backUrl: 'im'}]);
    }

}
