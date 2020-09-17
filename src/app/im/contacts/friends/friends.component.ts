import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-friends',
    templateUrl: './friends.component.html',
    styleUrls: ['./friends.component.scss'],
})
export class FriendsComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
        console.log("friends ngOnInit ...")
    }

    ionViewWillEnter(){
        console.log("friends ionViewWillEnter ...")
    }


}
