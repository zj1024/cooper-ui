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
require('./style.scss')
var CollapseTransition = function(props) {
  var _a = props.name,
    name = _a === void 0 ? 'fade-css-transition' : _a,
    children = props.children,
    visible = props.visible,
    _b = props.duration,
    duration = _b === void 0 ? 300 : _b,
    className = props.className,
    leftProps = __rest(props, ['name', 'children', 'visible', 'duration', 'className'])
  var transitionRef = react_1.useRef(null)
  var animat = duration > 0
  var getClassNames = function(mode) {
    return classnames_1['default']('coo-transiton', className, name + '-' + mode)
  }
  if (!animat && visible) {
    Promise.resolve().then(function() {
      transitionRef.current.style.display = 'block'
    })
  }
  if (!animat && !visible) {
    Promise.resolve().then(function() {
      transitionRef.current.style.display = 'none'
    })
  }
  // 进场动画
  if (animat && visible) {
    Promise.resolve().then(function() {
      transitionRef.current.style.display = 'block'
    })
    setTimeout(function() {
      transitionRef.current.setAttribute('class', getClassNames('enter'))
    }, 20)
  }
  // 出场动画
  if (animat && !visible) {
    Promise.resolve().then(function() {
      transitionRef.current.setAttribute('class', getClassNames('exit'))
    })
    setTimeout(function() {
      transitionRef.current.style.display = 'none'
    }, duration - 20)
  }
  return React.createElement(
    'div',
    __assign(
      {
        ref: transitionRef,
        className: className,
        style: { transition: animat ? 'all ' + duration + 'ms' : '' },
      },
      leftProps,
    ),
    children,
  )
}
exports['default'] = CollapseTransition
