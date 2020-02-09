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
var icon_1 = require('../icon')
var collapse_1 = require('../collapse')
var transition_1 = require('../transition')
require('./style.scss')
var setClass = utils_1.setPrefixClassName('coo-menu-submenu')
var SubMenu = function(props) {
  var children = props.children,
    className = props.className,
    _onchange = props._onchange,
    title = props.title,
    index = props.index,
    _a = props._trigger,
    _trigger = _a === void 0 ? 'hover' : _a,
    _isActive = props._isActive,
    mode = props.mode,
    leftProps = __rest(props, [
      'children',
      'className',
      '_onchange',
      'title',
      'index',
      '_trigger',
      '_isActive',
      'mode',
    ])
  var _b = react_1.useState(false),
    isOpen = _b[0],
    setIsOpen = _b[1]
  var onChange = function(openStatus) {
    setIsOpen(openStatus)
  }
  if (mode === 'vertical') {
    return React.createElement(
      collapse_1['default'],
      { className: setClass(), accordion: false },
      React.createElement(
        collapse_1['default'].Item,
        { title: title, iconPlacement: 'right' },
        children,
      ),
    )
  }
  return React.createElement(
    'div',
    __assign(
      {},
      {
        onMouseEnter:
          _trigger === 'hover'
            ? function() {
                return onChange(true)
              }
            : function() {},
        onMouseLeave:
          _trigger === 'hover'
            ? function() {
                return onChange(false)
              }
            : function() {},
        onClick:
          _trigger === 'click'
            ? function() {
                return onChange(!isOpen)
              }
            : function() {},
      },
      { className: classnames_1['default'](setClass(''), className) },
      leftProps,
    ),
    React.createElement(
      'div',
      {
        className: classnames_1['default'](setClass('item'), _isActive && setClass('item-active')),
      },
      React.createElement('span', null, title),
      React.createElement(
        'span',
        null,
        React.createElement(icon_1['default'], {
          className: classnames_1['default'](isOpen && setClass('icon-open')),
          name: 'arrow-down',
        }),
      ),
    ),
    React.createElement(
      transition_1.CSSTransition,
      { duration: 100, visible: isOpen },
      React.createElement(
        'div',
        { className: classnames_1['default'](setClass('item-wrapper')) },
        React.Children.map(children, function(child) {
          return React.cloneElement(child, {
            _closesubmenu: function(params) {
              return setIsOpen(params)
            },
          })
        }),
      ),
    ),
  )
}
exports['default'] = SubMenu
