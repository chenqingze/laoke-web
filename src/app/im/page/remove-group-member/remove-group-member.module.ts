import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RemoveGroupMemberPageRoutingModule } from './remove-group-member-routing.module';

import { RemoveGroupMemberPage } from './remove-group-member.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RemoveGroupMemberPageRoutingModule
  ],
  declarations: [RemoveGroupMemberPage]
})
export class RemoveGroupMemberPageModule {}
