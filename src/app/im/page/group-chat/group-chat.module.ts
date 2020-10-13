import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GroupChatPageRoutingModule } from './group-chat-routing.module';

import { GroupChatPage } from './group-chat.page';
import {GroupService} from '../../service/group-service/group.service';
import {HttpHandler} from '@angular/common/http';
import {EmojiPickerComponent} from '../../components/emoji-picker/emoji-picker.component';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        GroupChatPageRoutingModule,
        SharedModule
    ],
    declarations: [GroupChatPage, EmojiPickerComponent],
  providers: [
      GroupService,
  ]
})
export class GroupChatPageModule {}
