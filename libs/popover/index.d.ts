import * as React from 'react'
import './style.scss'
interface Props {
  className?: string
  placement?: 'top' | 'bottom' | 'left' | 'right'
  content: React.ReactNode
  trigger?: 'hover' | 'click' | 'contextMenu'
}
declare const Popover: React.FC<Props>
export default Popover
