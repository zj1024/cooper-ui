import * as React from 'react'
import * as ReactDOM from 'react-dom'
import classnames from 'classnames'
import Icon from '../icon'
import { setPrefixClassName } from '../utils'
import { isString } from '../utils'

import './style.scss'

interface Props {
  message: React.ReactNode
  type?: 'success' | 'info' | 'error' | 'warning'
  showClose?: boolean
  placement?: 'top' | 'bottom'
}

// message function api
interface MessageFC {
  $success: (props?: any) => any
  $info: (props?: any) => any
  $error: (props?: any) => any
  $warning: (props?: any) => any
  [key: string]: any
}

const setClass = setPrefixClassName('coo-message')
const continerClassName = 'coo-message-container'
const wrapeprClassName = 'coo-message-wrapper'

const Message: MessageFC = (props: Props) => {
  const { message, type = 'info', showClose = false, placement = 'top', ...leftProps } = props

  // 创建每个message的wrapper
  const div = document.createElement('div')
  div.className = wrapeprClassName

  // 最外层的容器
  let wrapper = document.querySelector(`.${continerClassName}`)
  if (wrapper === null) {
    // dom上没有message
    wrapper = document.createElement('div')
    wrapper.className = continerClassName
    document.body.appendChild(wrapper)
  }
  wrapper.appendChild(div)

  const component = (
    <div className={classnames(setClass(), setClass(type))} {...leftProps}>
      <Icon name={type} className={setClass('icon')} />
      <div className={setClass('content')}>{message}</div>
    </div>
  )

  ReactDOM.render(component, div)

  const destory = () => {
    const isUnmount = ReactDOM.unmountComponentAtNode(div)
    if (isUnmount && div.parentNode) {
      if (wrapper!.childNodes.length === 1) {
        // 最后一个message
        document.body.removeChild(div.parentNode)
      } else {
        div.parentNode.removeChild(div)
      }
    }
  }

  return {
    close: destory,
  }
}

Message.$success = () => {}
Message.$info = () => {}
Message.$error = () => {}
Message.$warning = () => {}

/**
 * @function api
 * Declare that the direct reference to the function is invalid
 */
;['$success', '$info', '$error', '$warning'].forEach((type: any) => {
  Message[type] = (props: Props) => {
    const config = isString(props) ? { message: props } : { ...props }
    return Message.call(null, Object.assign({ type: type.substr(1) }, config))
  }
})

const $success = Message.$success
const $info = Message.$info
const $error = Message.$error
const $warning = Message.$warning

export { $success, $info, $error, $warning }

export default Message
