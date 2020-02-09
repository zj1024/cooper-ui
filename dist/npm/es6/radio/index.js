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
var __spreadArrays =
  (this && this.__spreadArrays) ||
  function() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
      for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) r[k] = a[j]
    return r
  }
exports.__esModule = true
var React = require('react')
var react_1 = require('react')
var classnames_1 = require('classnames')
var utils_1 = require('../utils')
require('./style.scss')
var setClass = utils_1.setPrefixClassName('coo-radio')
var Radio = function(props) {
  var className = props.className,
    options = props.options,
    name = props.name,
    onChange = props.onChange,
    defaultValue = props.defaultValue,
    _a = props.radioStyle,
    radioStyle = _a === void 0 ? {} : _a,
    _b = props.mode,
    mode = _b === void 0 ? 'horizontal' : _b,
    leftProps = __rest(props, [
      'className',
      'options',
      'name',
      'onChange',
      'defaultValue',
      'radioStyle',
      'mode',
    ])
  var _c = react_1.useState(__spreadArrays(options)),
    _options = _c[0],
    _setOptions = _c[1]
  // 如果用户传入数组的checked为true超过两个发出警告
  react_1.useEffect(function() {
    var checkOptions = _options.map(function(d) {
      return d.checked === true
    })
    if (
      checkOptions.filter(function(d) {
        return d === true
      }).length > 1
    ) {
      console.warn(
        "Radio props options have more than one 'checked' props, which could result in an error, please only have one checked = true in options",
      )
    }
  }, [])
  react_1.useEffect(function() {
    _setOptions(
      _options.map(function(d) {
        // 容错处理
        if (d.disabled === undefined) {
          d.disabled = false
        }
        if (d.checked === undefined) {
          d.checked = false
        }
        // defaultValue 传入的值可能和options的值相同
        if (utils_1.stringEqual(d.value, defaultValue)) {
          console.warn(
            'Detected defaultValue datatype maybe incorrect. options have a value ' +
              typeof d.value +
              ': ' +
              d.value +
              ', defaultValue = ' +
              typeof defaultValue +
              ': ' +
              defaultValue,
          )
        }
        if (d.value === defaultValue) {
          d.checked = true
        }
        return d
      }),
    )
  }, [])
  var _onChange = function(e, radio) {
    // const index = _options.findIndex(d => d === radio)
    _setOptions(
      _options.map(function(d) {
        d.checked = d === radio
        return d
      }),
    )
    onChange(e)
  }
  return React.createElement(
    'div',
    __assign(
      {
        className: classnames_1['default'](
          setClass(),
          mode === 'vertical' ? setClass('vertical') : setClass('horizontal'),
          className,
        ),
      },
      leftProps,
    ),
    _options.map(function(radio, index) {
      var trulyChecked = radio.disabled === false && radio.checked
      return (
        radio.checked !== undefined &&
        React.createElement(
          'label',
          {
            className: classnames_1['default'](
              setClass('label'),
              trulyChecked && setClass('label-active'),
              utils_1.stringEqual(index, options.length - 1) && setClass('label-last'),
              radio.disabled && setClass('label-disabled'),
            ),
            key: index,
            style: radioStyle,
          },
          React.createElement('span', { className: setClass('inner') }),
          React.createElement('input', {
            className: classnames_1['default'](setClass('input')),
            onChange: function(e) {
              return _onChange(e, radio)
            },
            type: 'radio',
            name: name,
            value: radio.value,
            checked: trulyChecked,
            disabled: radio.disabled,
          }),
          React.createElement('span', { className: setClass('label-text') }, radio.label),
        )
      )
    }),
  )
}
exports['default'] = Radio
