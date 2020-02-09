import * as React from 'react'
import { index } from './menu-item'
import './style.scss'
interface Props {
  className?: string
  style?: any
  mode?: string
  align?: string
  activeIndex?: index
  trigger?: string
  onSelect?(params?: any): any
  [key: string]: any
}
interface MenuFC extends React.FC<Props> {
  MenuItem(params?: any): any
  SubMenu(params?: any): any
}
declare const Menu: MenuFC
export default Menu
