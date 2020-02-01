import * as React from 'react'
// import { useState } from 'react'
import classnames from 'classnames'
import { setPrefixClassName } from '../utils'

import './style.scss'

interface Props {
  className?: string
}

const setClass = setPrefixClassName('coo-date-picker')

const DatePicker: React.FC<Props> = props => {
  const { children, className, ...leftProps } = props
  // const weeks = ['一', '二', '三', '四', '五', '六', '日']
  // const months = ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二']

  // const mode = useState<string>('')

  return (
    <div className={classnames(setClass(), className)} {...leftProps}>
      {children}
      date-picker
    </div>
  )
}

export default DatePicker
