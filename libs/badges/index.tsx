import * as React from 'react'
import classnames from 'classnames'
import { setPrefixClassName } from '../utils'

import './style.scss'

/**
 * @prop {default | success | warning | danger} type badges color
 * @prop {left-top | left-bottom | right-top | right-bottom} placement badges position
 * @prop {string} bgColor user custom set badges background color
 * @prop {string} color user custom set badges font color
 * @prop {boolean} dot badges only has a dot not have text
 * @prop {[key: string]: any} any allows the user to set other props automatically
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
