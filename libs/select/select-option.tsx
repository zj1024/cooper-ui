import * as React from 'react'
import classnames from 'classnames'
import { setPrefixClassName } from '../utils'

interface IProps {
  className?: string
  label: any
  value: any
  [key: string]: any
}

const setClass = setPrefixClassName('coo-select-option')

const Select: React.FC<IProps> = props => {
  const { children, label, value, className, size, ...leftProps } = props
  return (
    <div className={classnames(setClass(), setClass(size), className)} {...leftProps}>
      {/* custom template */}
      {children ? children : <span>{label}</span>}
    </div>
  )
}

export default Select
