import * as React from 'react'
import classnames from 'classnames'
import { setPrefixClassName } from '../utils'

import Icon from '../icon'

interface Props {
  className?: string
  style?: React.CSSProperties
  status?: 'success' | 'error' | 'info' | 'warning' | '404' | 'warning'
  icon?: React.ReactNode
  title?: React.ReactNode
  content?: React.ReactNode
  [key: string]: any
}
const setClass = setPrefixClassName('coo-result')

const Result: React.FC<Props> = props => {
  const { className, status = 'info', icon, title, content, ...leftProps } = props

  return (
    <div className={classnames(setClass(), className)} {...leftProps}>
      <div className={setClass('icon')}>{icon ? icon : <Icon name={`result-${status}`} />}</div>
      {title && <div className={setClass('title')}>{title}</div>}
      {content && <div className={setClass('content')}>{content}</div>}
    </div>
  )
}

export default Result
