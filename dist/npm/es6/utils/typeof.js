'use strict'
exports.__esModule = true
exports.isString = function(value) {
  return Object.prototype.toString.call(value) === '[object String]'
}
exports.isNull = function(value) {
  return Object.prototype.toString.call(value) === '[object Null]'
}
exports.isUndefined = function(value) {
  return Object.prototype.toString.call(value) === '[object Undefined]'
}
exports.isBoolean = function(value) {
  return Object.prototype.toString.call(value) === '[object Boolean]'
}
exports.isNumber = function(value) {
  return Object.prototype.toString.call(value) === '[object Number]' && !Object.is(value, NaN)
}
exports.isArray = function(value) {
  return Object.prototype.toString.call(value) === '[object Array]'
}
