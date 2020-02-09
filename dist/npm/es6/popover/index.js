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
var transition_1 = require('../transition')
var utils_1 = require('../utils')
require('./style.scss')
var setClass = utils_1.setPrefixClassName('coo-popover')
var Popover = function(props) {
  var children = props.children,
    className = props.className,
    _a = props.placement,
    placement = _a === void 0 ? 'top' : _a,
    content = props.content,
    _b = props.trigger,
    trigger = _b === void 0 ? 'hover' : _b,
    leftProps = __rest(props, ['children', 'className', 'placement', 'content', 'trigger'])
  var _c = react_1.useState(false),
    visible = _c[0],
    setVisible = _c[1]
  var handleToggleTooltip = function(isShow) {
    setTimeout(function() {
      setVisible(isShow)
    }, 150)
  }
  if (trigger === 'click' || trigger === 'contextMenu') {
    react_1.useEffect(function() {
      var close = function() {
        return handleToggleTooltip(false)
      }
      window.addEventListener('click', close, false)
      return function() {
        return window.removeEventListener('click', close)
      }
    }, [])
  }
  var stopClose = function(needClose, e) {
    if (!needClose) {
      e && e.stopPropagation()
    }
  }
  var onPopoverClick = function(e) {
    stopClose(false, e)
    handleToggleTooltip(true)
  }
  var onPopoverContextMenu = function(e) {
    e && e.preventDefault()
    handleToggleTooltip(true)
  }
  // 在hover事件中，不需要主动触发关闭，clickContentShouldClose对hover事件不作处理
  var onTrigger = {
    // hover trigger
    onMouseEnter:
      trigger === 'hover'
        ? function() {
            return handleToggleTooltip(true)
          }
        : undefined,
    onMouseLeave:
      trigger === 'hover'
        ? function() {
            return handleToggleTooltip(false)
          }
        : undefined,
    onClick: trigger === 'click' ? onPopoverClick : undefined,
    onContextMenu: trigger === 'contextMenu' ? onPopoverContextMenu : undefined,
  }
  var contentOnTrigger = {
    onClick: 'contextMenu'
      ? function(e) {
          return stopClose(false, e)
        }
      : undefined,
  }
  return React.createElement(
    'div',
    __assign({ className: classnames_1['default'](setClass(), className) }, onTrigger, leftProps),
    React.createElement('div', { className: setClass('children') }, children),
    React.createElement(
      transition_1['default'],
      { visible: visible },
      React.createElement(
        'div',
        __assign(
          {
            className: classnames_1['default'](
              setClass('content'),
              setClass('content-' + placement),
            ),
          },
          contentOnTrigger,
        ),
        React.createElement('i', { className: classnames_1['default'](setClass('content-icon')) }),
        content,
      ),
    ),
  )
}
exports['default'] = Popover
