import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AddFriendGroupPage} from './add-friend-group.page';

const routes: Routes = [
  {
    path: '',
    component: AddFriendGroupPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddFriendGroupPageRoutingModule {}
