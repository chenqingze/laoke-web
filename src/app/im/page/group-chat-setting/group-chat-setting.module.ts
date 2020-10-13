import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {GroupChatSettingPageRoutingModule} from './group-chat-setting-routing.module';

import {GroupChatSettingPage} from './group-chat-setting.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GroupChatSettingPageRoutingModule
  ],
  declarations: [GroupChatSettingPage]
})
export class GroupChatSettingPageModule {}
