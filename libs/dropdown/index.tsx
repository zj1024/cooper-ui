import * as React from 'react'
import { useState } from 'react'
import classnames from 'classnames'
import { setPrefixClassName } from '../utils'
import Transition from '../transition'

import DropdownMenu from './dropdown-menu'
import DropdownItem from './dropdown-item'

import './style.scss'

interface IProps {
  overlay: React.ReactNode
  placement?:
    | 'bottom-left'
    | 'bottom-center'
    | 'bottom-right'
    | 'top-left'
    | 'top-center'
    | 'top-right'
  className?: string
  [key: string]: any
}

interface DropdownFC extends React.FC<IProps> {
  Menu(params?: any): any
  Item(params?: any): any
}

const setClass = setPrefixClassName('coo-dropdown')

const Dropdown: DropdownFC = props => {
  const { children, className, overlay, placement = 'bottom-left', ...leftProps } = props
  const [visible, setVisible] = useState(false)

  const isTopTransition = placement.split('-')[0] === 'top'

  return (
    <div
      className={classnames(setClass('wrapper'))}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}>
      <div className={classnames(setClass(), className)} {...leftProps}>
        {children}
      </div>
      <Transition visible={visible} classNames="dropdown-transition">
        <div
          className={classnames(
            setClass('overlay'),
            setClass(`overlay-${placement}`),
            isTopTransition && setClass('overlay-top'),
          )}>
          {overlay}
        </div>
      </Transition>
    </div>
  )
}

Dropdown.Menu = DropdownMenu
Dropdown.Item = DropdownItem

export default Dropdown
