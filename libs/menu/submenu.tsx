import * as React from 'react'
import { useState } from 'react'
import classnames from 'classnames'
import { setPrefixClassName } from '../utils'
import Icon from '../icon'
import { CSSTransition } from '../transition'

import './style.scss'

export type index = string | number | null

interface PrivateProps {
  _onchange: (index: index) => void
  _isActive?: boolean
}

interface Props extends PrivateProps {
  className?: string
  index: index
  title?: string
  trigger?: string
}

const setClass = setPrefixClassName('coo-menu-submenu')

const SubMenu: React.FC<Props> = props => {
  const {
    children,
    className,
    _onchange,
    title,
    index,
    _isActive,
    trigger = 'hover',
    ...leftProps
  } = props

  const [isOpen, setIsOpen] = useState(false)
  return (
    <div
      {...{
        onMouseEnter: trigger === 'hover' ? () => setIsOpen(true) : () => {},
        onMouseLeave: trigger === 'hover' ? () => setIsOpen(false) : () => {},
        onClick: trigger === 'click' ? () => setIsOpen(!isOpen) : () => {},
      }}
      className={classnames(setClass(''), className)}
      {...leftProps}>
      <div className={classnames(setClass('item'), _isActive && setClass('item-active'))}>
        <span>{title}</span>
        <Icon className={classnames(isOpen && setClass('icon-open'))} name="arrow-down" />
      </div>
      <CSSTransition duration={100} visible={isOpen}>
        <div className={classnames(setClass('item-wrapper'))}>
          {React.Children.map(children as React.ReactElement, (child: React.ReactElement) => {
            return React.cloneElement(child, {
              _closesubmenu: (params: boolean) => setIsOpen(params),
            })
          })}
        </div>
      </CSSTransition>
    </div>
  )
}

export default SubMenu
