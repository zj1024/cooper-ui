import * as React from 'react'
import classnames from 'classnames'
import { setPrefixClassName } from '../utils'

import './style.scss'

// 'default', 'success', 'warning', 'danger'
// placement left-top left-bottom right-top right-bottom
interface Props {
  className?: string
  badgeContent?: number | string
  type?: string
  bgColor?: string
  color?: string
  placement?: string
  dot?: boolean
}

const setClass = setPrefixClassName('coo-badges')

const Badges: React.FC<Props> = props => {
  const {
    className,
    children,
    badgeContent,
    color,
    bgColor,
    type = 'default',
    placement = 'right-top',
    dot = false,
    ...leftProps
  } = props
  return (
    <div className={classnames(setClass('wrapper'), className)} {...leftProps}>
      {children}
      <div
        className={classnames(
          setClass(''),
          setClass(placement),
          setClass(type),
          dot && setClass('dot'),
        )}
        style={{ background: bgColor }}>
        <span style={{ color }}>{!dot && badgeContent}</span>
      </div>
    </div>
  )
}

export default Badges
