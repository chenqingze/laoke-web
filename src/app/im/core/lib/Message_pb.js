// source: Message.proto
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

var OpCode_pb = require('./OpCode_pb.js');
goog.object.extend(proto, OpCode_pb);
var Msg_pb = require('./Msg_pb.js');
goog.object.extend(proto, Msg_pb);
var Connection_pb = require('./Connection_pb.js');
goog.object.extend(proto, Connection_pb);
goog.exportSymbol('proto.Message', null, global);
goog.exportSymbol('proto.Message.PayloadCase', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Message = function (opt_data) {
    jspb.Message.initialize(this, opt_data, 0, -1, null, proto.Message.oneofGroups_);
};
goog.inherits(proto.Message, jspb.Message);
if (goog.DEBUG && !COMPILED) {
    /**
     * @public
     * @override
     */
    proto.Message.displayName = 'proto.Message';
}

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.Message.oneofGroups_ = [[11, 12, 20]];

/**
 * @enum {number}
 */
proto.Message.PayloadCase = {
    PAYLOAD_NOT_SET: 0,
    AUTH_REQUEST: 11,
    AUTH_ACK: 12,
    MSG_REQUEST: 20
};

/**
 * @return {proto.Message.PayloadCase}
 */
proto.Message.prototype.getPayloadCase = function () {
    return /** @type {proto.Message.PayloadCase} */(jspb.Message.computeOneofCase(this, proto.Message.oneofGroups_[0]));
};


if (jspb.Message.GENERATE_TO_OBJECT) {
    /**
     * Creates an object representation of this proto.
     * Field names that are reserved in JavaScript and will be renamed to pb_name.
     * Optional fields that are not set will be set to undefined.
     * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
     * For the list of reserved names please see:
     *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
     * @param {boolean=} opt_includeInstance Deprecated. whether to include the
     *     JSPB instance for transitional soy proto support:
     *     http://goto/soy-param-migration
     * @return {!Object}
     */
    proto.Message.prototype.toObject = function (opt_includeInstance) {
        return proto.Message.toObject(opt_includeInstance, this);
    };


    /**
     * Static version of the {@see toObject} method.
     * @param {boolean|undefined} includeInstance Deprecated. Whether to include
     *     the JSPB instance for transitional soy proto support:
     *     http://goto/soy-param-migration
     * @param {!proto.Message} msg The msg instance to transform.
     * @return {!Object}
     * @suppress {unusedLocalVariables} f is only used for nested messages
     */
    proto.Message.toObject = function (includeInstance, msg) {
        var f, obj = {
            magic: jspb.Message.getFieldWithDefault(msg, 1, "0"),
            version: jspb.Message.getFieldWithDefault(msg, 2, 0),
            opCode: jspb.Message.getFieldWithDefault(msg, 3, 0),
            seq: jspb.Message.getFieldWithDefault(msg, 4, 0),
            authRequest: (f = msg.getAuthRequest()) && Connection_pb.AuthRequest.toObject(includeInstance, f),
            authAck: (f = msg.getAuthAck()) && Connection_pb.AuthAck.toObject(includeInstance, f),
            msgRequest: (f = msg.getMsgRequest()) && Msg_pb.MsgRequest.toObject(includeInstance, f)
        };

        if (includeInstance) {
            obj.$jspbMessageInstance = msg;
        }
        return obj;
    };
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Message}
 */
proto.Message.deserializeBinary = function (bytes) {
    var reader = new jspb.BinaryReader(bytes);
    var msg = new proto.Message;
    return proto.Message.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Message} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Message}
 */
proto.Message.deserializeBinaryFromReader = function (msg, reader) {
    while (reader.nextField()) {
        if (reader.isEndGroup()) {
            break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
            case 1:
                var value = /** @type {string} */ (reader.readUint64String());
                msg.setMagic(value);
                break;
            case 2:
                var value = /** @type {number} */ (reader.readUint32());
                msg.setVersion(value);
                break;
            case 3:
                var value = /** @type {!proto.OpCode} */ (reader.readEnum());
                msg.setOpCode(value);
                break;
            case 4:
                var value = /** @type {number} */ (reader.readUint64());
                msg.setSeq(value);
                break;
            case 11:
                var value = new Connection_pb.AuthRequest;
                reader.readMessage(value, Connection_pb.AuthRequest.deserializeBinaryFromReader);
                msg.setAuthRequest(value);
                break;
            case 12:
                var value = new Connection_pb.AuthAck;
                reader.readMessage(value, Connection_pb.AuthAck.deserializeBinaryFromReader);
                msg.setAuthAck(value);
                break;
            case 20:
                var value = new Msg_pb.MsgRequest;
                reader.readMessage(value, Msg_pb.MsgRequest.deserializeBinaryFromReader);
                msg.setMsgRequest(value);
                break;
            default:
                reader.skipField();
                break;
        }
    }
    return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Message.prototype.serializeBinary = function () {
    var writer = new jspb.BinaryWriter();
    proto.Message.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Message} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Message.serializeBinaryToWriter = function (message, writer) {
    var f = undefined;
    f = message.getMagic();
    if (parseInt(f, 10) !== 0) {
        writer.writeUint64String(
            1,
            f
        );
    }
    f = message.getVersion();
    if (f !== 0) {
        writer.writeUint32(
            2,
            f
        );
    }
    f = message.getOpCode();
    if (f !== 0.0) {
        writer.writeEnum(
            3,
            f
        );
    }
    f = message.getSeq();
    if (f !== 0) {
        writer.writeUint64(
            4,
            f
        );
    }
    f = message.getAuthRequest();
    if (f != null) {
        writer.writeMessage(
            11,
            f,
            Connection_pb.AuthRequest.serializeBinaryToWriter
        );
    }
    f = message.getAuthAck();
    if (f != null) {
        writer.writeMessage(
            12,
            f,
            Connection_pb.AuthAck.serializeBinaryToWriter
        );
    }
    f = message.getMsgRequest();
    if (f != null) {
        writer.writeMessage(
            20,
            f,
            Msg_pb.MsgRequest.serializeBinaryToWriter
        );
    }
};


/**
 * optional uint64 magic = 1;
 * @return {string}
 */
proto.Message.prototype.getMagic = function () {
    return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.Message} returns this
 */
proto.Message.prototype.setMagic = function (value) {
    return jspb.Message.setProto3StringIntField(this, 1, value);
};


/**
 * optional uint32 version = 2;
 * @return {number}
 */
proto.Message.prototype.getVersion = function () {
    return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.Message} returns this
 */
proto.Message.prototype.setVersion = function (value) {
    return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional OpCode op_code = 3;
 * @return {!proto.OpCode}
 */
proto.Message.prototype.getOpCode = function () {
    return /** @type {!proto.OpCode} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.OpCode} value
 * @return {!proto.Message} returns this
 */
proto.Message.prototype.setOpCode = function (value) {
    return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional uint64 seq = 4;
 * @return {number}
 */
proto.Message.prototype.getSeq = function () {
    return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.Message} returns this
 */
proto.Message.prototype.setSeq = function (value) {
    return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional AuthRequest auth_request = 11;
 * @return {?proto.AuthRequest}
 */
proto.Message.prototype.getAuthRequest = function () {
    return /** @type{?proto.AuthRequest} */ (
        jspb.Message.getWrapperField(this, Connection_pb.AuthRequest, 11));
};


/**
 * @param {?proto.AuthRequest|undefined} value
 * @return {!proto.Message} returns this
 */
proto.Message.prototype.setAuthRequest = function (value) {
    return jspb.Message.setOneofWrapperField(this, 11, proto.Message.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Message} returns this
 */
proto.Message.prototype.clearAuthRequest = function () {
    return this.setAuthRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Message.prototype.hasAuthRequest = function () {
    return jspb.Message.getField(this, 11) != null;
};


/**
 * optional AuthAck auth_ack = 12;
 * @return {?proto.AuthAck}
 */
proto.Message.prototype.getAuthAck = function () {
    return /** @type{?proto.AuthAck} */ (
        jspb.Message.getWrapperField(this, Connection_pb.AuthAck, 12));
};


/**
 * @param {?proto.AuthAck|undefined} value
 * @return {!proto.Message} returns this
 */
proto.Message.prototype.setAuthAck = function (value) {
    return jspb.Message.setOneofWrapperField(this, 12, proto.Message.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Message} returns this
 */
proto.Message.prototype.clearAuthAck = function () {
    return this.setAuthAck(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Message.prototype.hasAuthAck = function () {
    return jspb.Message.getField(this, 12) != null;
};


/**
 * optional MsgRequest msg_request = 20;
 * @return {?proto.MsgRequest}
 */
proto.Message.prototype.getMsgRequest = function () {
    return /** @type{?proto.MsgRequest} */ (
        jspb.Message.getWrapperField(this, Msg_pb.MsgRequest, 20));
};


/**
 * @param {?proto.MsgRequest|undefined} value
 * @return {!proto.Message} returns this
 */
proto.Message.prototype.setMsgRequest = function (value) {
    return jspb.Message.setOneofWrapperField(this, 20, proto.Message.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Message} returns this
 */
proto.Message.prototype.clearMsgRequest = function () {
    return this.setMsgRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Message.prototype.hasMsgRequest = function () {
    return jspb.Message.getField(this, 20) != null;
};


goog.object.extend(exports, proto);
