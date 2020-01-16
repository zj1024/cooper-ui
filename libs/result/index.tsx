import * as React from 'react'
import classnames from 'classnames'
import { setPrefixClassName } from '../utils'
// import * as types from './types'

import Icon from '../icon'

import './style.scss'

interface Props {
  className?: string
  style?: React.CSSProperties
  status: string
  icon?: React.ReactNode
  title?: React.ReactNode
  content?: React.ReactNode
}

const setClass = setPrefixClassName('coo-result')

const Result: React.FC<Props> = props => {
  const { className, status = 'info', icon, title, content, ...leftProps } = props
  console.log(icon)
  return (
    <div className={classnames(setClass(), className)} {...leftProps}>
      <div className={setClass('icon')}>{icon ? icon : <Icon name={`result-${status}`} />}</div>
      {title && <div className={setClass('title')}>{title}</div>}
      {content && <div className={setClass('content')}>{content}</div>}
    </div>
  )
}

export default Result
