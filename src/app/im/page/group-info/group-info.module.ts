import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {GroupInfoPageRoutingModule} from './group-info-routing.module';

import {GroupInfoPage} from './group-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GroupInfoPageRoutingModule
  ],
  declarations: [GroupInfoPage]
})
export class GroupInfoPageModule {}
