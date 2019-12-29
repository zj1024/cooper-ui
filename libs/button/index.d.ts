import * as React from 'react'
import './style.scss'
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
