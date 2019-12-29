import * as React from 'react'
import { useState } from 'react'
import classnames from 'classnames'
import { setPrefixClassName } from '../utils'
import Icon from '../icon'
import Collapse from '../collapse'
import { CSSTransition } from '../transition'

import './style.scss'

export type index = string | number | null

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

const setClass = setPrefixClassName('coo-menu-submenu')

const SubMenu: React.FC<Props> = props => {
  const {
    children,
    className,
    _onchange,
    title,
    index,
    _trigger = 'hover',
    _isActive,
    mode,
    ...leftProps
  } = props

  const [isOpen, setIsOpen] = useState(false)

  const onChange = (openStatus: boolean) => {
    setIsOpen(openStatus)
  }

  if (mode === 'vertical') {
    return (
      <Collapse className={setClass()} accordion={false}>
        <Collapse.Item title="Collapse first" iconPlacement="right">
          {children}
        </Collapse.Item>
      </Collapse>
    )
  }

  return (
    <div
      {...{
        onMouseEnter: _trigger === 'hover' ? () => onChange(true) : () => {},
        onMouseLeave: _trigger === 'hover' ? () => onChange(false) : () => {},
        onClick: _trigger === 'click' ? () => onChange(!isOpen) : () => {},
      }}
      className={classnames(setClass(''), className)}
      {...leftProps}>
      <div className={classnames(setClass('item'), _isActive && setClass('item-active'))}>
        <span>{title}</span>
        <span>
          <Icon className={classnames(isOpen && setClass('icon-open'))} name="arrow-down" />
        </span>
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
