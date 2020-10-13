import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {FriendAliasPageRoutingModule} from './friend-alias-routing.module';

import {FriendAliasPage} from './friend-alias.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FriendAliasPageRoutingModule
  ],
  declarations: [FriendAliasPage]
})
export class FriendAliasPageModule {}
