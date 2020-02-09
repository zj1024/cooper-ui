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
var setClass = utils_1.setPrefixClassName('coo-image')
var Image = function(props) {
  var className = props.className,
    style = props.style,
    fit = props.fit,
    src = props.src,
    error = props.error,
    fallbackSrc = props.fallbackSrc,
    onError = props.onError,
    leftProps = __rest(props, [
      'className',
      'style',
      'fit',
      'src',
      'error',
      'fallbackSrc',
      'onError',
    ])
  var _a = react_1.useState(false),
    isError = _a[0],
    setIsError = _a[1]
  var onImageError = function(e) {
    setIsError(true)
    onError && onError(e)
  }
  var Wrapper = function(wrapperProps) {
    var className = wrapperProps.className,
      style = wrapperProps.style,
      children = wrapperProps.children
    return React.createElement(
      'div',
      { className: classnames_1['default'](setClass(), className), style: style },
      children,
    )
  }
  var Img = function(imgProps) {
    var src = imgProps.src,
      fit = imgProps.fit,
      onImageError = imgProps.onImageError,
      imgLeftProps = imgProps.imgLeftProps
    return React.createElement(
      'img',
      __assign(
        {
          src: src,
          className: setClass('inner'),
          style: { objectFit: fit },
          onError: onImageError,
        },
        imgLeftProps,
      ),
    )
  }
  if (isError) {
    if (fallbackSrc) {
      return React.createElement(
        Wrapper,
        { className: className, style: style },
        React.createElement(
          Img,
          __assign({ src: fallbackSrc, onImageError: null, fit: fit }, leftProps),
        ),
      )
    } else {
      if (error) {
        return React.createElement(Wrapper, { className: className, style: style }, error)
      } else {
        return React.createElement(
          Wrapper,
          { className: className, style: style },
          React.createElement(
            'div',
            { className: setClass('error') },
            React.createElement(icon_1['default'], {
              className: setClass('error-icon'),
              name: 'img-error',
            }),
          ),
        )
      }
    }
  }
  return React.createElement(
    Wrapper,
    { className: className, style: style },
    React.createElement(
      Img,
      __assign({ src: src, onImageError: onImageError, fit: fit }, leftProps),
    ),
  )
}
exports['default'] = Image
