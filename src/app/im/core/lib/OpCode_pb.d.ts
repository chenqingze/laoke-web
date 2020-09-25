// package: 
// file: OpCode.proto

import * as jspb from "google-protobuf";

export interface OpCodeMap {
  UNKNOWN: 0;
  AUTH_REQUEST: 1;
  AUTH_ACK: 2;
  MSG_REQUEST: 3;
  QUERY_USER_GROUP_REQUEST: 4;
  QUERY_USER_GROUP_ACK: 5;

  FRIEND_INVITATION_REQUEST_REQUEST: 1000;
  FRIEND_INVITATION_REQUEST_ACK: 1001;
}

export const OpCode: OpCodeMap;

