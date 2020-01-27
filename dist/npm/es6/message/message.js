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
var icon_1 = require('../icon')
var utils_1 = require('../utils')
require('./style.scss')
var setClass = utils_1.setPrefixClassName('coo-message')
var MessageComponent = function(props) {
  var message = props.message,
    _a = props.type,
    type = _a === void 0 ? 'info' : _a,
    _b = props.showClose,
    showClose = _b === void 0 ? false : _b,
    _c = props.placement,
    placement = _c === void 0 ? 'top' : _c,
    _d = props.duration,
    duration = _d === void 0 ? 3000 : _d,
    _onShowClose = props._onShowClose,
    leftProps = __rest(
      props,
      // 用户没有指定showClose，默认duration之后关闭
      ['message', 'type', 'showClose', 'placement', 'duration', '_onShowClose'],
    )
  // 用户没有指定showClose，默认duration之后关闭
  if (duration !== 0) {
    setTimeout(function() {
      _onShowClose()
    }, duration)
  }
  return React.createElement(
    'div',
    __assign(
      {
        className: classnames_1['default'](
          setClass(),
          setClass(type),
          placement === 'top' && setClass('bottom'),
        ),
      },
      leftProps,
    ),
    React.createElement(icon_1['default'], { name: type, className: setClass('icon') }),
    React.createElement('div', { className: setClass('content') }, message),
    showClose &&
      React.createElement(icon_1['default'], {
        onClick: function() {
          return _onShowClose()
        },
        className: setClass('close-icon'),
        name: 'close',
      }),
  )
}
exports['default'] = MessageComponent
