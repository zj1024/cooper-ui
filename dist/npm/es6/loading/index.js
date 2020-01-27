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
var transition_1 = require('../transition')
require('./style.scss')
var setClass = utils_1.setPrefixClassName('coo-loading')
var Loading = function(props) {
  var children = props.children,
    className = props.className,
    visible = props.visible,
    color = props.color,
    _a = props.type,
    type = _a === void 0 ? 'light' : _a,
    leftProps = __rest(props, ['children', 'className', 'visible', 'color', 'type'])
  return React.createElement(
    'div',
    __assign({ className: classnames_1['default'](setClass('container'), className) }, leftProps),
    children,
    React.createElement(
      transition_1['default'],
      { visible: visible },
      React.createElement(
        'div',
        {
          className: classnames_1['default'](
            setClass('mask'),
            type === 'dark' ? setClass('mask-dark') : null,
          ),
        },
        React.createElement(
          'div',
          { className: setClass('wrapper') },
          React.createElement(icon_1['default'], {
            className: setClass(''),
            style: { color: color },
            name: type === 'dark' ? 'loading-spot' : 'loading-rotate',
          }),
        ),
      ),
    ),
  )
}
exports['default'] = Loading
