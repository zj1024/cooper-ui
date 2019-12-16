import * as React from 'react'
import classnames from 'classnames'
import { setPrefixClassName } from '../utils'

import './style.scss'

/**
 * @prop {React.ReactNode} header user content
 * @prop {always | hover} shadow card shadow timing of emergence
 * @prop {[key: string]: any} any allows the user to set other props automatically
 */
interface Props {
  header?: React.ReactNode
  shadow?: string
  [key: string]: any
}

const setClass = setPrefixClassName('coo-card')

const Card: React.FC<Props> = props => {
  const { children, className, header, shadow = 'always', ...leftProps } = props
  return (
    <div
      className={classnames(
        setClass(),
        className,
        shadow === 'always' && setClass('has-shadow'),
        shadow === 'hover' && setClass('hover-shadow'),
      )}
      {...leftProps}>
      {header && <div className={setClass('header')}>{header}</div>}
      <div className={setClass('body')}>{children}</div>
    </div>
  )
}

export default Card
