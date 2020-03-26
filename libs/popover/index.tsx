import * as React from 'react'
import { useState, useEffect } from 'react'
import classnames from 'classnames'
import Transition from '../transition'
import { setPrefixClassName } from '../utils'
import Icon from '../icon'

interface Props {
  className?: string
  placement?: 'top' | 'bottom' | 'left' | 'right'
  content: React.ReactNode
  trigger?: 'hover' | 'click' | 'contextMenu'
  [key: string]: any
}

const setClass = setPrefixClassName('coo-popover')

const Popover: React.FC<Props> = props => {
  const { children, className, placement = 'top', content, trigger = 'hover', ...leftProps } = props

  const [visible, setVisible] = useState(false)

  const handleToggleTooltip = (isShow: boolean) => {
    setVisible(isShow)
  }

  useEffect(() => {
    if (trigger === 'click' || trigger === 'contextMenu') {
      const close = () => handleToggleTooltip(false)
      window.addEventListener('click', close, false)
      return () => window.removeEventListener('click', close)
    }
    return
  }, [])

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
    onMouseEnter: trigger === 'hover' ? () => handleToggleTooltip(true) : undefined,
    onMouseLeave: trigger === 'hover' ? () => handleToggleTooltip(false) : undefined,
    onClick: trigger === 'click' ? onPopoverClick : undefined,
    onContextMenu: trigger === 'contextMenu' ? onPopoverContextMenu : undefined,
  }

  const contentOnTrigger = {
    onClick: 'contextMenu'
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
          {content}
          <div className={classnames(setClass('content-icon'))}>
            <Icon name="down" />
          </div>
        </div>
      </Transition>
    </div>
  )
}

export default Popover
