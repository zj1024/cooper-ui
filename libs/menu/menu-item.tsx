import * as React from 'react'
import classnames from 'classnames'
import { setPrefixClassName } from '../utils'

import './style.scss'

export type index = string | number | null

interface PrivateProps {
  _onchange: (index: index) => void
  _closesubmenu: (params: boolean) => void
}

interface Props extends PrivateProps {
  className?: string
  index: index
  [key: string]: any
}

const setClass = setPrefixClassName('coo-menu')

const MenuItem: React.FC<Props> = props => {
  const { children, className, _onchange, index, _closesubmenu, ...leftProps } = props
  const _onClick = () => {
    _onchange(index)
    _closesubmenu && _closesubmenu(false)
  }
  return (
    <div className={classnames(setClass('item'), className)} onClick={_onClick} {...leftProps}>
      {children}
    </div>
  )
}

export default MenuItem
