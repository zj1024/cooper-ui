// @ts-nocheck
export function _extends(...rest) {
  _extends =
    Object.assign ||
    function(target) {
      for (var i = 1; i < rest.length; i++) {
        var source = rest[i]
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key]
          }
        }
      }
      return target
    }
  return _extends.apply(this, rest)
}
