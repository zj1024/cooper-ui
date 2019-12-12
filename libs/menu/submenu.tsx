import * as React from 'react'
import { useState } from 'react'
import classnames from 'classnames'
import { setPrefixClassName } from '../utils'
import Icon from '../icon'
import { CSSTransition } from '../transition'

import './style.scss'

export type index = string | number | null

interface Props {
  className?: string
  index: index
  title?: string
  _onchange: (index: index) => void
}

const setClass = setPrefixClassName('coo-menu-submenu')

const SubMenu: React.FC<Props> = props => {
  const { children, className, _onchange, title, index, ...leftProps } = props

  const [isOpen, setIsOpen] = useState(true)

  console.log(isOpen)
  return (
    <div className={classnames(setClass(''), className)} {...leftProps}>
      <div
        className={setClass('item')}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}>
        <span>{title}</span>
        <Icon className={classnames(isOpen && setClass('icon-open'))} name="arrow-down" />
      </div>
      <CSSTransition duration={100} visible={isOpen}>
        <div
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
          className={classnames(setClass('item-wrapper'))}>
          {children}
        </div>
      </CSSTransition>
    </div>
  )
}

export default SubMenu
