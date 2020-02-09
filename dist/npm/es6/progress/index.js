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
var icon_1 = require('../icon')
require('./style.scss')
var setClass = utils_1.setPrefixClassName('coo-progress')
var Progress = function(props) {
  var className = props.className,
    percent = props.percent,
    status = props.status,
    color = props.color,
    leftProps = __rest(props, ['className', 'percent', 'status', 'color'])
  return React.createElement(
    'div',
    { className: setClass('wrapper') },
    React.createElement(
      'div',
      __assign({ className: classnames_1['default'](setClass(), className) }, leftProps),
      percent !== undefined
        ? React.createElement('div', {
            className: classnames_1['default'](
              setClass('percent-bar'),
              (percent === 100 || status === 'success') && setClass('success'),
              status === 'error' && setClass('error'),
            ),
            style: { width: percent + '%', background: color },
          })
        : React.createElement('div', {
            className: classnames_1['default'](
              setClass('bar'),
              status === 'success' && setClass('success'),
              status === 'error' && setClass('error'),
            ),
            style: { background: color },
          }),
    ),
    (percent !== undefined || status === 'error' || status === 'success') &&
      React.createElement(icon_1['default'], {
        className: classnames_1['default'](
          setClass('icon'),
          status === 'error' && setClass('icon-error'),
          (percent === 100 || status === 'success') && setClass('icon-success'),
        ),
        name: status === 'error' ? 'error' : 'success',
      }),
  )
}
exports['default'] = Progress
