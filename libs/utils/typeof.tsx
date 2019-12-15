export const isString = (value: any) => {
  return Object.prototype.toString.call(value) === '[object String]'
}

export const isNull = (value: any) => {
  return Object.prototype.toString.call(value) === '[object Null]'
}

export const isUndefined = (value: any) => {
  return Object.prototype.toString.call(value) === '[object Undefined]'
}

export const isBoolean = (value: any) => {
  return Object.prototype.toString.call(value) === '[object Boolean]'
}

export const isNumber = (value: any) => {
  return Object.prototype.toString.call(value) === '[object Number]'
}

export const isArray = (value: any) => {
  return Object.prototype.toString.call(value) === '[object Array]'
}
