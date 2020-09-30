import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FriendAliasPage } from './friend-alias.page';

const routes: Routes = [
  {
    path: '',
    component: FriendAliasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FriendAliasPageRoutingModule {}
