import * as React from 'react'
import classnames from 'classnames'
import { setPrefixClassName } from '../utils'

import MenuItem, { index } from './menu-item'
import SubMenu from './submenu'

interface Props {
  className?: string
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
    trigger = 'hover',
    activeIndex,
    onSelect = () => {},
    ...leftProps
  } = props

  const onChangeItemActive = (index: index) => {
    onSelect(index)
  }

  const deepJudgeIndex = (element: React.ReactElement): any => {
    return React.Children.map(element, (child: React.ReactElement) => {
      if (child.type && child.type === SubMenu) {
        let hasActiveIndex = false
        // 判断当前的submenu子元素是否是active状态
        React.Children.forEach(child.props.children, (child: React.ReactElement) => {
          if (child.props.index === activeIndex) {
            hasActiveIndex = true
          }
        })

        return React.cloneElement(child, {
          children: deepJudgeIndex(child.props.children),
          trigger: trigger,
          isActive: hasActiveIndex,
          mode,
        })
      }

      if (child.type && child.type === MenuItem) {
        return React.cloneElement(child as React.ReactElement, {
          // 判断index
          className: classnames(activeIndex === child.props.index && setClass('item-active')),
          onchange: onChangeItemActive,
        })
      }
      return child
    })
  }

  return (
    <div
      className={classnames(
        setClass(),
        setClass(align),
        mode === 'vertical' && setClass('vertical'),
        className,
      )}
      {...leftProps}>
      {children && deepJudgeIndex(children as React.ReactElement)}
    </div>
  )
}

Menu.MenuItem = MenuItem
Menu.SubMenu = SubMenu

export default Menu
