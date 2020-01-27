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
var setClass = utils_1.setPrefixClassName('coo-switch')
var Switch = function(props) {
  var className = props.className,
    checked = props.checked,
    _a = props.defaultChecked,
    defaultChecked = _a === void 0 ? false : _a,
    checkedChildren = props.checkedChildren,
    unCheckedChildren = props.unCheckedChildren,
    _b = props.size,
    size = _b === void 0 ? 'default' : _b,
    _c = props.loading,
    loading = _c === void 0 ? false : _c,
    _d = props.disabled,
    disabled = _d === void 0 ? false : _d,
    _e = props.onChange,
    onChange = _e === void 0 ? function() {} : _e,
    leftProps = __rest(props, [
      'className',
      'checked',
      'defaultChecked',
      'checkedChildren',
      'unCheckedChildren',
      'size',
      'loading',
      'disabled',
      'onChange',
    ])
  var _f = react_1.useState(defaultChecked ? defaultChecked : checked),
    status = _f[0],
    setStatus = _f[1]
  var onSwitchChange = function() {
    if (!disabled && checked === undefined) {
      setStatus(!status)
      onChange(!status)
    }
  }
  react_1.useEffect(
    function() {
      setStatus(checked)
      onChange(checked)
    },
    [checked],
  )
  return React.createElement(
    'div',
    __assign(
      {
        className: classnames_1['default'](
          setClass(),
          size === 'small' && setClass('small'),
          status && setClass('active'),
          disabled && setClass('disabled'),
          loading && setClass('loading'),
          className,
        ),
        onClick: onSwitchChange,
      },
      leftProps,
    ),
    status ? checkedChildren : unCheckedChildren,
    React.createElement(
      'div',
      { className: setClass('button') },
      loading &&
        React.createElement(icon_1['default'], {
          className: setClass('button-loading'),
          name: 'loading-spot',
        }),
    ),
  )
}
exports['default'] = Switch
