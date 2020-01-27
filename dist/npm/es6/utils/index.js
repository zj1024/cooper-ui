'use strict'
exports.__esModule = true
var typeof_1 = require('./typeof')
exports.isString = typeof_1.isString
exports.isNull = typeof_1.isNull
exports.isUndefined = typeof_1.isUndefined
exports.isBoolean = typeof_1.isBoolean
exports.isNumber = typeof_1.isNumber
exports.isArray = typeof_1.isArray
var getclass_1 = require('./getclass')
exports.setPrefixClassName = getclass_1['default']
var stringEqual_1 = require('./stringEqual')
exports.stringEqual = stringEqual_1['default']
var throttle_1 = require('./throttle')
exports.throttle = throttle_1['default']
