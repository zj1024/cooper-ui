import * as React from 'react'
import './style.scss'
/**
 * @prop {boolean} visible
 * @prop {string} color loading icon color
 * @prop {light | dark} type loading theme
 * @prop {[key: string]: any} any allows the user to set other props automatically
 */
interface Props {
  className?: string
  visible: boolean
  color?: string
  type?: 'light' | 'dark'
  text?: string | React.ReactNode
  [key: string]: any
}
declare const Loading: React.FC<Props>
export default Loading
