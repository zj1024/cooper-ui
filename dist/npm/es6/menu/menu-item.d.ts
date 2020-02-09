import * as React from 'react'
import './style.scss'
export declare type index = string | number | null
interface PrivateProps {
  _onchange(index: index): void
  _closesubmenu(params: boolean): void
}
interface Props extends PrivateProps {
  className?: string
  index: index
  [key: string]: any
}
declare const MenuItem: React.FC<Props>
export default MenuItem
