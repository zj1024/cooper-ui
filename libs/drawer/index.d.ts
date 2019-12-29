import * as React from 'react'
import './style.scss'
interface Props {
  visible: boolean
  mask?: boolean
  maskClosable?: boolean
  destroyOnClose?: boolean
  direction?: 'left' | 'right' | 'top' | 'bottom'
  contentBackground?: string
  zIndex?: number
  onCancel: (params?: any) => any
  [key: string]: any
}
declare const Drawer: React.FC<Props>
export default Drawer
