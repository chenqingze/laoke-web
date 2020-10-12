import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChangeUserGroupNamePage } from './change-user-group-name.page';

const routes: Routes = [
  {
    path: '',
    component: ChangeUserGroupNamePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChangeUserGroupNamePageRoutingModule {}
