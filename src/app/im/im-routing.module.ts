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
        loadChildren: () => import('./page/group-chat/group-chat.module').then(m => m.GroupChatPageModule)
    },
    {
        path: 'new-friend',
        loadChildren: () => import('./page/addfriendgroup/new-friend/new-friend.module').then(m => m.NewFriendPageModule)
    },
    {
        path: 'add-friend-group',
        loadChildren: () => import('./page/addfriendgroup/add-friend-group/add-friend-group.module').then(m => m.AddFriendGroupPageModule)
    },
    {
        path: 'check-new-friend',
        loadChildren: () => import('./page/addfriendgroup/check-new-friend/check-new-friend.module').then(m => m.CheckNewFriendPageModule)
    },
    {
        path: 'group-chat-setting',
        loadChildren: () => import('./page/group-chat-setting/group-chat-setting.module').then(m => m.GroupChatSettingPageModule)
    },
    {
        path: 'group-info',
        loadChildren: () => import('./page/group-info/group-info.module').then(m => m.GroupInfoPageModule)
    },
    {
        path: 'chat-window',
        loadChildren: () => import('./page/chat/chat-window/chat-window.module').then(m => m.ChatWindowPageModule)
    },
    {
        path: 'create-group',
        loadChildren: () => import('./page/create-group/create-group.module').then(m => m.CreateGroupPageModule)
    },
    {
        path: 'set-group-name',
        loadChildren: () => import('./page/set-group-name/set-group-name.module').then(m => m.SetGroupNamePageModule)
    },
    {
        path: 'invite-group-member',
        loadChildren: () => import('./page/invite-group-member/invite-group-member.module').then(m => m.InviteGroupMemberPageModule)
    },
    {
        path: 'remove-group-member',
        loadChildren: () => import('./page/remove-group-member/remove-group-member.module').then(m => m.RemoveGroupMemberPageModule)
    },
    {
        path: 'change-group-name',
        loadChildren: () => import('./page/change-group-name/change-group-name.module').then(m => m.ChangeGroupNamePageModule)
    },
    {
        path: 'group-qr-code',
        loadChildren: () => import('./page/group-qr-code/group-qr-code.module').then(m => m.GroupQrCodePageModule)
    },
    {
        path: 'edit-group-notice',
        loadChildren: () => import('./page/edit-group-notice/edit-group-notice.module').then(m => m.EditGroupNoticePageModule)
    },
    {
        path: 'change-user-group-name',
        loadChildren: () => import('./page/change-user-group-name/change-user-group-name.module').then(m => m.ChangeUserGroupNamePageModule)
    },
    {
        path: 'query-chat-record',
        loadChildren: () => import('./page/query-chat-record/query-chat-record.module').then(m => m.QueryChatRecordPageModule)
    },
    {
        path: 'group-members',
        loadChildren: () => import('./page/group-members/group-members.module').then(m => m.GroupMembersPageModule)
    }, {
        path: 'setting',
        loadChildren: () => import('./page/chat/setting/setting.module').then(m => m.SettingPageModule)
    },
    {
        path: 'friend-alias',
        loadChildren: () => import('./page/chat/friend-alias/friend-alias.module').then(m => m.FriendAliasPageModule)
    },
    {
        path: 'chat-window1',
        loadChildren: () => import('./page/chat/chat-window1/chat-window1.module').then(m => m.ChatWindow1PageModule)

    },
  {
    path: 'group-notify',
    loadChildren: () => import('./page/group-notify/group-notify/group-notify.module').then(m => m.GroupNotifyPageModule)
  }


];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ImRoutingModule {
}
