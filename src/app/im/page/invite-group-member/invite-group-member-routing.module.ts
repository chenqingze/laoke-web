import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InviteGroupMemberPage } from './invite-group-member.page';

const routes: Routes = [
  {
    path: '',
    component: InviteGroupMemberPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InviteGroupMemberPageRoutingModule {}
