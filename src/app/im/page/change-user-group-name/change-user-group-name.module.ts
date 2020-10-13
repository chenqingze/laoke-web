import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChangeUserGroupNamePageRoutingModule } from './change-user-group-name-routing.module';

import { ChangeUserGroupNamePage } from './change-user-group-name.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChangeUserGroupNamePageRoutingModule
  ],
  declarations: [ChangeUserGroupNamePage]
})
export class ChangeUserGroupNamePageModule {}
