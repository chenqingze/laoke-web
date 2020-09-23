import {environment} from './../../../../environments/environment';

const API_HOST = environment.msgApiUrl;
export const API_URL = {
    TALK_GROUP: {
        getGroupInfoById: `${API_HOST}/group/`,
        getUserInGroup: `${API_HOST}/in/`,
    }
};
