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
  },
  {
    path: 'new-friend',
    loadChildren: () => import('./addfriendgroup/new-friend/new-friend.module').then(m => m.NewFriendPageModule)
  },
  {
    path: 'add-friend-group',
    loadChildren: () => import('./addfriendgroup/add-friend-group/add-friend-group.module').then(m => m.AddFriendGroupPageModule)
  },
  {
    path: 'check-new-friend',
    loadChildren: () => import('./addfriendgroup/check-new-friend/check-new-friend.module').then(m => m.CheckNewFriendPageModule)
  }


];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ImRoutingModule {
}
