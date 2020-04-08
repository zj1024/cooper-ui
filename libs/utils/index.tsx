import { isString, isNull, isUndefined, isBoolean, isNumber, isArray } from './typeof'
import setPrefixClassName from './getclass'
import stringEqual from './stringEqual'
import throttle from './throttle'
import { useInterval } from './hooks'
import { _extends } from './extends'
import { getScrollContainer, getStyle, isInContainer, isScroll } from './dom'

export {
  isString,
  isNull,
  isUndefined,
  isBoolean,
  isNumber,
  isArray,
  setPrefixClassName,
  stringEqual,
  throttle,
  // hooks:
  useInterval,
  // createElement:
  _extends,
  // dom:
  getScrollContainer,
  getStyle,
  isInContainer,
  isScroll,
}
