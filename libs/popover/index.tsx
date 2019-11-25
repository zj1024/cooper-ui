import * as React from 'react'
import { useState } from 'react'
import classnames from 'classnames'
import { Transition } from '../'
import { setPrefixClassName } from '../utils'

import './style.scss'

interface Props {
  className?: string
  placement?: 'top' | 'bottom' | 'left' | 'right'
  content: React.ReactNode
}

const setClass = setPrefixClassName('coo-popover')

const Popover: React.FC<Props> = props => {
  const { children, className, placement = 'top', content, ...leftProps } = props

  const [visible, setVisible] = useState(false)

  const handleToggleTooltip = (isShow: boolean) => {
    setVisible(isShow)
  }

  return (
    <div
      className={classnames(setClass(), className)}
      {...leftProps}
      onMouseEnter={() => handleToggleTooltip(true)}
      onMouseLeave={() => handleToggleTooltip(false)}>
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
