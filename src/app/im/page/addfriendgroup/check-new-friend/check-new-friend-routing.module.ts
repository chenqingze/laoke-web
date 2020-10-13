import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {CheckNewFriendPage} from './check-new-friend.page';

const routes: Routes = [
  {
    path: '',
    component: CheckNewFriendPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CheckNewFriendPageRoutingModule {}
