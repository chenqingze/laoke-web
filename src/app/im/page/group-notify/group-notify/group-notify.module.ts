import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {GroupNotifyPageRoutingModule} from './group-notify-routing.module';

import {GroupNotifyPage} from './group-notify.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GroupNotifyPageRoutingModule
  ],
  declarations: [GroupNotifyPage]
})
export class GroupNotifyPageModule {}
