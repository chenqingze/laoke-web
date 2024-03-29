import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {GroupInfoPage} from './group-info.page';

const routes: Routes = [
  {
    path: '',
    component: GroupInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GroupInfoPageRoutingModule {}
