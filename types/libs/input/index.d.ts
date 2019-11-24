import * as React from 'react'
import './style.scss'
interface Props {
  className?: string
  value: any
  placeholder?: string
  allowClear?: boolean
  autoFocus?: boolean
  onChange: (value: string) => void
}
declare const Input: React.FC<Props>
export default Input
