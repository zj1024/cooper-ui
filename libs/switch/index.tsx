import * as React from 'react'
import { useState } from 'react'
import classnames from 'classnames'
import { setPrefixClassName } from '../utils'

import './style.scss'

interface Props {
  className?: string
}

const setClass = setPrefixClassName('coo-switch')

const Switch: React.FC<Props> = props => {
  const { children, className, ...leftProps } = props
  const [status, setStatus] = useState(false)

  console.log(status, setStatus)
  return (
    <div className={classnames(setClass(), className)} {...leftProps}>
      {children}test
    </div>
  )
}

export default Switch
