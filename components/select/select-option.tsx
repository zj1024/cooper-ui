import * as React from 'react'
import classnames from 'classnames'
import { setPrefixClassName } from '../utils'

interface IProps {
  className?: string
  size: 'large' | 'middle' | 'small'
  label: any
  value: any
  disabled: boolean
  [key: string]: any
}

const setClass = setPrefixClassName('coo-select-option')

const Select: React.FC<IProps> = props => {
  const { children, label, value, className, size, disabled, ...leftProps } = props

  return (
    <div
      className={classnames(
        setClass(),
        setClass(size),
        disabled && setClass('disabled'),
        className,
      )}
      {...leftProps}>
      {/* custom template */}
      {children ? children : <span>{label}</span>}
    </div>
  )
}

export default Select
