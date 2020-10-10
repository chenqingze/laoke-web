import {Component, Input, OnInit} from '@angular/core';
import {MsgModel} from '../../shared/msg.model';
import {Friend} from '../../../contacts/friends/shared/friend.model';

@Component({
  selector: 'app-a-piece-news',
  templateUrl: './a-piece-news.component.html',
  styleUrls: ['./a-piece-news.component.scss'],
})
export class APieceNewsComponent implements OnInit {

  @Input() msg: MsgModel;
  @Input() num: number;
  @Input() user: any;
  @Input() friend: Friend;

  constructor() {
    console.log('LotsNewsComponent constructor ...');
  }

  ngOnInit() {}

}
