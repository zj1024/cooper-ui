import * as React from 'react'
import classnames from 'classnames'
import { setPrefixClassName } from '../utils'

/**
 * @prop {React.ReactNode} header user content
 * @prop {always | hover} shadow card shadow timing of emergence
 * @prop {[key: string]: any} any allows the user to set other props automatically
 */
interface Props {
  header?: React.ReactNode
  footer?: React.ReactNode
  shadow?: 'always' | 'hover' | 'never'
  [key: string]: any
}

const setClass = setPrefixClassName('coo-card')

const Card: React.FC<Props> = props => {
  const { children, className, header, footer, shadow = 'always', ...leftProps } = props
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
      {footer && <div className={setClass('footer')}>{footer}</div>}
    </div>
  )
}

export default Card
