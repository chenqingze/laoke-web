import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {AddFriendGroupPageRoutingModule} from './add-friend-group-routing.module';

import {AddFriendGroupPage} from './add-friend-group.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddFriendGroupPageRoutingModule
  ],
  declarations: [AddFriendGroupPage]
})
export class AddFriendGroupPageModule {}
