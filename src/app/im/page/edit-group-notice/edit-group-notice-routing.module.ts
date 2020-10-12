import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditGroupNoticePage } from './edit-group-notice.page';

const routes: Routes = [
  {
    path: '',
    component: EditGroupNoticePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditGroupNoticePageRoutingModule {}
