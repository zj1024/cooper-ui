'use strict'
var __assign =
  (this && this.__assign) ||
  function() {
    __assign =
      Object.assign ||
      function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i]
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p]
        }
        return t
      }
    return __assign.apply(this, arguments)
  }
var __rest =
  (this && this.__rest) ||
  function(s, e) {
    var t = {}
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p]
    if (s != null && typeof Object.getOwnPropertySymbols === 'function')
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
          t[p[i]] = s[p[i]]
      }
    return t
  }
exports.__esModule = true
var React = require('react')
var classnames_1 = require('classnames')
var utils_1 = require('../utils')
require('./style.scss')
var setClass = utils_1.setPrefixClassName('coo-text-link')
var TextLink = function(props) {
  var children = props.children,
    className = props.className,
    _a = props.type,
    type = _a === void 0 ? 'default' : _a,
    _b = props.underline,
    underline = _b === void 0 ? true : _b,
    _c = props.disabled,
    disabled = _c === void 0 ? false : _c,
    leftProps = __rest(props, ['children', 'className', 'type', 'underline', 'disabled'])
  return React.createElement(
    'a',
    __assign(
      {
        className: classnames_1['default'](
          setClass(),
          setClass(type),
          underline && setClass('underline'),
          className,
          disabled && setClass(type + '-disabled'),
        ),
      },
      leftProps,
    ),
    children,
  )
}
exports['default'] = TextLink
