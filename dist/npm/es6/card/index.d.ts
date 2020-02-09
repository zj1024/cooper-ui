import * as React from 'react'
import './style.scss'
/**
 * @prop {React.ReactNode} header user content
 * @prop {always | hover} shadow card shadow timing of emergence
 * @prop {[key: string]: any} any allows the user to set other props automatically
 */
interface Props {
  header?: React.ReactNode
  shadow?: string
  [key: string]: any
}
declare const Card: React.FC<Props>
export default Card
