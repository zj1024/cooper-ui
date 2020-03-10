import * as React from 'react'
import { useState, useEffect, useRef } from 'react'
import classnames from 'classnames'
import { setPrefixClassName } from '../utils'
import Icon from '../icon'
import Collapse from '../collapse'
import Transition from '../transition'

import './style.scss'

export type index = string | number | null

interface PrivateProps {
  _onchange(index: index): void
  _isActive?: boolean
  _trigger?: string
  mode?: string
}

interface Props extends PrivateProps {
  className?: string
  index: index
  title?: string
  [key: string]: any
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
  const menuItemRef = useRef(null)

  const onChange = (openStatus: boolean) => {
    setIsOpen(openStatus)
  }

  if (mode === 'vertical') {
    return (
      <Collapse className={setClass()} accordion={false}>
        <Collapse.Item title={title} iconPlacement="right">
          {children}
        </Collapse.Item>
      </Collapse>
    )
  }

  const clickTrigger = {
    onClick:
      _trigger === 'click'
        ? () => {
            console.log(isOpen)
            onChange(true)
          }
        : () => {},
  }

  const trigger = {
    onMouseEnter: _trigger === 'hover' ? () => onChange(true) : () => {},
    onMouseLeave: _trigger === 'hover' ? () => onChange(false) : () => {},
  }

  useEffect(() => {
    let bodyDispatchEvent: any
    let menuItemDispatchEvent: any
    let isMenuItemClick: boolean = false

    if (_trigger === 'click' && isOpen) {
      // body注册事件
      bodyDispatchEvent = () => !isMenuItemClick && setIsOpen(false)
      menuItemDispatchEvent = () => {
        isMenuItemClick = true
      }
      ;(menuItemRef as any).current.addEventListener('click', menuItemDispatchEvent, false)
      document.body.addEventListener('click', bodyDispatchEvent, false)
    }

    return () => {
      if (bodyDispatchEvent) {
        ;(menuItemRef as any).current.removeEventListener('click', menuItemDispatchEvent, false)
        document.body.removeEventListener('click', bodyDispatchEvent, false)
      }
    }
  }, [isOpen])

  return (
    <div {...trigger} className={classnames(setClass(''), className)} {...leftProps}>
      <div
        className={classnames(setClass('item'), _isActive && setClass('item-active'))}
        {...clickTrigger}>
        <span>{title}</span>
        <span>
          <Icon className={classnames(isOpen && setClass('icon-open'))} name="arrow-down" />
        </span>
      </div>
      <Transition duration={300} visible={isOpen} classNames="menu">
        <div>
          <div className={classnames(setClass('item-wrapper'))} ref={menuItemRef}>
            {React.Children.map(children as React.ReactElement, (child: React.ReactElement) => {
              return React.cloneElement(child, {
                _closesubmenu: (params: boolean) => setIsOpen(params),
              })
            })}
          </div>
        </div>
      </Transition>
    </div>
  )
}

export default SubMenu
