import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {GroupChatSettingPage} from './group-chat-setting.page';

const routes: Routes = [
  {
    path: '',
    component: GroupChatSettingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GroupChatSettingPageRoutingModule {}
