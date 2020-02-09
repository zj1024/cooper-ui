import * as React from 'react'
import './style.scss'
/**
 * @prop {string} name svg file name
 * @prop {string} component user custom icon
 * @prop {[key: string]: any} any allows the user to set other props automatically
 */
interface Props {
  className?: string
  name?: string
  component?: string
  [key: string]: any
}
declare const Icon: React.FC<Props>
export default Icon
