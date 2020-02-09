import * as React from 'react'
import './style.scss'
interface Props {
  className?: string
  content: React.ReactNode
  placement?: 'top' | 'bottom' | 'left' | 'right'
  [key: string]: any
}
declare const Tooltip: React.FC<Props>
export default Tooltip
