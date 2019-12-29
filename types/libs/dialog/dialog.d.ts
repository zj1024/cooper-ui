import * as React from 'react'
import './style.scss'
export interface Props {
  visible: boolean
  width?: string
  header?: React.ReactNode
  footer?: React.ReactNode
  okText?: string
  cancelText?: string
  cancelable?: boolean
  closable?: boolean
  animat?: boolean
  mask?: boolean
  maskClosable?: boolean
  lockScroll?: boolean
  onOk?: (params?: any) => void
  onCancel: (params?: any) => any
  [key: string]: any
}
interface DialogFC extends React.FC<Props> {
  Modal: (props?: any) => any
  Alert: (props?: any) => any
  Confirm: (props?: any) => any
}
declare const Dialog: DialogFC
export default Dialog
