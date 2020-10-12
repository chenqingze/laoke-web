import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChatWindow1PageRoutingModule } from './chat-window1-routing.module';

import { ChatWindow1Page } from './chat-window1.page';
import {ChatWindowPageModule} from '../chat-window/chat-window.module';
import {APieceNewsComponent} from './a-piece-news/a-piece-news.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChatWindow1PageRoutingModule
  ],
  declarations: [ChatWindow1Page, APieceNewsComponent]
})
export class ChatWindow1PageModule {}
