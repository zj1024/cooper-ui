import * as React from 'react'
import './style.scss'
/**
 * @prop {boolean} dashed line style
 * @prop {left | center | right} orientation text-align
 * @prop {horizontal | vertical} type the divider direction
 * @prop {[key: string]: any} any allows the user to set other props automatically
 */
interface Props {
  className?: string
  dashed?: boolean
  orientation?: 'left' | 'center' | 'right'
  type?: 'horizontal' | 'vertical'
  [key: string]: any
}
declare const Divider: React.FC<Props>
export default Divider
