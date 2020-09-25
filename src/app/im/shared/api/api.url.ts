import {environment} from './../../../../environments/environment';

const API_HOST = environment.msgApiUrl;
// const API_HOST_HTTPS = environment.apiRoot;
export const API_URL = {
    TALK_GROUP: {
        getGroupInfoById: `${API_HOST}/group/`,
        getUserInGroup: `${API_HOST}/in/`,
        getUser: `${API_HOST}/user/`,

    },

    FRIEND:{
        // searchFriend: `${API_HOST_HTTPS}/uc/user/user-query-info`,
    }
};
