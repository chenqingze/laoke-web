import {Pipe, PipeTransform} from '@angular/core';
import {ApiService} from '../../api/api.service';
import {API_URL} from '../../api/api.url';

@Pipe({
    name: 'mucHeader'
})
export class MucHeaderPipe implements PipeTransform {


    constructor(private apiService: ApiService) {

    }

    async transform(userId) {
        // const currentUser = JSON.parse(window.localStorage.getItem('accountModel')).userId;
        const currentUser = '123';
        const url = API_URL.TALK_GROUP.getUser + currentUser;
        const user: any = await this.apiService.getByAuth(url).toPromise();
        if (user.profile) {
            return this.handleImgSrc(user.profile);
        } else {
            return 'http://img.aihangxunxi.com/cms/4301947339430199456_4544278293495652403.png';
        }
        return null;
    }

    handleImgSrc(url) {
        if (url.startsWith('http://')) {
            return url;
        }

        // 通过userId获取
        return 'http://img.aihangxunxi.com/' + url;
    }
}
