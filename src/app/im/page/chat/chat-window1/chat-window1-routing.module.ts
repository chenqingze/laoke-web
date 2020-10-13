import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {ChatWindow1Page} from './chat-window1.page';

const routes: Routes = [
  {
    path: '',
    component: ChatWindow1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChatWindow1PageRoutingModule {}
