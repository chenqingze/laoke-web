import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {ChatWindowPageRoutingModule} from './chat-window-routing.module';

import {ChatWindowPage} from './chat-window.page';
import {GroupChatPageModule} from '../../group-chat/group-chat.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ChatWindowPageRoutingModule,
        GroupChatPageModule
    ],
  declarations: [ChatWindowPage]
})
export class ChatWindowPageModule {}
