import * as React from 'react'
import classnames from 'classnames'
import { setPrefixClassName } from '../utils'

import './style.scss'

interface Props {
  className?: string
  index: string
}

const setClass = setPrefixClassName('coo-menu')

const MenuItem: React.FC<Props> = props => {
  const { children, className, ...leftProps } = props

  return (
    <div className={classnames(setClass('item'), className)} {...leftProps}>
      {children}
    </div>
  )
}

export default MenuItem
