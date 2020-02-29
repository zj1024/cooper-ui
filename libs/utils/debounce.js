// @ts-ignore
export default (func, wait, immediate) => {
  // immediate默认为false
  // @ts-ignore
  let timeout
  // @ts-ignore
  let args
  // @ts-ignore
  let context
  // @ts-ignore
  let timestamp
  // @ts-ignore
  let result

  var later = function() {
    // 当wait指定的时间间隔期间多次调用_.debounce返回的函数，则会不断更新timestamp的值，导致last < wait && last >= 0一直为true，从而不断启动新的计时器延时执行func
    // @ts-ignore
    var last = Date.now() - timestamp

    if (last < wait && last >= 0) {
      timeout = setTimeout(later, wait - last)
    } else {
      timeout = null
      if (!immediate) {
        // @ts-ignore
        result = func.apply(context, args)
        if (!timeout) context = args = null
      }
    }
  }

  return function() {
    // @ts-ignore
    context = this
    args = arguments
    timestamp = Date.now()
    // 第一次调用该方法时，且immediate为true，则调用func函数
    // @ts-ignore
    var callNow = immediate && !timeout
    // 在wait指定的时间间隔内首次调用该方法，则启动计时器定时调用func函数
    // @ts-ignore
    if (!timeout) timeout = setTimeout(later, wait)
    if (callNow) {
      result = func.apply(context, args)
      context = args = null
    }

    // @ts-ignore
    return result
  }
}
