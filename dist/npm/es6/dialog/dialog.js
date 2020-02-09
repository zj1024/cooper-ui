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
var __awaiter =
  (this && this.__awaiter) ||
  function(thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function(resolve) {
            resolve(value)
          })
    }
    return new (P || (P = Promise))(function(resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value))
        } catch (e) {
          reject(e)
        }
      }
      function rejected(value) {
        try {
          step(generator['throw'](value))
        } catch (e) {
          reject(e)
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected)
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next())
    })
  }
var __generator =
  (this && this.__generator) ||
  function(thisArg, body) {
    var _ = {
        label: 0,
        sent: function() {
          if (t[0] & 1) throw t[1]
          return t[1]
        },
        trys: [],
        ops: [],
      },
      f,
      y,
      t,
      g
    return (
      (g = { next: verb(0), throw: verb(1), return: verb(2) }),
      typeof Symbol === 'function' &&
        (g[Symbol.iterator] = function() {
          return this
        }),
      g
    )
    function verb(n) {
      return function(v) {
        return step([n, v])
      }
    }
    function step(op) {
      if (f) throw new TypeError('Generator is already executing.')
      while (_)
        try {
          if (
            ((f = 1),
            y &&
              (t =
                op[0] & 2
                  ? y['return']
                  : op[0]
                  ? y['throw'] || ((t = y['return']) && t.call(y), 0)
                  : y.next) &&
              !(t = t.call(y, op[1])).done)
          )
            return t
          if (((y = 0), t)) op = [op[0] & 2, t.value]
          switch (op[0]) {
            case 0:
            case 1:
              t = op
              break
            case 4:
              _.label++
              return { value: op[1], done: false }
            case 5:
              _.label++
              y = op[1]
              op = [0]
              continue
            case 7:
              op = _.ops.pop()
              _.trys.pop()
              continue
            default:
              if (
                !((t = _.trys), (t = t.length > 0 && t[t.length - 1])) &&
                (op[0] === 6 || op[0] === 2)
              ) {
                _ = 0
                continue
              }
              if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                _.label = op[1]
                break
              }
              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1]
                t = op
                break
              }
              if (t && _.label < t[2]) {
                _.label = t[2]
                _.ops.push(op)
                break
              }
              if (t[2]) _.ops.pop()
              _.trys.pop()
              continue
          }
          op = body.call(thisArg, _)
        } catch (e) {
          op = [6, e]
          y = 0
        } finally {
          f = t = 0
        }
      if (op[0] & 5) throw op[1]
      return { value: op[0] ? op[1] : void 0, done: true }
    }
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
var ReactDOM = require('react-dom')
var classnames_1 = require('classnames')
var utils_1 = require('../utils')
var icon_1 = require('../icon')
var button_1 = require('../button')
require('./style.scss')
var setClass = utils_1.setPrefixClassName('coo-dialog')
var Dialog = function(props) {
  /**
   * @prop {object} style custom style
   */
  var _a = props.className,
    className = _a === void 0 ? '' : _a,
    children = props.children,
    _b = props.style,
    style = _b === void 0 ? {} : _b,
    _c = props.visible,
    visible = _c === void 0 ? false : _c,
    width = props.width,
    header = props.header,
    footer = props.footer,
    _d = props.okText,
    okText = _d === void 0 ? '确认' : _d,
    _e = props.cancelText,
    cancelText = _e === void 0 ? '取消' : _e,
    _f = props.cancelable,
    cancelable = _f === void 0 ? true : _f,
    _g = props.closable,
    closable = _g === void 0 ? true : _g,
    _h = props.animat,
    animat = _h === void 0 ? true : _h,
    _j = props.mask,
    mask = _j === void 0 ? true : _j,
    _k = props.maskClosable,
    maskClosable = _k === void 0 ? true : _k,
    _l = props.lockScroll,
    lockScroll = _l === void 0 ? true : _l,
    _m = props.onOk,
    onOk = _m === void 0 ? function() {} : _m,
    _o = props.onCancel,
    onCancel = _o === void 0 ? function() {} : _o,
    leftProps = __rest(
      props,
      // create style only include 'display' and 'opacity' to animat
      [
        'className',
        'children',
        'style',
        'visible',
        'width',
        'header',
        'footer',
        'okText',
        'cancelText',
        'cancelable',
        'closable',
        'animat',
        'mask',
        'maskClosable',
        'lockScroll',
        'onOk',
        'onCancel',
      ],
    )
  // create style only include 'display' and 'opacity' to animat
  var createStyle = function(display, opacity) {
    if (display === void 0) {
      display = 'none'
    }
    if (opacity === void 0) {
      opacity = 0
    }
    return {
      display: display,
      opacity: opacity,
    }
  }
  // animat style include 'display' and 'opacity'
  var _p = react_1.useState(createStyle('none', 0)),
    animation = _p[0],
    setAnimation = _p[1]
  // click mask close dialog
  var maskOnClick = function() {
    return __awaiter(void 0, void 0, void 0, function() {
      return __generator(this, function(_a) {
        switch (_a.label) {
          case 0:
            if (!maskClosable) return [3 /*break*/, 2]
            return [4 /*yield*/, closeAnimat()]
          case 1:
            _a.sent()
            onCancel()
            _a.label = 2
          case 2:
            return [2 /*return*/]
        }
      })
    })
  }
  // private funtion to open disalog with animat or not
  var openAnimat = function() {
    if (animat) {
      setAnimation(createStyle('block', 0))
      setTimeout(function() {
        setAnimation(createStyle('block', 1))
      }, 20)
    } else {
      setAnimation(createStyle('block', 1))
    }
  }
  // private funtion to close disalog with animat or not
  var closeAnimat = function() {
    return new Promise(function(resolve) {
      if (animat) {
        setAnimation(createStyle('block', 0))
        setTimeout(function() {
          setAnimation(createStyle('none', 0))
          resolve()
        }, 300)
      } else {
        setAnimation(createStyle('none', 0))
        resolve()
      }
    })
  }
  // The user clicks ok or cancel the callback
  var onDialogCancel = function() {
    return __awaiter(void 0, void 0, void 0, function() {
      return __generator(this, function(_a) {
        switch (_a.label) {
          case 0:
            return [4 /*yield*/, closeAnimat()]
          case 1:
            _a.sent()
            onCancel()
            return [2 /*return*/]
        }
      })
    })
  }
  var onDialogOk = function() {
    return __awaiter(void 0, void 0, void 0, function() {
      return __generator(this, function(_a) {
        switch (_a.label) {
          case 0:
            if (!onOk) return [3 /*break*/, 1]
            onOk(function() {
              return __awaiter(void 0, void 0, void 0, function() {
                return __generator(this, function(_a) {
                  switch (_a.label) {
                    case 0:
                      return [4 /*yield*/, closeAnimat()]
                    case 1:
                      _a.sent()
                      onCancel()
                      return [2 /*return*/]
                  }
                })
              })
            })
            return [3 /*break*/, 3]
          case 1:
            return [4 /*yield*/, closeAnimat()]
          case 2:
            _a.sent()
            onCancel()
            _a.label = 3
          case 3:
            return [2 /*return*/]
        }
      })
    })
  }
  /**
   * lockScroll
   * originBodyOverflow record user custom body's overflow
   * when dialog close, body's overflow equal user custom value
   */
  var originBodyOverflow = ''
  react_1.useEffect(
    function() {
      if (visible) {
        openAnimat()
      }
      if (visible && lockScroll === true) {
        var bodyOverflow = window.getComputedStyle(document.body, null)['overflow']
        if (bodyOverflow !== 'hidden') {
          originBodyOverflow = bodyOverflow
          document.body.style.overflow = 'hidden'
        }
      }
      return function() {
        var bodyOverflow = window.getComputedStyle(document.body, null)['overflow']
        if (visible && bodyOverflow === 'hidden') {
          document.body.style.overflow = originBodyOverflow
        }
      }
    },
    [visible],
  )
  return visible
    ? React.createElement(
        'div',
        __assign(
          {
            className: classnames_1['default'](setClass(), className),
            style: __assign(__assign({ width: width }, animation), style),
          },
          leftProps,
        ),
        closable !== true
          ? null
          : React.createElement(icon_1['default'], {
              name: 'close',
              className: setClass('close'),
              onClick: onCancel,
            }),
        header !== null
          ? React.createElement('header', { className: setClass('header') }, header || '提示')
          : null,
        React.createElement('main', { className: setClass('main') }, children),
        footer
          ? React.createElement('footer', { className: setClass('footer') }, footer)
          : footer !== null
          ? React.createElement(
              'footer',
              { className: setClass('footer') },
              React.createElement(
                'div',
                { className: setClass('footer-button-wrapper') },
                cancelable === true
                  ? React.createElement(
                      button_1['default'],
                      {
                        shadow: true,
                        className: setClass('footer-button-cancel'),
                        onClick: onDialogCancel,
                      },
                      cancelText,
                    )
                  : false,
                React.createElement(
                  button_1['default'],
                  {
                    shadow: true,
                    className: setClass('footer-button-ok'),
                    type: 'primary',
                    onClick: onDialogOk,
                  },
                  okText,
                ),
              ),
            )
          : null,
        mask === true &&
          ReactDOM.createPortal(
            React.createElement('div', {
              onClick: maskOnClick,
              className: setClass('mask'),
              style: __assign({}, animation),
            }),
            document.body,
          ),
      )
    : null
}
/**
 * @function api
 * Declare that the direct reference to the function is invalid
 */
Dialog.Alert = function() {}
Dialog.Confirm = function() {}
Dialog.Modal = function() {}
exports['default'] = Dialog
