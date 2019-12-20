import * as React from 'react'
import { useState, useEffect } from 'react'
import classnames from 'classnames'
import { Transition } from '../'
import { setPrefixClassName } from '../utils'

import './style.scss'

enum Trigger {
  hover = 'hover',
  click = 'click',
  contextMenu = 'contextMenu',
}

interface Props {
  className?: string
  placement?: 'top' | 'bottom' | 'left' | 'right'
  content: React.ReactNode
  trigger?: Trigger
}

const setClass = setPrefixClassName('coo-popover')

const Popover: React.FC<Props> = props => {
  const {
    children,
    className,
    placement = 'top',
    content,
    trigger = Trigger.hover,
    ...leftProps
  } = props

  const [visible, setVisible] = useState(false)

  const handleToggleTooltip = (isShow: boolean) => {
    setTimeout(() => {
      setVisible(isShow)
    }, 150)
  }

  if (trigger === Trigger.click || trigger === Trigger.contextMenu) {
    useEffect(() => {
      const close = () => handleToggleTooltip(false)
      window.addEventListener('click', close, false)
      return () => window.removeEventListener('click', close)
    }, [])
  }

  const stopClose = (needClose: boolean, e: any) => {
    if (!needClose) {
      e && e.stopPropagation()
    }
  }

  const onPopoverClick = (e: { stopPropagation: () => any }) => {
    stopClose(false, e)
    handleToggleTooltip(true)
  }
  const onPopoverContextMenu = (e: { preventDefault: () => any }) => {
    e && e.preventDefault()
    handleToggleTooltip(true)
  }

  // 在hover事件中，不需要主动触发关闭，clickContentShouldClose对hover事件不作处理
  const onTrigger = {
    // hover trigger
    onMouseEnter: trigger === Trigger.hover ? () => handleToggleTooltip(true) : undefined,
    onMouseLeave: trigger === Trigger.hover ? () => handleToggleTooltip(false) : undefined,
    onClick: trigger === Trigger.click ? onPopoverClick : undefined,
    onContextMenu: trigger === Trigger.contextMenu ? onPopoverContextMenu : undefined,
  }

  const contentOnTrigger = {
    onClick: Trigger.contextMenu
      ? (e: { stopPropagation: () => void }) => stopClose(false, e)
      : undefined,
  }

  return (
    <div className={classnames(setClass(), className)} {...onTrigger} {...leftProps}>
      <div className={setClass('children')}>{children}</div>
      <Transition visible={visible}>
        <div
          className={classnames(setClass('content'), setClass(`content-${placement}`))}
          {...contentOnTrigger}>
          <i className={classnames(setClass('content-icon'))}></i>
          {content}
        </div>
      </Transition>
    </div>
  )
}

export default Popover
