import * as React from 'react'
import classnames from 'classnames'
import { setPrefixClassName } from '../utils'

import './style.scss'

interface Props {
  className?: string
}

const setClass = setPrefixClassName('coo-date-picker')

const DatePicker: React.FC<Props> = props => {
  const { children, className, ...leftProps } = props
  return (
    <div className={classnames(setClass(), className)} {...leftProps}>
      {children}
      date-picker
    </div>
  )
}

export default DatePicker
