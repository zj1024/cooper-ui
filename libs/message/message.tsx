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
  [key: string]: any
}

// message function api
interface MessageFC extends React.FC<Props> {
  $success: (props?: any) => any
  $info: (props?: any) => any
  $error: (props?: any) => any
  $warning: (props?: any) => any
}

const setClass = setPrefixClassName('coo-message')

const Message: MessageFC = props => {
  const { message, type = 'info', showClose = false, placement = 'top', ...leftProps } = props
  return (
    <div className={classnames(setClass(), setClass(type))} {...leftProps}>
      <Icon name={type} className={setClass('icon')} />
      <div className={setClass('content')}>{message}</div>
    </div>
  )
}

/**
 * @function api
 * Declare that the direct reference to the function is invalid
 */
Message.$success = () => {}
Message.$info = () => {}
Message.$error = () => {}
Message.$warning = () => {}

export default Message
