import * as React from 'react'
import classnames from 'classnames'
import { setPrefixClassName } from '../utils'

interface Props {
  className?: string
  [key: string]: any
}

const setClass = setPrefixClassName('coo-example')

const Example: React.FC<Props> = props => {
  const { children, className, ...leftProps } = props
  return (
    <div className={classnames(setClass(), className)} {...leftProps}>
      {children}
    </div>
  )
}

export default Example
