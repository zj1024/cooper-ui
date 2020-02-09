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
var setClass = utils_1.setPrefixClassName('coo-card')
var Card = function(props) {
  var children = props.children,
    className = props.className,
    header = props.header,
    _a = props.shadow,
    shadow = _a === void 0 ? 'always' : _a,
    leftProps = __rest(props, ['children', 'className', 'header', 'shadow'])
  return React.createElement(
    'div',
    __assign(
      {
        className: classnames_1['default'](
          setClass(),
          className,
          shadow === 'always' && setClass('has-shadow'),
          shadow === 'hover' && setClass('hover-shadow'),
        ),
      },
      leftProps,
    ),
    header && React.createElement('div', { className: setClass('header') }, header),
    React.createElement('div', { className: setClass('body') }, children),
  )
}
exports['default'] = Card
