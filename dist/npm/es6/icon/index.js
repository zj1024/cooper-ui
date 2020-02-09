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
require('./style.scss')
var Icon = function(props) {
  var name = props.name,
    className = props.className,
    component = props.component,
    leftProps = __rest(props, ['name', 'className', 'component'])
  if (!name && !component) {
    console.warn('Did you forget to assign a value to the name or component attribute?')
    return null
  }
  var iconString = ''
  if (name) {
    iconString = require('../assets/icons/' + name + '.svg')['default']
  }
  if (component) {
    iconString = component
  }
  return React.createElement(
    'span',
    __assign(
      {
        dangerouslySetInnerHTML: {
          __html: iconString,
        },
        className: classnames_1['default']('coo-icon', className),
      },
      leftProps,
    ),
  )
}
exports['default'] = Icon
