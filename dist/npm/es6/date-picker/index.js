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
// import { useState } from 'react'
var classnames_1 = require('classnames')
var utils_1 = require('../utils')
require('./style.scss')
var setClass = utils_1.setPrefixClassName('coo-date-picker')
var DatePicker = function(props) {
  var children = props.children,
    className = props.className,
    leftProps = __rest(
      props,
      // const weeks = ['一', '二', '三', '四', '五', '六', '日']
      // const months = ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二']
      // const mode = useState<string>('')
      ['children', 'className'],
    )
  // const weeks = ['一', '二', '三', '四', '五', '六', '日']
  // const months = ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二']
  // const mode = useState<string>('')
  return React.createElement(
    'div',
    __assign({ className: classnames_1['default'](setClass(), className) }, leftProps),
    children,
    'date-picker',
  )
}
exports['default'] = DatePicker
