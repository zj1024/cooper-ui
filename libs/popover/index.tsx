import * as React from 'react'
import { useState } from 'react'
import classnames from 'classnames'
import { setPrefixClassName } from '../utils'

import './style.scss'

interface Props {
  className?: string
  placement?: 'top' | 'bottom' | 'left' | 'right'
}

const setClass = setPrefixClassName('coo-tooltip')

const Popover: React.FC<Props> = props => {
  const { children, className, placement = 'top', ...leftProps } = props

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
      <div
        className={classnames(
          setClass('content'),
          visible ? setClass('content-show') : setClass('content-hidden'),
          setClass(`content-${placement}`),
        )}>
        <i className={classnames(setClass('content-icon'))}></i>
        <div>{children}</div>
      </div>
    </div>
  )
}

export default Popover
