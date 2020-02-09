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
var layout_1 = require('./layout')
require('./style.scss')
var setClass = utils_1.setPrefixClassName('coo-layout')
layout_1['default'].Header = function(props) {
  var children = props.children,
    className = props.className,
    leftProps = __rest(props, ['children', 'className'])
  return React.createElement(
    'header',
    __assign({ className: classnames_1['default'](setClass('header'), className) }, leftProps),
    children,
  )
}
layout_1['default'].Content = function(props) {
  var children = props.children,
    className = props.className,
    leftProps = __rest(props, ['children', 'className'])
  return React.createElement(
    'main',
    __assign({ className: classnames_1['default'](setClass('content'), className) }, leftProps),
    props.children,
  )
}
layout_1['default'].Footer = function(props) {
  var children = props.children,
    className = props.className,
    leftProps = __rest(props, ['children', 'className'])
  return React.createElement(
    'footer',
    __assign({ className: classnames_1['default'](setClass('footer'), className) }, leftProps),
    props.children,
  )
}
layout_1['default'].Aside = function(props) {
  var children = props.children,
    className = props.className,
    leftProps = __rest(props, ['children', 'className'])
  return React.createElement(
    'aside',
    __assign({ className: classnames_1['default'](setClass('aside'), className) }, leftProps),
    props.children,
  )
}
var Header = layout_1['default'].Header
exports.Header = Header
var Content = layout_1['default'].Content
exports.Content = Content
var Footer = layout_1['default'].Footer
exports.Footer = Footer
exports['default'] = layout_1['default']
