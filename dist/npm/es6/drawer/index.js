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
var utils_1 = require('../utils')
require('./style.scss')
var setClass = utils_1.setPrefixClassName('coo-drawer')
var Drawer = function(props) {
  var children = props.children,
    visible = props.visible,
    _a = props.mask,
    mask = _a === void 0 ? true : _a,
    _b = props.maskClosable,
    maskClosable = _b === void 0 ? true : _b,
    _c = props.destroyOnClose,
    destroyOnClose = _c === void 0 ? false : _c,
    _d = props.direction,
    direction = _d === void 0 ? 'left' : _d,
    _e = props.contentBackground,
    contentBackground = _e === void 0 ? '#fff' : _e,
    _f = props.zIndex,
    zIndex = _f === void 0 ? 1001 : _f,
    _g = props.onCancel,
    onCancel = _g === void 0 ? function() {} : _g,
    leftProps = __rest(props, [
      'children',
      'visible',
      'mask',
      'maskClosable',
      'destroyOnClose',
      'direction',
      'contentBackground',
      'zIndex',
      'onCancel',
    ])
  var initStyle = {
    left: {
      transform: 'translate3d(-100%, 0, 0)',
    },
    right: { transform: 'translate3d(100%, 0, 0)' },
    top: { transform: 'translate3d(0, -100%, 0)' },
    bottom: { transform: 'translate3d(0, 100%, 0)' },
  }
  var _h = react_1.useState(__assign({ display: 'none' }, initStyle[direction])),
    drawerStyle = _h[0],
    setDrawerStyle = _h[1]
  var _j = react_1.useState({ display: 'none', opacity: 0 }),
    drawerMaskStyle = _j[0],
    setDrawerMaskStyle = _j[1]
  var openDrawer = function() {
    setDrawerMaskStyle({ display: 'block', opacity: 0 })
    setDrawerStyle(__assign({ display: 'inline-block' }, initStyle[direction]))
    setTimeout(function() {
      setDrawerMaskStyle({ display: 'block', opacity: 1 })
      setDrawerStyle({ display: 'inline-block', transform: 'translate3d(0, 0, 0)' })
    }, 20)
  }
  var closeDrawer = function() {
    setDrawerMaskStyle({ display: 'block', opacity: 0 })
    setDrawerStyle(__assign({ display: 'inline-block' }, initStyle[direction]))
    setTimeout(function() {
      setDrawerStyle(__assign({ display: 'none' }, initStyle[direction]))
      setDrawerMaskStyle({ display: 'none', opacity: 0 })
    }, 300)
  }
  react_1.useEffect(
    function() {
      visible ? openDrawer() : closeDrawer()
    },
    [visible],
  )
  var onPrevent = function(e) {
    e.stopPropagation()
  }
  var onMaskClick = function() {
    onCancel()
  }
  return React.createElement(
    'div',
    __assign(
      {
        onClick: onMaskClick,
        className: classnames_1['default'](mask && setClass('mask')),
        style: __assign({ zIndex: zIndex }, drawerMaskStyle),
      },
      leftProps,
    ),
    React.createElement(
      'div',
      {
        onClick: onPrevent,
        className: classnames_1['default'](setClass('content'), setClass('content-' + direction)),
        style: __assign({ backgroundColor: contentBackground }, drawerStyle),
      },
      children,
    ),
  )
}
exports['default'] = Drawer
