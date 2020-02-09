'use strict'
exports.__esModule = true
exports['default'] = function(prefix) {
  return function(className) {
    return '' + prefix + (className ? '-' + className : '')
  }
}
