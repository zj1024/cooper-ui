import * as React from 'react'
import classnames from 'classnames'
import { setPrefixClassName } from '../utils'

export type index = string | number | null

interface PrivateProps {
  onchange(index: index): void
  closeSubmenu(params: boolean): void
}

interface Props extends PrivateProps {
  className?: string
  index: index
  [key: string]: any
}

const setClass = setPrefixClassName('coo-menu')

const MenuItem: React.FC<Props> = props => {
  const { children, className, onchange, index, closeSubmenu, ...leftProps } = props
  const onClick = () => {
    onchange(index)
    closeSubmenu && closeSubmenu(false)
  }
  return (
    <div className={classnames(setClass('item'), className)} onClick={onClick} {...leftProps}>
      {children}
    </div>
  )
}

export default MenuItem
