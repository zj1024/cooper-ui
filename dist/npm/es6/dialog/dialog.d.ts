import * as React from 'react'
import './style.scss'
/**
 * @prop {boolean} visible prop passed in by user
 * @prop {string} width custom dialog content width
 * @prop {React.ReactNode} header dialog header
 * @prop {React.ReactNode} footer dialog footer
 * @prop {string} okText custom ok button text
 * @prop {string} cancelText custom cancel button text
 * @prop {boolean} closable dialog the close button in the upper right corner
 * @prop {boolean} animat dialog open or close animat
 * @prop {boolean} mask dialog mask
 * @prop {boolean} maskClosable click mask close dialog
 * @prop {boolean} lockScroll dialog hidden scrollbar when open state
 * @prop {(params?: any) => void} onOk click ok button callback
 * @prop {(params?: any) => any} onCancel click cancel button callback
 * @prop {[key: string]: any} any allows the user to set other props automatically
 */
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
  Modal(props?: any): any
  Alert(props?: any): any
  Confirm(props?: any): any
}
declare const Dialog: DialogFC
export default Dialog
