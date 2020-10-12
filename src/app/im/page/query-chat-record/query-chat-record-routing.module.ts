import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QueryChatRecordPage } from './query-chat-record.page';

const routes: Routes = [
  {
    path: '',
    component: QueryChatRecordPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QueryChatRecordPageRoutingModule {}
