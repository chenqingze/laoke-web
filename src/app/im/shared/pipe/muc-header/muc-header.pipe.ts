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

        const url = API_URL.TALK_GROUP.getUser + userId;
        const d: any = await this.apiService.getByAuth(url).toPromise();
        if (d.user.header) {
            return this.handleImgSrc(d.user.header);
        } else {
            return 'http://img.aihangxunxi.com/cms/4301947339430199456_4544278293495652403.png';
        }
        return 'assets/default-head.png';
    }

    handleImgSrc(url) {
        if (url.startsWith('http://') || url.startsWith('https://')) {
            return url;
        }

        // 通过userId获取
        return 'http://img.aihangxunxi.com/' + url;
    }
}
