import * as React from 'react'
import classnames from 'classnames'
import { setPrefixClassName } from '../utils'

interface IProps {
  className?: string
}

const setClass = setPrefixClassName('coo-example')

const Example: React.FC<IProps> = props => {
  const { children, className, ...leftProps } = props
  return (
    <div className={classnames(setClass(), className)} {...leftProps}>
      {children}
      slider
    </div>
  )
}

export default Example
