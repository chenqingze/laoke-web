import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {RemoveGroupMemberPage} from './remove-group-member.page';

const routes: Routes = [
  {
    path: '',
    component: RemoveGroupMemberPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RemoveGroupMemberPageRoutingModule {}
