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
var react_1 = require('react')
var classnames_1 = require('classnames')
var transition_1 = require('../transition')
var utils_1 = require('../utils')
require('./style.scss')
var setClass = utils_1.setPrefixClassName('coo-tooltip')
var Tooltip = function(props) {
  var children = props.children,
    className = props.className,
    content = props.content,
    _a = props.placement,
    placement = _a === void 0 ? 'top' : _a,
    leftProps = __rest(props, ['children', 'className', 'content', 'placement'])
  var _b = react_1.useState(false),
    visible = _b[0],
    setVisible = _b[1]
  var handleToggleTooltip = function(isShow) {
    setVisible(isShow)
  }
  return React.createElement(
    'div',
    __assign({ className: classnames_1['default'](setClass(), className) }, leftProps, {
      onMouseEnter: function() {
        return handleToggleTooltip(true)
      },
      onMouseLeave: function() {
        return handleToggleTooltip(false)
      },
    }),
    React.createElement('div', { className: setClass('children') }, children),
    React.createElement(
      transition_1['default'],
      { visible: visible },
      React.createElement(
        'div',
        {
          className: classnames_1['default'](setClass('content'), setClass('content-' + placement)),
        },
        React.createElement('i', { className: classnames_1['default'](setClass('content-icon')) }),
        React.createElement('span', null, content),
      ),
    ),
  )
}
exports['default'] = Tooltip
