import * as React from 'react'
import './style.scss'
/**
 * @prop {default | primary | success | warning | danger | info} type button type
 * @prop {boolean} plain button plain style
 * @prop {boolean} round button style border-radius: 50px
 * @prop {boolean} circle button style border-radius: 50%
 * @prop {boolean} loading loading state will have a loading icon
 * @prop {boolean} disabled button disabled
 * @prop {boolean} shadow button have a shadow
 * @prop {[key: string]: any} any allows the user to set other props automatically
 */
interface Props {
  type?: string
  plain?: boolean
  round?: boolean
  circle?: boolean
  loading?: boolean
  disabled?: boolean
  shadow?: boolean
  [key: string]: any
}
declare const Button: React.FC<Props>
export default Button
