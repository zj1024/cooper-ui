export const isString = (value: any) => {
  return Object.prototype.toString.call(value) === '[object String]'
}

export const isNull = (value: any) => {
  return Object.prototype.toString.call(value) === '[object Null]'
}
