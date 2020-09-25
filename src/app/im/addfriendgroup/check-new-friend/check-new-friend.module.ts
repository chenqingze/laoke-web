import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CheckNewFriendPageRoutingModule } from './check-new-friend-routing.module';

import { CheckNewFriendPage } from './check-new-friend.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CheckNewFriendPageRoutingModule
  ],
  declarations: [CheckNewFriendPage]
})
export class CheckNewFriendPageModule {}
