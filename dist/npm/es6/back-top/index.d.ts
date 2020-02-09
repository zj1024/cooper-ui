import * as React from 'react'
import './style.scss'
/**
 * @prop {smooth | auto} behavior scroll spread or reset behavior
 * @prop {number} visibilityHeight scrollTop show component
 * @prop {boolean} animat show or hide have animation?
 * @prop {[key: string]: any} any allows the user to set other props automatically
 */
interface Props {
  className?: string
  behavior?: 'smooth' | 'auto'
  visibilityHeight?: number
  animat?: boolean
  [key: string]: any
}
declare const BackTop: React.FC<Props>
export default BackTop
