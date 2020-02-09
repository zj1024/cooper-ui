import * as React from 'react'
import './style.scss'
interface optionItem {
  value: any
  label: string
  disabled?: boolean
  checked?: boolean
}
export interface Props {
  className?: string
  options: optionItem[]
  onChange(e: React.BaseSyntheticEvent): void
  name?: string
  defaultValue?: any
  radioStyle?: any
  mode?: 'vertical' | 'horizontal'
  [key: string]: any
}
declare const Radio: React.FC<Props>
export default Radio
