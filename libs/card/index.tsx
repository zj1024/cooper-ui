import * as React from 'react'
import classnames from 'classnames'
import { setPrefixClassName } from '../utils'

import './style.scss'

interface Props {
  className?: string
  header?: React.ReactNode
  shadow?: string
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
