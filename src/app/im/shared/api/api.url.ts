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
        getGroupMaxMemberCount: `${API_HOST}/group/max-count`,
        getFriends: `${API_HOST}/group/friends`,
        checkMaxGroupCount: `${API_HOST}/group/check/max`,
        getGroupSettingInfo: `${API_HOST}/group/group-setting`,
        getGroupMembers: `${API_HOST}/group/members`,
        getFriendNotInGroup: `${API_HOST}/group/nin/friend`,
        checkGroupIsFull: `${API_HOST}/group/check/full`,
        updateGroupMemberNickname: `${API_HOST}/group/member/name`,
        groupMemberTop: `${API_HOST}/group/member/top`,

    }, COMMON: {
        clientType: 'AHXX_APP',
        userType: 'AHXX_USER',
        // oss图片路径
        cndUrl: `http://img.aihangxunxi.com/`,
        // 获取图片签名
        getOssSign: `http://192.168.100.222/v3/ahxx/oss/operation/`,
        // getOssSign: `http://192.168.100.222/message/oss/get`,
        // 裁剪图片的路径，后端还没做，记得更改路径
        cropPicture: ``,
        // 获取短信验证码
        smsVerifyCode: `${API_HOST}/uc/sms/smsVerifyCode`,

    },

    FRIEND: {
        // searchFriend: `${API_HOST_HTTPS}/uc/user/user-query-info`,
        updateFriendAlias: `${API_HOST}/friend/alias`,
        updateFriendMute: `${API_HOST}/friend/mute`,
        updFriendStickOnTop: `${API_HOST}/friend/top`,
        updFriendBlocked: `${API_HOST}/friend/blocked`,
    }
};
