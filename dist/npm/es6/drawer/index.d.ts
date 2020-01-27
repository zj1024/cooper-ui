import * as React from 'react'
import './style.scss'
/**
 * @prop {boolean} visible open drawer
 * @prop {boolean} mask mask under the drawer
 * @prop {boolean} maskClosable click mask close drawer
 * @prop {boolean} destroyOnClose remove dom when close drawer TODO:
 * @prop {string} direction drawer content direction when opened
 * @prop {string} contentBackground drawer content background
 * @prop {number} zIndex drawer zIndex for avoid cover other drawer
 * @prop {(params?: any) => any} onMaskClose callback, click mask close the drawer
 * @prop {[key: string]: any} any allows the user to set other props automatically
 */
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
