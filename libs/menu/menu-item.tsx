import * as React from 'react'
import classnames from 'classnames'
import { setPrefixClassName } from '../utils'

import './style.scss'

export type index = string | number | null

interface Props {
  className?: string
  index: index
  _onchange: (index: index) => void
}

const setClass = setPrefixClassName('coo-menu')

const MenuItem: React.FC<Props> = props => {
  const { children, className, _onchange, index, ...leftProps } = props

  return (
    <div
      className={classnames(setClass('item'), className)}
      onClick={() => _onchange(index)}
      {...leftProps}>
      {children}
    </div>
  )
}

export default MenuItem
