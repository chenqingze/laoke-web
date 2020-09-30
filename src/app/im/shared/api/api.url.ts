import {environment} from './../../../../environments/environment';

const API_HOST = environment.msgApiUrl;
// const API_HOST_HTTPS = environment.apiRoot;
export const API_URL = {
    TALK_GROUP: {
        getGroupInfoById: `${API_HOST}/group/`,
        getUserInGroup: `${API_HOST}/group/in`,
        getUserInGroupByNo: `${API_HOST}/group/in/`,
        getUser: `${API_HOST}/user/`,
        getGroupByNo: `${API_HOST}/group/no/`,
        getGroupMaxMemberCount: `${API_HOST}/group/max-count`

    },

    FRIEND: {
        // searchFriend: `${API_HOST_HTTPS}/uc/user/user-query-info`,
        updateFriendAlias: `${API_HOST}/friend/alias`,
        updateFriendMute: `${API_HOST}/friend/mute`,
        updFriendStickOnTop: `${API_HOST}/friend/top`,
        updFriendBlocked: `${API_HOST}/friend/blocked`,
    }
};
