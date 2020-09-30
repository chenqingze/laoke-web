import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChatWindowPageRoutingModule } from './chat-window-routing.module';

import { ChatWindowPage } from './chat-window.page';
import {APieceNewsComponent} from './a-piece-news/a-piece-news.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChatWindowPageRoutingModule
  ],
    declarations: [ChatWindowPage, APieceNewsComponent]
})
export class ChatWindowPageModule {}
