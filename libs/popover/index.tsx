import * as React from 'react'
import { useState } from 'react'
import classnames from 'classnames'
import { Transition } from '../'
import { setPrefixClassName } from '../utils'

import './style.scss'

enum Trigger {
  hover = 'hover',
  click = 'click',
  contextMenu = 'contextMenu',
  focus = 'focus',
}

interface Props {
  className?: string
  placement?: 'top' | 'bottom' | 'left' | 'right'
  content: React.ReactNode
  trigger?: Trigger
}

const setClass = setPrefixClassName('coo-popover')

const Popover: React.FC<Props> = props => {
  const { children, className, placement = 'top', content, trigger = 'click', ...leftProps } = props

  const [visible, setVisible] = useState(false)

  const handleToggleTooltip = (isShow: boolean) => {
    setVisible(isShow)
  }

  const onTrigger = {
    // hover trigger
    onMouseEnter: trigger === 'hover' ? () => handleToggleTooltip(true) : undefined,
    onMouseLeave: trigger === 'hover' ? () => handleToggleTooltip(false) : undefined,
    onClick: trigger === 'click' ? () => handleToggleTooltip(!visible) : undefined,
    onContextMenu: trigger === 'contextMenu' ? () => handleToggleTooltip(!visible) : undefined,
    onFocus: trigger === 'focus' ? () => handleToggleTooltip(true) : undefined,
  }

  return (
    <div className={classnames(setClass(), className)} {...onTrigger} {...leftProps}>
      <div className={setClass('children')}>{children}</div>
      <Transition visible={visible}>
        <div className={classnames(setClass('content'), setClass(`content-${placement}`))}>
          <i className={classnames(setClass('content-icon'))}></i>
          {content}
        </div>
      </Transition>
    </div>
  )
}

export default Popover
