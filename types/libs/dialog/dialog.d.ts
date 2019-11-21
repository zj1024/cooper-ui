import * as React from 'react'
import './style.scss'
export interface Props {
  children?: React.ReactNode | string
  className?: string
  visible: boolean
  width?: string | number
  header?: React.ReactNode | string
  footer?: React.ReactNode | string
  okText?: string
  cancelText?: string
  onCancel: (params?: any) => any
  onOk?: (params?: any) => void
  closable?: boolean
  mask?: boolean
  maskClosable?: boolean
  animat?: boolean
  cancelable?: boolean
  [key: string]: any
}
interface DialogFC extends React.FC<Props> {
  Modal: (props?: any) => any
  Alert: (props?: any) => any
  Confirm: (props?: any) => any
}
declare const Dialog: DialogFC
export default Dialog
