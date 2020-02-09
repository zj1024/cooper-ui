import * as React from 'react'
import './style.scss'
interface Props {
  className?: string
  style?: any
  checked?: boolean
  defaultChecked?: boolean
  checkedChildren?: string | React.ReactNode
  unCheckedChildren?: string | React.ReactNode
  size?: string
  loading?: boolean
  disabled?: boolean
  onChange(params?: any): any
  [key: string]: any
}
declare const Switch: React.FC<Props>
export default Switch
