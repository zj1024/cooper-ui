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
var ReactDOM = require('react-dom')
var classnames_1 = require('classnames')
var utils_1 = require('../utils')
var icon_1 = require('../icon')
require('./style.scss')
var setClass = utils_1.setPrefixClassName('coo-back-top')
var BackTop = function(props) {
  var className = props.className,
    children = props.children,
    _a = props.behavior,
    behavior = _a === void 0 ? 'smooth' : _a,
    _b = props.visibilityHeight,
    visibilityHeight = _b === void 0 ? 400 : _b,
    _c = props.animat,
    animat = _c === void 0 ? true : _c,
    leftProps = __rest(props, ['className', 'children', 'behavior', 'visibilityHeight', 'animat'])
  var _d = react_1.useState(false),
    visible = _d[0],
    setVisible = _d[1]
  var onBackTopClick = function() {
    window.scroll({
      left: 0,
      top: 0,
      behavior: behavior,
    })
  }
  // use throttle to improve performance
  var scrollListener = utils_1.throttle(function() {
    var scrollTop = document.documentElement.scrollTop
    ;+scrollTop > visibilityHeight ? setVisible(true) : setVisible(false)
  }, 100)
  react_1.useEffect(function() {
    window.addEventListener('scroll', scrollListener)
    return function() {
      window.removeEventListener('scroll', scrollListener)
    }
  }, [])
  return React.createElement(
    React.Fragment,
    null,
    ReactDOM.createPortal(
      React.createElement(
        'div',
        __assign(
          {
            className: classnames_1['default'](
              setClass(),
              visible && setClass('visible'),
              animat && setClass('animat'),
              className,
            ),
            onClick: onBackTopClick,
          },
          leftProps,
        ),
        children ? children : React.createElement(icon_1['default'], { name: 'back-top' }),
      ),
      document.body,
    ),
  )
}
exports['default'] = BackTop
