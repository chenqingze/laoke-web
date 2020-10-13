import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-fans',
    templateUrl: './fans.component.html',
    styleUrls: ['./fans.component.scss'],
})
export class FansComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
        console.log("Fans ngOnInit ...")
    }

    ionViewWillEnter(){
        console.log("Fans ionViewWillEnter ...")
    }

}
