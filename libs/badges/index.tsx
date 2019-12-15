import * as React from 'react'
import classnames from 'classnames'
import { setPrefixClassName } from '../utils'

import './style.scss'

/**
 * @type {default | success | warning | danger} badges color
 * @placement {left-top | left-bottom | right-top | right-bottom} badges position
 * @bgColor {string} user custom set badges background color
 * @color {string} user custom set badges font color
 * @dot {boolean} badges only has a dot not have text
 * @any {[key: string]: any} allows the user to set other props automatically
 */
interface Props {
  className?: string
  type?: string
  placement?: string
  badgeContent?: number | string
  bgColor?: string
  color?: string
  dot?: boolean
  [key: string]: any
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
