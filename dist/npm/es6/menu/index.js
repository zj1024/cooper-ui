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
var menu_item_1 = require('./menu-item')
var submenu_1 = require('./submenu')
require('./style.scss')
var setClass = utils_1.setPrefixClassName('coo-menu')
var Menu = function(props) {
  var children = props.children,
    className = props.className,
    _a = props.mode,
    mode = _a === void 0 ? 'horizontal' : _a,
    _b = props.align,
    align = _b === void 0 ? 'left' : _b,
    activeIndex = props.activeIndex,
    _c = props.onSelect,
    onSelect = _c === void 0 ? function() {} : _c,
    _d = props.trigger,
    trigger = _d === void 0 ? 'hover' : _d,
    leftProps = __rest(props, [
      'children',
      'className',
      'mode',
      'align',
      'activeIndex',
      'onSelect',
      'trigger',
    ])
  var _e = react_1.useState(activeIndex),
    _activeIndex = _e[0],
    setActiveIndex = _e[1]
  var _onChangeItemActive = function(index) {
    onSelect(index)
    setActiveIndex(index)
  }
  var _deepJudgeIndex = function(element) {
    return React.Children.map(element, function(child) {
      if (child.type && child.type === submenu_1['default']) {
        var hasActiveIndex_1 = false
        // 判断当前的submenu子元素是否是active状态
        React.Children.forEach(child.props.children, function(child) {
          if (child.props.index === _activeIndex) {
            hasActiveIndex_1 = true
          }
        })
        return React.cloneElement(child, {
          children: _deepJudgeIndex(child.props.children),
          _trigger: trigger,
          _isActive: hasActiveIndex_1,
          mode: mode,
        })
      }
      if (child.type && child.type === menu_item_1['default']) {
        return React.cloneElement(child, {
          // 判断index
          className: _activeIndex === child.props.index ? setClass('item-active') : '',
          _onchange: _onChangeItemActive,
        })
      }
      return child
    })
  }
  return React.createElement(
    'div',
    __assign(
      {
        className: classnames_1['default'](
          setClass(),
          align === 'left' && setClass('left'),
          align === 'center' && setClass('center'),
          align === 'right' && setClass('right'),
          mode === 'vertical' && setClass('vertical'),
          className,
        ),
      },
      leftProps,
    ),
    children && _deepJudgeIndex(children),
  )
}
Menu.MenuItem = menu_item_1['default']
Menu.SubMenu = submenu_1['default']
exports['default'] = Menu
