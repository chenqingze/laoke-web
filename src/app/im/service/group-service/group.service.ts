import {Injectable} from '@angular/core';
import {ApiService} from '../../shared/api/api.service';
import {Observable} from 'rxjs';
import {API_URL} from '../../shared/api/api.url';

@Injectable({
    providedIn: 'root'
})
export class GroupService {

    constructor(private apiService: ApiService) {
    }

    queryGroupInfo(groupId) {
        const url = API_URL.TALK_GROUP.getGroupInfoById + groupId;
        return this.apiService.getByAuth(url);
    }

    queryUserInGroup(groupId) {
        const url = API_URL.TALK_GROUP.getUserInGroup + '?groupNo' + groupId;
        return this.apiService.getByAuth(url);
    }

    queryUserInGroupByNo(groupNo) {
        const url = API_URL.TALK_GROUP.getUserInGroupByNo + groupNo;
        return this.apiService.getByAuth(url);
    }

    queryGroupByNo(groupNo) {
        const url = API_URL.TALK_GROUP.getGroupByNo +  + groupNo;
        return this.apiService.getByAuth(url);

    }
}
