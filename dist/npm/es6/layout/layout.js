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
var setClass = utils_1.setPrefixClassName('coo-layout')
var Layout = function(props) {
  var _a
  var children = props.children,
    className = props.className,
    leftProps = __rest(
      props,
      // judge children has aside to add className
      ['children', 'className'],
    )
  // judge children has aside to add className
  var childrenType = React.Children.map(children, function(child) {
    return child.type
  })
  var hasAside =
    (_a = childrenType) === null || _a === void 0
      ? void 0
      : _a.some(function(type) {
          return type === Layout.Aside
        })
  return React.createElement(
    'section',
    __assign(
      {
        className: classnames_1['default'](
          setClass(),
          className,
          hasAside ? setClass('has-aside') : '',
        ),
      },
      leftProps,
    ),
    children,
  )
}
/**
 * @function api
 * Declare that the direct reference to the function is invalid
 */
Layout.Header = function() {}
Layout.Content = function() {}
Layout.Footer = function() {}
Layout.Aside = function() {}
exports['default'] = Layout
