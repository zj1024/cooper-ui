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
var ReactDOM = require('react-dom')
var dialog_1 = require('./dialog')
var FactoryDialog = function(props) {
  var baseConfig = {
    visible: true,
    closable: true,
    mask: true,
    maskClosable: true,
    animat: true,
    title: props.title,
    message: props.message,
    okText: props.okText,
    cancelText: props.cancelText,
    width: props.width,
    onOk: props.onOk,
    onCancel: props.onCancel,
  }
  var renderProps = __assign(__assign({}, baseConfig), props)
  var _handleCancel = function() {
    props.onCancel ? props.onCancel(destory) : destory()
  }
  var render = function(renderProps) {
    var title = renderProps.title,
      message = renderProps.message,
      renderLeftProps = __rest(renderProps, ['title', 'message'])
    ReactDOM.render(
      React.createElement(
        dialog_1['default'],
        __assign({}, renderLeftProps, { onCancel: _handleCancel, header: title }),
        message,
      ),
      div,
    )
  }
  var destory = function() {
    var isUnmount = ReactDOM.unmountComponentAtNode(div)
    if (isUnmount && div.parentNode) {
      div.parentNode.removeChild(div)
    }
  }
  var div = document.createElement('div')
  document.body.appendChild(div)
  render(renderProps)
  return {
    close: destory,
  }
}
dialog_1['default'].Alert = function(props) {
  var config = {
    visible: true,
    closable: false,
    maskClosable: false,
    cancelable: false,
  }
  return FactoryDialog(__assign(__assign({}, props), config))
}
dialog_1['default'].Confirm = function(props) {
  var config = {
    visible: true,
    closable: false,
    maskClosable: false,
  }
  return FactoryDialog(Object.assign(config, props))
}
dialog_1['default'].Modal = function(props) {
  var config = {}
  return FactoryDialog(__assign(__assign({}, props), config))
}
var Alert = dialog_1['default'].Alert
exports.Alert = Alert
var Confirm = dialog_1['default'].Confirm
exports.Confirm = Confirm
var Modal = dialog_1['default'].Modal
exports.Modal = Modal
exports['default'] = dialog_1['default']
