import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {InviteGroupMemberPageRoutingModule} from './invite-group-member-routing.module';

import {InviteGroupMemberPage} from './invite-group-member.page';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        InviteGroupMemberPageRoutingModule,
        SharedModule
    ],
  declarations: [InviteGroupMemberPage]
})
export class InviteGroupMemberPageModule {}
