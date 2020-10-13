import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {GroupQrCodePage} from './group-qr-code.page';

const routes: Routes = [
  {
    path: '',
    component: GroupQrCodePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GroupQrCodePageRoutingModule {}
