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
  },
  {
    path: 'group-chat-setting',
    loadChildren: () => import('./page/group-chat-setting/group-chat-setting.module').then( m => m.GroupChatSettingPageModule)
  },
  {
    path: 'group-info',
    loadChildren: () => import('./page/group-info/group-info.module').then( m => m.GroupInfoPageModule)
  },
  {
    path: 'chat-window',
    loadChildren: () => import('./chat/chat-window/chat-window.module').then( m => m.ChatWindowPageModule)
  },
  {
    path: 'create-group',
    loadChildren: () => import('./page/create-group/create-group.module').then( m => m.CreateGroupPageModule)
  }



];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ImRoutingModule {
}
