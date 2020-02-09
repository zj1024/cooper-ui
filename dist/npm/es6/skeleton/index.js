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
require('./style.scss')
var setClass = utils_1.setPrefixClassName('coo-skeleton')
var Skeleton = function(props) {
  var children = props.children,
    className = props.className,
    loading = props.loading,
    _a = props.row,
    row = _a === void 0 ? 4 : _a,
    _b = props.avatar,
    avatar = _b === void 0 ? false : _b,
    _c = props.avatarShape,
    avatarShape = _c === void 0 ? 'round' : _c,
    _e = props.avatarSize,
    avatarSize = _e === void 0 ? '32px' : _e,
    _f = props.title,
    title = _f === void 0 ? true : _f,
    _g = props.animat,
    animat = _g === void 0 ? true : _g,
    leftProps = __rest(props, [
      'children',
      'className',
      'loading',
      'row',
      'avatar',
      'avatarShape',
      'avatarSize',
      'title',
      'animat',
    ])
  var animatClassName = animat ? setClass('animat') : null
  return React.createElement(
    React.Fragment,
    null,
    loading
      ? React.createElement(
          'div',
          __assign(
            {
              className: classnames_1['default'](
                setClass(),
                className,
                avatar && setClass('has-avatar'),
              ),
            },
            leftProps,
          ),
          (avatar || title) &&
            React.createElement(
              'div',
              { className: classnames_1['default'](setClass('avatar-wrapper'), animatClassName) },
              avatar &&
                React.createElement('div', {
                  className: setClass('avatar'),
                  style: {
                    borderRadius: avatarShape === 'round' ? '50%' : 'none',
                    width: avatarSize,
                    height: avatarSize,
                  },
                }),
              title && React.createElement('div', { className: setClass('title') }),
            ),
          row === 1
            ? React.createElement('div', {
                className: classnames_1['default'](setClass('row-one'), animatClassName),
              })
            : Array(row)
                .fill(1)
                .map(function(_d, i) {
                  return React.createElement('div', {
                    key: i,
                    className: classnames_1['default'](setClass('row'), animatClassName),
                  })
                }),
        )
      : React.createElement(React.Fragment, null, children),
  )
}
exports['default'] = Skeleton
