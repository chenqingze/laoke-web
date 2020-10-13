import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditGroupNoticePageRoutingModule } from './edit-group-notice-routing.module';

import { EditGroupNoticePage } from './edit-group-notice.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditGroupNoticePageRoutingModule
  ],
  declarations: [EditGroupNoticePage]
})
export class EditGroupNoticePageModule {}
