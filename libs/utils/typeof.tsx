export const isString = (value: string | number) => {
  return Object.prototype.toString.call(value) === '[object String]'
}
