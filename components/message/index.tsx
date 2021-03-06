import * as React from 'react'
import * as ReactDOM from 'react-dom'
import classnames from 'classnames'

import { isString } from '../utils'
import MessageComponent from './message'

interface Props {
  message: React.ReactNode
  showClose?: boolean
  placement?: 'top' | 'bottom'
  duration?: number
  [key: string]: any
}

// message function api
interface MessageFC {
  success(props?: any): any
  info(props?: any): any
  error(props?: any): any
  warning(props?: any): any
  [key: string]: any
}

const Message: MessageFC = (props: Props) => {
  const { placement = 'top' } = props
  const containerClassName =
    placement === 'bottom' ? 'coo-message-container-bottom' : 'coo-message-container'
  const wrapperClassName =
    placement === 'bottom' ? 'coo-message-wrapper-bottom' : 'coo-message-wrapper'
  const enterClassName = 'coo-message-enter-animat'
  const exitClassName = 'coo-message-exit-animat'

  // 创建每个message的wrapper
  const div = document.createElement('div')
  div.setAttribute('class', classnames(wrapperClassName, enterClassName))

  let containerDOM = document.querySelector(`.${containerClassName}`)
  if (!containerDOM) {
    containerDOM = document.createElement('div')
    containerDOM.setAttribute('class', containerClassName)
    document.body.appendChild(containerDOM)
  }
  containerDOM.appendChild(div)

  const _onShowClose = () => {
    destory()
  }

  const component = <MessageComponent _onShowClose={_onShowClose} {...props}></MessageComponent>

  ReactDOM.render(component, div)

  const destory = () => {
    div.setAttribute('class', `${wrapperClassName} ${exitClassName}`)
    // 过度动画
    setTimeout(() => {
      const isUnmount = ReactDOM.unmountComponentAtNode(div)
      if (isUnmount && div.parentNode) {
        div.parentNode.removeChild(div)
      }
    }, 280)
  }

  return {
    close: destory,
  }
}

Message.success = () => {}
Message.info = () => {}
Message.error = () => {}
Message.warning = () => {}

/**
 * @function api
 * Declare that the direct reference to the function is invalid
 */
;['success', 'info', 'error', 'warning'].forEach((type: any) => {
  Message[type] = (props: Props) => {
    const config = isString(props) ? { message: props } : { ...props }
    return Message.call(null, { type, ...config })
  }
})

const success = Message.success
const info = Message.info
const error = Message.error
const warning = Message.warning

export { success, info, error, warning }

export default Message
