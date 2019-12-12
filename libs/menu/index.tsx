import * as React from 'react'
import { useState } from 'react'
import classnames from 'classnames'
import { setPrefixClassName } from '../utils'

import MenuItem, { index } from './menu-item'
import SubMenu from './submenu'

import './style.scss'

interface Props {
  className?: string
  bgColor?: string
  activeIndex?: index
  onSelect?: (params?: any) => any
}

interface MenuFC extends React.FC<Props> {
  MenuItem: (params?: any) => any
  SubMenu: (params?: any) => any
}

const setClass = setPrefixClassName('coo-menu')

const Menu: MenuFC = props => {
  const { children, className, bgColor, activeIndex, onSelect = () => {}, ...leftProps } = props

  const [_activeIndex, setActiveIndex] = useState(activeIndex)

  const _onChangeItemActive = (index: index) => {
    onSelect(index)
    setActiveIndex(index)
  }

  return (
    <div
      className={classnames(setClass(), className)}
      {...leftProps}
      style={{ background: bgColor }}>
      {React.Children.map(children, (child: React.ReactNode) => {
        const MenuItemEle = child as React.ReactElement

        if (MenuItemEle.type && MenuItemEle.type === MenuItem) {
          return React.cloneElement(child as React.ReactElement, {
            // 判断index
            className: _activeIndex === MenuItemEle.props.index ? setClass('item-active') : '',
            _onchange: _onChangeItemActive,
          })
        }
        return child
      })}
      {/* {[1, 2, 3, 4].map((d: any, index: number) => (
        <div
          className={classnames(setClass('item'), activeIndex === index && setClass('item-active'))}
          key={d}
          onClick={() => _onChangeActiveIndex(index)}>
          <MenuItem>
            <div>1</div>
            <div>2</div>
          </MenuItem>
        </div>
      ))} */}
    </div>
  )
}

Menu.MenuItem = MenuItem
Menu.SubMenu = SubMenu

export default Menu
