// source: OpCode.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.OpCode', null, global);
/**
 * @enum {number}
 */
proto.OpCode = {
  UNKNOWN: 0,
  AUTH_REQUEST: 1,
  AUTH_ACK: 2,
  MSG_REQUEST: 3,
  MSG_ACK: 33,
  QUERY_USER_GROUP_REQUEST: 4,
  QUERY_USER_GROUP_ACK: 5,
  INVITATION_USER_JOIN_GROUP_REQUEST: 7,
  INVITATION_USER_JOIN_GROUP_ACK: 8,
  CREATE_GROUP_REQUEST: 9,
  CREATE_GROUP_ACK: 10,
  ACCESS_USER_JOIN_GROUP_REQUEST: 11,
  ACCESS_USER_JOIN_GROUP_ACK: 12,
  EDIT_GROUP_NOTICE_REQUEST: 13,
  EDIT_GROUP_NOTICE_ACK: 14,
  EDIT_GROUP_NAME_REQUEST: 15,
  EDIT_GROUP_NAME_ACK: 16,
  EDIT_GROUP_HEADER_REQUEST: 17,
  EDIT_GROUP_HEADER_ACK: 18,
  UPDATE_GROUP_MUTE_SETTING_REQUEST: 19,
  UPDATE_GROUP_MUTE_SETTING_ACK: 20,
  UPDATE_GROUP_CONFIRM_SETTING_REQUEST: 21,
  UPDATE_GROUP_CONFIRM_SETTING_ACK: 22,
  EXIT_GROUP_REQUEST: 23,
  EXIT_GROUP_ACK: 24,
  DETACH_USER_FROM_GROUP_REQUEST: 25,
  DETACH_USER_FROM_GROUP_ACK: 26,
  QUERY_USER_FANS_LIST_REQUEST: 27,
  QUERY_USER_FANS_LIST_ACK: 28,
  QUERY_GROUP_OFFLINE_HIS_REQUEST: 29,
  QUERY_GROUP_OFFLINE_HIS_ACK: 30,
  QUERY_CONSULTANT_OFFLINE_HIS_REQUEST: 31,
  QUERY_CONSULTANT_OFFLINE_HIS_ACK: 32,
  ASK_FOR_JOIN_GROUP_REQUEST: 34,
  ASK_FOR_JOIN_GROUP_ACK: 35,
  REFUSE_USER_JOIN_MUC_REQUEST: 36,
  REFUSE_USER_JOIN_MUC_ACK: 37,
  INVITATION_REQUEST_REQUEST: 1001,
  INVITATION_REQUEST_ACK: 1002,
  INVITATION_ACCEPT_REQUEST: 1003,
  INVITATION_ACCEPT_ACK: 1004,
  INVITATION_DECLINED_REQUEST: 1005,
  INVITATION_DECLINED_ACK: 1006,
  INVITATION_REQUEST: 1007,
  INVITATION_ACK: 1008,
  FRIEND_DELETE_REQUEST: 1009,
  FRIEND_DELETE_ACK: 1010,
  FRIEND_REQUEST: 1011,
  FRIEND_ACK: 1012,
  MSG_READ_NOTIFY: 1101,
  MSG_READ_ACK: 1102
};

goog.object.extend(exports, proto);
