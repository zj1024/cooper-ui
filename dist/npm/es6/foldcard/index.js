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
require('./style.scss')
var setClass = utils_1.setPrefixClassName('coo-foldcard')
var Foldcard = function(props) {
  var foldRef = react_1.useRef(null)
  var _a = react_1.useState(false),
    visible = _a[0],
    setVisible = _a[1]
  // 获取高度，便于折叠 TODO: 麻烦，要想出更好的解决方案
  var _b = react_1.useState({}),
    foldHeight = _b[0],
    setFoldHeight = _b[1]
  react_1.useEffect(function() {
    if (Object.prototype.toString.call(foldRef.current) === '[object HTMLDivElement]') {
      var height = window.getComputedStyle(foldRef.current)['height']
      // setFoldHeight({ entered: { height } })
      setFoldHeight({ height: height })
    }
  }, [])
  var children = props.children,
    className = props.className,
    fold = props.fold,
    foldName = props.foldName,
    leftProps = __rest(props, ['children', 'className', 'fold', 'foldName'])
  return React.createElement(
    'section',
    __assign({ className: classnames_1['default'](setClass(), className) }, leftProps),
    React.createElement('div', { className: setClass('content') }, children),
    React.createElement(
      'footer',
      { className: setClass('footer') },
      React.createElement(
        'div',
        { className: setClass('footer-main') },
        React.createElement(
          'p',
          {
            className: setClass('footer-spread'),
            onClick: function() {
              return setVisible(!visible)
            },
          },
          React.createElement(icon_1['default'], {
            name: visible ? 'arrow-up' : 'arrow-down',
            className: setClass('footer-icon'),
          }),
          React.createElement('span', null, foldName ? foldName : '展开'),
        ),
      ),
    ),
    React.createElement(
      'div',
      {
        style: visible ? foldHeight : {},
        className: classnames_1['default'](setClass('card'), !visible && setClass('card-hidden')),
      },
      React.createElement('div', { ref: foldRef }, fold),
    ),
  )
}
exports['default'] = Foldcard
