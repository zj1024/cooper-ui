import * as React from 'react'
import { setPrefixClassName } from '../utils'
import classNames from 'classnames'

interface IProps {
  className?: string
  [key: string]: any
}

const setClass = setPrefixClassName('coo-dropdown-item')

const DropdownItem: React.FC<IProps> = props => {
  const { children, className, onClick, ...leftProps } = props
  return (
    <div className={classNames(setClass(), className)} {...leftProps} onClick={onClick}>
      {children}
    </div>
  )
}

export default DropdownItem
