import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QueryChatRecordPageRoutingModule } from './query-chat-record-routing.module';

import { QueryChatRecordPage } from './query-chat-record.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QueryChatRecordPageRoutingModule
  ],
  declarations: [QueryChatRecordPage]
})
export class QueryChatRecordPageModule {}
