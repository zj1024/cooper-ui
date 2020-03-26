import * as React from 'react'
import { useState, useEffect, useRef } from 'react'
import classnames from 'classnames'
import { setPrefixClassName } from '../utils'

import Icon from '../icon'
import Collapse from '../collapse'
import Transition from '../transition'

export type index = string | number | null

interface PrivateProps {
  onchange(index: index): void
  isActive?: boolean
  trigger?: string
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
    onchange,
    title,
    index,
    trigger = 'hover',
    isActive,
    mode,
    ...leftProps
  } = props

  const [visible, setVisible] = useState(false)
  const menuItemRef = useRef(null)

  useEffect(() => {
    let bodyDispatchEvent: any
    let menuItemDispatchEvent: any
    let isMenuItemClick: boolean = false

    if (trigger === 'click' && visible) {
      // body注册事件
      bodyDispatchEvent = () => !isMenuItemClick && setVisible(false)
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
  }, [visible])

  const onChange = (openStatus: boolean) => {
    setVisible(openStatus)
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
      trigger === 'click'
        ? () => {
            console.log(visible)
            onChange(true)
          }
        : () => {},
  }

  const triggerFN = {
    onMouseEnter: trigger === 'hover' ? () => onChange(true) : () => {},
    onMouseLeave: trigger === 'hover' ? () => onChange(false) : () => {},
  }

  return (
    <div {...triggerFN} className={classnames(setClass(''), className)} {...leftProps}>
      <div
        className={classnames(setClass('item'), isActive && setClass('item-active'))}
        {...clickTrigger}>
        <span>{title}</span>
        <span>
          <Icon className={classnames(visible && setClass('icon-open'))} name="arrow-down" />
        </span>
      </div>
      <Transition duration={300} visible={visible} classNames="menu">
        <div className={setClass('item-transition')}>
          <div className={setClass('item-wrapper')} ref={menuItemRef}>
            {React.Children.map(children as React.ReactElement, (child: React.ReactElement) => {
              return React.cloneElement(child, {
                closeSubmenu: (params: boolean) => setVisible(params),
              })
            })}
          </div>
        </div>
      </Transition>
    </div>
  )
}

export default SubMenu
