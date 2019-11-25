import * as React from 'react'
import { useState } from 'react'
import classnames from 'classnames'
import Transition from '../transition'
import { setPrefixClassName } from '../utils'

import './style.scss'

interface Props {
  className?: string
  content: React.ReactNode
  placement?: 'top' | 'bottom' | 'left' | 'right'
}

const setClass = setPrefixClassName('coo-tooltip')

const Tooltip: React.FC<Props> = props => {
  const { children, className, content, placement = 'top', ...leftProps } = props

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
          <span>{content}</span>
        </div>
      </Transition>
    </div>
  )
}

export default Tooltip
