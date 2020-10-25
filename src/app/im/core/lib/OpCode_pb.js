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
  QUERY_USER_GROUP_REQUEST: 4,
  QUERY_USER_GROUP_ACK: 5,
  FRIEND_INVITATION_REQUEST_REQUEST: 1001,
  FRIEND_INVITATION_REQUEST_ACK: 1002,
  FRIEND_INVITATION_ACCEPT_REQUEST: 1003,
  FRIEND_INVITATION_ACCEPT_ACK: 1004,
  FRIEND_INVITATION_DECLINED_REQUEST: 1005,
  FRIEND_INVITATION_DECLINED_ACK: 1006,
  FRIEND_INVITATION_REQUEST: 1007,
  FRIEND_INVITATION_ACK: 1008,
  FRIEND_REQUEST: 1009,
  FRIEND_ACK: 1010
};

goog.object.extend(exports, proto);
