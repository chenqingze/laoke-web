import {Injectable} from '@angular/core';
import {ApiService} from '../../shared/api/api.service';
import {API_URL} from '../../shared/api/api.url';

@Injectable({
    providedIn: 'root'
})
export class GroupService {

    constructor(private apiService: ApiService) {
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
}
