import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {IonContent} from '@ionic/angular';
import {AlertControllerService} from '../../service/alert-controller/alert-controller.service';
import {ActivatedRoute, Router} from '@angular/router';
import {GroupFriendModel} from './shared/group-friend.model';
import {GroupService} from '../../service/group-service/group.service';

@Component({
    selector: 'app-create-group',
    templateUrl: './create-group.page.html',
    styleUrls: ['./create-group.page.scss'],
})
export class CreateGroupPage implements OnInit {
    @ViewChild('content', {static: false}) content: IonContent;
    letters: Array<string>;
    friendList: GroupFriendModel[];
    allLetters: Array<string>;
    search;
    selected: any[];
    currentUser;
    onSearch = false;
    maxMemberCount = 0;

    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private dialog: AlertControllerService,
        private groupSer: GroupService,
        public elementRef: ElementRef) {
        this.search = '';
        this.friendList = new Array();
        this.selected = new Array();
        this.letters = [];
        this.allLetters = ['#', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
        this.currentUser = '123';
    }

    ngOnInit() {

        // 群人数上限
        this.groupSer.queryGroupMaxMemberCount().toPromise().then((d) => {
            this.maxMemberCount = d.max;
        });

    }

    scrollToTop(letter) {
        if (this.elementRef.nativeElement.querySelector('ion-item-divider#' + letter)) {
            const scrollTop = this.elementRef.nativeElement.querySelector('ion-item-divider#' + letter).offsetTop;
            this.content.scrollToPoint(0, scrollTop);
        }
    }

    input() {
        if (this.search != '' && this.search.trim() != '') {
            this.onSearch = true;
            this.friendList.forEach((item) => {
                var hid = item.alias.toLowerCase().indexOf(this.search) > -1;
                item.display = hid;
            });
        } else {
            this.onSearch = false;
            this.friendList.forEach((item) => {
                var hid = item.alias.toLowerCase().indexOf(this.search) > -1;
                item.display = hid;
            });
        }
    }



}
