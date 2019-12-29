import * as React from 'react'
import './style.scss'
export declare type index = string | number | null
interface PrivateProps {
  _onchange: (index: index) => void
  _isActive?: boolean
  _trigger?: string
  mode?: string
}
interface Props extends PrivateProps {
  className?: string
  index: index
  title?: string
}
declare const SubMenu: React.FC<Props>
export default SubMenu
