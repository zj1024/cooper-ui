import * as React from 'react'
import classnames from 'classnames'
import Icon from '../icon'
import { setPrefixClassName } from '../utils'

import './style.scss'

interface Props {
  message: React.ReactNode
  type?: 'success' | 'info' | 'error' | 'warning'
  showClose?: boolean
  placement?: 'top' | 'bottom'
  duration?: number
  _onShowClose(): void
  [key: string]: any
}

const setClass = setPrefixClassName('coo-message')
const MessageComponent: React.FC<Props> = props => {
  const {
    message,
    type = 'info',
    showClose = false,
    placement = 'top',
    duration = 300,
    _onShowClose,
    ...leftProps
  } = props

  // 用户没有指定showClose，默认duration之后关闭
  if (duration !== 0) {
    setTimeout(() => {
      _onShowClose()
    }, duration)
  }

  return (
    <div
      className={classnames(setClass(), setClass(type), placement === 'top' && setClass('bottom'))}
      {...leftProps}>
      <Icon name={type} className={setClass('icon')} />
      <div className={setClass('content')}>{message}</div>
      {showClose && (
        <Icon onClick={() => _onShowClose()} className={setClass('close-icon')} name="close" />
      )}
    </div>
  )
}

export default MessageComponent
