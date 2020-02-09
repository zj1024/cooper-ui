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
exports.__esModule = true
var React = require('react')
var ReactDOM = require('react-dom')
var classnames_1 = require('classnames')
var utils_1 = require('../utils')
var message_1 = require('./message')
require('./style.scss')
var Message = function(props) {
  var _a = props.placement,
    placement = _a === void 0 ? 'top' : _a
  var containerClassName =
    placement === 'bottom' ? 'coo-message-container-bottom' : 'coo-message-container'
  var wrapperClassName =
    placement === 'bottom' ? 'coo-message-wrapper-bottom' : 'coo-message-wrapper'
  var enterClassName = 'coo-message-enter-animat'
  var exitClassName = 'coo-message-exit-animat'
  // 创建每个message的wrapper
  var div = document.createElement('div')
  div.setAttribute('class', classnames_1['default'](wrapperClassName, enterClassName))
  var containerDOM = document.querySelector('.' + containerClassName)
  if (!containerDOM) {
    containerDOM = document.createElement('div')
    containerDOM.setAttribute('class', containerClassName)
    document.body.appendChild(containerDOM)
  }
  containerDOM.appendChild(div)
  var _onShowClose = function() {
    destory()
  }
  var component = React.createElement(
    message_1['default'],
    __assign({ _onShowClose: _onShowClose }, props),
  )
  ReactDOM.render(component, div)
  var destory = function() {
    div.setAttribute('class', wrapperClassName + ' ' + exitClassName)
    // 过度动画
    setTimeout(function() {
      var isUnmount = ReactDOM.unmountComponentAtNode(div)
      if (isUnmount && div.parentNode) {
        div.parentNode.removeChild(div)
      }
    }, 280)
  }
  return {
    close: destory,
  }
}
Message.$success = function() {}
Message.$info = function() {}
Message.$error = function() {}
Message.$warning = function() {}
;['$success', '$info', '$error', '$warning'].forEach(function(type) {
  Message[type] = function(props) {
    var config = utils_1.isString(props) ? { message: props } : __assign({}, props)
    return Message.call(null, Object.assign({ type: type.substr(1) }, config))
  }
})
var $success = Message.$success
exports.$success = $success
var $info = Message.$info
exports.$info = $info
var $error = Message.$error
exports.$error = $error
var $warning = Message.$warning
exports.$warning = $warning
exports['default'] = Message
