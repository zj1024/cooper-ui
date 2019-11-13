import * as React from 'react'
import './style.scss'
interface Props {
  children?: React.ReactNode | string
  visible: boolean
  width?: string | number
  header?: React.ReactNode | string
  footer?: React.ReactNode | string
  [key: string]: any
}
declare const Dialog: React.FC<Props>
export default Dialog
