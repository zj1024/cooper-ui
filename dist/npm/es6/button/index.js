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
var icon_1 = require('../icon')
require('./style.scss')
var setClass = utils_1.setPrefixClassName('coo-button')
var Button = function(_a) {
  var children = _a.children,
    className = _a.className,
    _b = _a.type,
    type = _b === void 0 ? 'default' : _b,
    _c = _a.plain,
    plain = _c === void 0 ? false : _c,
    _d = _a.round,
    round = _d === void 0 ? false : _d,
    _e = _a.circle,
    circle = _e === void 0 ? false : _e,
    _f = _a.loading,
    loading = _f === void 0 ? false : _f,
    _g = _a.disabled,
    disabled = _g === void 0 ? false : _g,
    _h = _a.shadow,
    shadow = _h === void 0 ? false : _h,
    props = __rest(_a, [
      'children',
      'className',
      'type',
      'plain',
      'round',
      'circle',
      'loading',
      'disabled',
      'shadow',
    ])
  return React.createElement(
    'button',
    __assign(
      {
        className: classnames_1['default'](
          setClass(),
          setClass(type ? type : 'default'),
          round && setClass('is-round'),
          circle && setClass('is-circle'),
          plain && setClass('is-plain'),
          shadow && setClass('has-shadow'),
          className,
        ),
        disabled: disabled,
      },
      props,
    ),
    loading
      ? React.createElement(
          'div',
          { className: setClass('loading-wrapper') },
          React.createElement(icon_1['default'], {
            name: 'loading',
            className: setClass('loading'),
          }),
          children,
        )
      : // must have fragment, otherwise, objects are not valid as a React child
        React.createElement(React.Fragment, null, children),
  )
}
exports['default'] = Button
