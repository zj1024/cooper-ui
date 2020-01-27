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
// import * as types from './types'
var icon_1 = require('../icon')
require('./style.scss')
var setClass = utils_1.setPrefixClassName('coo-result')
var Result = function(props) {
  var className = props.className,
    _a = props.status,
    status = _a === void 0 ? 'info' : _a,
    icon = props.icon,
    title = props.title,
    content = props.content,
    leftProps = __rest(props, ['className', 'status', 'icon', 'title', 'content'])
  console.log(icon)
  return React.createElement(
    'div',
    __assign({ className: classnames_1['default'](setClass(), className) }, leftProps),
    React.createElement(
      'div',
      { className: setClass('icon') },
      icon ? icon : React.createElement(icon_1['default'], { name: 'result-' + status }),
    ),
    title && React.createElement('div', { className: setClass('title') }, title),
    content && React.createElement('div', { className: setClass('content') }, content),
  )
}
exports['default'] = Result
