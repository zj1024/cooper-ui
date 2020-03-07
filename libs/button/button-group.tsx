import * as React from 'react'
import classnames from 'classnames'
import { setPrefixClassName } from '../utils'

import './style.scss'

interface Props {
  vertical?: boolean
  [key: string]: any
}

const setClass = setPrefixClassName('coo-button-group')

const Button: React.FC<Props> = props => {
  const { children, vertical = false, ...leftProps } = props
  return (
    <div className={classnames(setClass(), vertical && setClass('vertical'))} {...leftProps}>
      {children}
    </div>
  )
}

export default Button
