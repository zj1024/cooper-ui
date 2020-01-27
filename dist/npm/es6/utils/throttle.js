'use strict'
exports.__esModule = true
exports['default'] = function(method, wait, _a) {
  if (method === void 0) {
    method = function() {}
  }
  var _b = _a === void 0 ? {} : _a,
    _c = _b.leading,
    leading = _c === void 0 ? true : _c,
    _d = _b.trailing,
    trailing = _d === void 0 ? true : _d
  var timeout
  var result
  var methodPrevious = 0
  var throttledPrevious = 0
  var throttled = function() {
    var args = []
    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i]
    }
    var context = this
    return new Promise(function(resolve) {
      var now = new Date().getTime()
      var interval = now - throttledPrevious
      throttledPrevious = now
      if (leading === false && (!methodPrevious || interval > wait)) {
        methodPrevious = now
        if (timeout) {
          clearTimeout(timeout)
          timeout = null
        }
      }
      var remaining = wait - (now - methodPrevious)
      if (remaining <= 0 || remaining > wait) {
        if (timeout) {
          clearTimeout(timeout)
          timeout = null
        }
        methodPrevious = now
        result = method.apply(context, args)
        resolve(result)
        if (!timeout) context = args = null
      } else if (!timeout && trailing !== false) {
        timeout = setTimeout(function() {
          methodPrevious = leading === false ? 0 : new Date().getTime()
          timeout = null
          result = method.apply(context, args)
          resolve(result)
          if (!timeout) context = args = null
        }, remaining)
      }
    })
  }
  return throttled
}
