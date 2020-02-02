import * as React from 'react'
import { useState } from 'react'
import classnames from 'classnames'
import { setPrefixClassName } from '../utils'

import MenuItem, { index } from './menu-item'
import SubMenu from './submenu'

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

const setClass = setPrefixClassName('coo-menu')

const Menu: MenuFC = props => {
  const {
    children,
    className,
    mode = 'horizontal',
    align = 'left',
    activeIndex,
    onSelect = () => {},
    trigger = 'hover',
    ...leftProps
  } = props

  const [_activeIndex, setActiveIndex] = useState(activeIndex)

  const _onChangeItemActive = (index: index) => {
    onSelect(index)
    setActiveIndex(index)
  }

  const _deepJudgeIndex = (element: React.ReactElement): any => {
    return React.Children.map(element, (child: React.ReactElement) => {
      if (child.type && child.type === SubMenu) {
        let hasActiveIndex = false
        // 判断当前的submenu子元素是否是active状态
        React.Children.forEach(child.props.children, (child: React.ReactElement) => {
          if (child.props.index === _activeIndex) {
            hasActiveIndex = true
          }
        })

        return React.cloneElement(child, {
          children: _deepJudgeIndex(child.props.children),
          _trigger: trigger,
          _isActive: hasActiveIndex,
          mode,
        })
      }

      if (child.type && child.type === MenuItem) {
        return React.cloneElement(child as React.ReactElement, {
          // 判断index
          className: _activeIndex === child.props.index ? setClass('item-active') : '',
          _onchange: _onChangeItemActive,
        })
      }
      return child
    })
  }

  return (
    <div
      className={classnames(
        setClass(),
        align === 'left' && setClass('left'),
        align === 'center' && setClass('center'),
        align === 'right' && setClass('right'),
        mode === 'vertical' && setClass('vertical'),
        className,
      )}
      {...leftProps}>
      {children && _deepJudgeIndex(children as React.ReactElement)}
    </div>
  )
}

Menu.MenuItem = MenuItem
Menu.SubMenu = SubMenu

export default Menu
