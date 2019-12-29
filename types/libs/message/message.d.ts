import * as React from 'react'
import './style.scss'
interface Props {
  message: React.ReactNode
  type?: 'success' | 'info' | 'error' | 'warning'
  showClose?: boolean
  placement?: 'top' | 'bottom'
  duration?: number
  _onShowClose: () => void
}
declare const MessageComponent: React.FC<Props>
export default MessageComponent
