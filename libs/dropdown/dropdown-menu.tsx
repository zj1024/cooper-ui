import * as React from 'react'
import { setPrefixClassName } from '../utils'

import './style.scss'

interface IProps {
  children: React.ReactElement
  className?: string
  [key: string]: any
}

const setClass = setPrefixClassName('coo-dropdown-menu')

const DropdownMenu: React.FC<IProps> = props => {
  const { children, className, onClick, ...leftProps } = props
  return (
    <div className={setClass()} {...leftProps}>
      {React.Children.map(children, (child: React.ReactElement) => {
        return React.cloneElement(child, { onClick })
      })}
    </div>
  )
}

export default DropdownMenu
