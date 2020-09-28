import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-chat-window',
  templateUrl: './chat-window.page.html',
  styleUrls: ['./chat-window.page.scss'],
})
export class ChatWindowPage implements OnInit {

  constructor(
      private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      console.log(params);
    });
  }

}
