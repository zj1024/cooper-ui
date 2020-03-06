import * as React from 'react'
// import classnames from 'classnames'
import { setPrefixClassName } from '../utils'

import './style.scss'

interface IProps {
  className?: string
  [key: string]: any
}

const setClass = setPrefixClassName('coo-dropdown-menu')

const DropdownMenu: React.FC<IProps> = props => {
  const { children, className, ...leftProps } = props
  return (
    <div className={setClass()} {...leftProps}>
      {children}
    </div>
  )
}

export default DropdownMenu
