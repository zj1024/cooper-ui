import * as React from 'react'
// import { useState } from 'react'
import classnames from 'classnames'
import MenuItem from './menu-item'
import { setPrefixClassName } from '../utils'

import './style.scss'

interface Props {
  className?: string
  bgColor?: string
}

interface MenuFC extends React.FC<Props> {
  MenuItem: (params: any) => any
}

const setClass = setPrefixClassName('coo-menu')

const Menu: MenuFC = props => {
  const { children, className, bgColor, ...leftProps } = props

  // const [activeIndex, setActiveIndex] = useState(0)

  // const _onChangeActiveIndex = (index: number) => {
  //   setActiveIndex(index)
  // }

  return (
    <div
      className={classnames(setClass(), className)}
      {...leftProps}
      style={{ background: bgColor }}>
      {React.Children.map(children, (child: React.ReactNode) => {
        const MenuItemEle = child as React.ReactElement
        if (MenuItemEle.type && MenuItemEle.type === MenuItem) {
          console.log(MenuItemEle.props.index)
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

export default Menu
