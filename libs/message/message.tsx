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
  _onShowClose: () => void
}

const setClass = setPrefixClassName('coo-message')
const MessageComponent: React.FC<Props> = props => {
  const {
    message,
    type = 'info',
    showClose = false,
    placement = 'top',
    _onShowClose,
    ...leftProps
  } = props
  return (
    <div className={classnames(setClass(), setClass(type))} {...leftProps}>
      <Icon name={type} className={setClass('icon')} />
      <div className={setClass('content')}>{message}</div>
      {showClose && (
        <Icon onClick={() => _onShowClose()} className={setClass('close-icon')} name="close" />
      )}
    </div>
  )
}

export default MessageComponent
