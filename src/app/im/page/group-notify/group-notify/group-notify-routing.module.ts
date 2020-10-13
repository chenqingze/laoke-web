import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {GroupNotifyPage} from './group-notify.page';

const routes: Routes = [
  {
    path: '',
    component: GroupNotifyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GroupNotifyPageRoutingModule {}
