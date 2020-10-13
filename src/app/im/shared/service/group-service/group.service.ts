import {Injectable} from '@angular/core';
import {ApiService} from '../../../core/api/api.service';
import {API_URL} from '../../../core/api/api.url';
import {DbService} from '../../../core/db.service';

@Injectable({
    providedIn: 'root'
})
export class GroupService {

    constructor(private apiService: ApiService,
                private dbSer: DbService) {
    }

    // 获取群资料
    queryGroupInfo(groupId) {
        const url = API_URL.TALK_GROUP.getGroupInfoById + groupId;
        return this.apiService.getByAuth(url);
    }

    // 根据群号判断用户是否在群中
    queryUserInGroup(groupId) {
        const url = API_URL.TALK_GROUP.getUserInGroup + '?groupId=' + groupId;
        return this.apiService.getByAuth(url);
    }

    // 根据群号获取人是否在群中
    queryUserInGroupByNo(groupNo) {
        const url = API_URL.TALK_GROUP.getUserInGroupByNo + groupNo;
        return this.apiService.getByAuth(url);
    }

    // 根据群号获取群信息
    queryGroupByNo(groupNo) {
        const url = API_URL.TALK_GROUP.getGroupByNo + +groupNo;
        return this.apiService.getByAuth(url);

    }

    // 获取最大成员数
    queryGroupMaxMemberCount() {
        const url = API_URL.TALK_GROUP.getGroupMaxMemberCount;
        return this.apiService.getByAuth(url);
    }

    // 获取好友
    queryFriends() {
        const url = API_URL.TALK_GROUP.getFriends;
        return this.apiService.getByAuth(url);
    }

    queryFriendById(id): Promise<any> {
        const sql = 'select * from friend where friendId = ?';
        return this.dbSer.storage.executeSql(sql, [id]);
    }


    // 判断最大创建数是否合法
    checkUserGroupMaxCount() {
        const url = API_URL.TALK_GROUP.checkMaxGroupCount;
        return this.apiService.getByAuth(url);
    }

    // 把群保存至前端数据库
    saveGroup(id, name, notice, groupNo, header, isMute, isConfirmJoin) {
        const sql = 'INSERT OR REPLACE INTO "group" (id,name,notice,groupNo,header,isMute,isConfirmJoin) VALUES (?,?, ?,?,?,?,?)';
        this.dbSer.storage.executeSql(sql, [id, name, notice, groupNo, header, isMute, isConfirmJoin]);
    }

    // 删除群聊记录
    deleteGroupMsg(groupId) {
        const sql = 'DELETE FROM "msg_hist" where conversationId=? ';
        this.dbSer.storage.executeSql(sql, [groupId]);
    }

    // 获取群设置
    queryGroupSettingInfo(id) {
        const url = API_URL.TALK_GROUP.getGroupSettingInfo + '?groupId=' + id;
        return this.apiService.getByAuth(url);
    }

    // 获取群成员列表
    queryGroupMembers(groupId) {
        const url = API_URL.TALK_GROUP.getGroupMembers + '?id=' + groupId;
        return this.apiService.getByAuth(url);
    }

    // 获取群主
    queryGroupOwner(groupId): Promise<any> {
        const sql = 'SELECT * FROM "group" where id=?';
        return this.dbSer.storage.executeSql(sql, [groupId]);

    }

    // 获取不在群里的好友
    queryFriendNotInGroup(groupId) {
        const url = API_URL.TALK_GROUP.getFriendNotInGroup + '?groupId=' + groupId;
        return this.apiService.getByAuth(url);
    }

    // 判断群是否满了
    checkGroupIsFull(groupId, count) {
        const url = API_URL.TALK_GROUP.checkGroupIsFull + '?groupId=' + groupId + '&invitationCount=' + count;
        return this.apiService.getByAuth(url);
    }

    // 更新群昵称
    updateGroupMemberNickname(groupId, nickname) {
        const url = API_URL.TALK_GROUP.updateGroupMemberNickname + '?groupId=' + groupId + '&name=' + nickname;
        return this.apiService.putByAuth(url);
    }

    // 获取群昵称
    queryGroupMemberNickname(groupId) {
        const url = API_URL.TALK_GROUP.updateGroupMemberNickname + '?groupId=' + groupId;
        return this.apiService.getByAuth(url);
    }

    // 更新用户置顶
    updateGroupMemberTop(groupId, top) {
        const url = API_URL.TALK_GROUP.groupMemberTop + '?groupId=' + groupId + '&top=' + top;
        return this.apiService.putByAuth(url);
    }

    // 获取某人某群置顶
    queryGroupMemberTop(groupId) {
        const url = API_URL.TALK_GROUP.groupMemberTop + '?groupId=' + groupId;
        return this.apiService.getByAuth(url);
    }

    // 获取群申请记录
    queryGroupInvitation() {
        const url = API_URL.TALK_GROUP.getGroupInvitation;
        return this.apiService.getByAuth(url);
    }

    // 获取未读的邀请记录条数
    queryUnreadGroupInvitationCount() {
        const url = API_URL.TALK_GROUP.getGroupInvitationCount;
        return this.apiService.getByAuth(url);
    }

    // 更新未读邀请记录为已读
    updateUnreadGroupInvitation() {
        const url = API_URL.TALK_GROUP.getGroupInvitationCount;
        return this.apiService.putByAuth(url);
    }
}
