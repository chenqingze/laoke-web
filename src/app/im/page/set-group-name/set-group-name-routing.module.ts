import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SetGroupNamePage } from './set-group-name.page';

const routes: Routes = [
  {
    path: '',
    component: SetGroupNamePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SetGroupNamePageRoutingModule {}
