import * as React from 'react'
import { setPrefixClassName } from '../utils'
import classNames from 'classnames'

interface IProps {
  className?: string
  customClick?: (params?: any) => any
  disabled?: boolean
  [key: string]: any
}

const setClass = setPrefixClassName('coo-dropdown-item')

const DropdownItem: React.FC<IProps> = props => {
  const { children, className, onClick, customClick, disabled, ...leftProps } = props

  const combineClick = () => {
    if (!disabled) {
      customClick && customClick()
      onClick()
    }
  }

  return (
    <div
      className={classNames(setClass(), disabled && setClass('disabled'), className)}
      onClick={combineClick}
      {...leftProps}>
      {children}
    </div>
  )
}

export default DropdownItem
