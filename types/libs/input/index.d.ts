import * as React from 'react'
import './style.scss'
interface Props {
  className?: string
  value: any
  placeholder?: string
  allowClear?: boolean
  autoFocus?: boolean
  disabled?: boolean
  onChange?: (e: any) => any
  onPressEnter?: (e: any) => any
  [key: string]: any
}
declare const Input: React.FC<Props>
export default Input
