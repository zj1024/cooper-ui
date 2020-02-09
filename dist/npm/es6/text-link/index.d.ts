import * as React from 'react'
import './style.scss'
interface Props {
  className?: string
  type?: 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'info'
  underline?: boolean
  disabled?: boolean
  [key: string]: any
}
declare const TextLink: React.FC<Props>
export default TextLink
