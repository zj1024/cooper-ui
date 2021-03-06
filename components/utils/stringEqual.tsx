import { isNull, isUndefined } from './typeof'
export default (val1: any, val2: any) => {
  let formatVal1 = val1
  let formatVal2 = val2
  if (isNull(val1)) {
    formatVal1 = 'null'
  }
  if (isNull(val2)) {
    formatVal2 = 'null'
  }
  if (isUndefined(val1)) {
    formatVal1 = 'undefined'
  }
  if (isUndefined(val2)) {
    formatVal2 = 'undefined'
  }
  return formatVal1.toString() === formatVal2.toString()
}
