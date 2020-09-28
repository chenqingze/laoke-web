import {environment} from './../../../../environments/environment';

const API_HOST = environment.msgApiUrl;
// const API_HOST_HTTPS = environment.apiRoot;
export const API_URL = {
    TALK_GROUP: {
        getGroupInfoById: `${API_HOST}/group/`,
        getUserInGroup: `${API_HOST}/group/in/`,
        getUserInGroupByNo: `${API_HOST}/group/in/`,
        getUser: `${API_HOST}/user/`,
        getGroupByNo: `${API_HOST}/group/no/`

    },

    FRIEND: {
        // searchFriend: `${API_HOST_HTTPS}/uc/user/user-query-info`,
    }
};
