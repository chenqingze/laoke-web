import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {ImPage} from './im.page';

const routes: Routes = [
    {
        path: '',
        component: ImPage
    },
  {
    path: 'group-chat',
    loadChildren: () => import('./page/group-chat/group-chat.module').then( m => m.GroupChatPageModule)
  }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ImRoutingModule {
}
