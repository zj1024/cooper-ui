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
var collapse_item_1 = require('./collapse-item')
require('./style.scss')
var setClass = utils_1.setPrefixClassName('coo-collapse')
var Collapse = function(props) {
  var children = props.children,
    className = props.className,
    accordion = props.accordion,
    value = props.value,
    leftProps = __rest(
      props,
      // initialize
      /**
       * collapse initialize the expanded item
       * @accordion {boolean} if true, value's type is number, else is number[]
       */
      ['children', 'className', 'accordion', 'value'],
    )
  // initialize
  /**
   * collapse initialize the expanded item
   * @accordion {boolean} if true, value's type is number, else is number[]
   */
  var activeIndex = accordion ? value || -1 : value || []
  var initActiveItem = []
  // if accordion mode
  if (utils_1.isArray(activeIndex)) {
    var mapChildren = utils_1.isArray(children) ? children : [children]
    for (var i = 0; i < mapChildren.length; i++) {
      initActiveItem.push({ visible: activeIndex.indexOf(i) > -1 })
    }
  }
  // initialize done
  // set active by accordion value
  var _a = react_1.useState(initActiveItem),
    activeItem = _a[0],
    setActiveItem = _a[1]
  var _b = react_1.useState({ name: activeIndex, visible: true }),
    accordActiveItem = _b[0],
    setAccordActiveItem = _b[1]
  /**
   * onContentClick collapse item click function, control expanded item
   * @param {string} name item name, unique sign
   * @param {boolean} visible item expanded state
   */
  var onContentClick = function(name, visible) {
    if (accordion) {
      setAccordActiveItem({ name: +name, visible: !visible })
    } else {
      var changeActiveItem = activeItem.map(function(d, i) {
        return +name === i ? { visible: !visible } : d
      })
      setActiveItem(changeActiveItem)
    }
  }
  /**
   * child's expanded state, when activeItem or accordActiveItem changed, it will rerender to get
   * @param {number} index
   */
  var getContentVisible = function(index) {
    return accordion
      ? accordActiveItem.name === index && accordActiveItem.visible === true
      : (activeItem[index] && activeItem[index].visible) || false
  }
  return React.createElement(
    'div',
    __assign({ className: classnames_1['default'](setClass(), className) }, leftProps),
    React.Children.map(children, function(child, index) {
      return React.cloneElement(child, {
        name: index.toString(),
        key: index,
        contentvisible: getContentVisible(index),
        onClick: onContentClick,
      })
    }),
  )
}
Collapse.Item = collapse_item_1['default']
exports['default'] = Collapse
