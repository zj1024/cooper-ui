'use strict'
exports.__esModule = true
var typeof_1 = require('./typeof')
exports['default'] = function(val1, val2) {
  var formatVal1 = val1
  var formatVal2 = val2
  if (typeof_1.isNull(val1)) {
    formatVal1 = 'null'
  }
  if (typeof_1.isNull(val2)) {
    formatVal2 = 'null'
  }
  if (typeof_1.isUndefined(val1)) {
    formatVal1 = 'undefined'
  }
  if (typeof_1.isUndefined(val2)) {
    formatVal2 = 'undefined'
  }
  return formatVal1.toString() === formatVal2.toString()
}
