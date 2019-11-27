import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { isString } from '../utils'
import Message from './message'

// 用户传入的选项
interface MessageFuncProps {
  message: React.ReactNode
  type?: 'success' | 'info' | 'error' | 'warning'
  showClose?: boolean
  placement?: 'top' | 'bottom'
  duration?: number
}

interface PrivateProps extends MessageFuncProps {}

const FactoryMessage = (props: MessageFuncProps) => {
  const renderProps = { ...props }

  const render = (renderProps: PrivateProps) => {
    const { message, duration = 3000, ...renderLeftProps } = renderProps
    ReactDOM.render(
      <Message duration={duration} message={message} {...renderLeftProps}></Message>,
      div,
    )
    setTimeout(() => {
      destory()
    }, duration)
  }

  const destory = () => {
    const isUnmount = ReactDOM.unmountComponentAtNode(div)
    if (isUnmount && div.parentNode) {
      div.parentNode!.removeChild(div)
    }
  }

  const div = document.createElement('div')
  document.body.appendChild(div)

  render(renderProps)

  return {
    close: destory,
  }
}

Message.$success = (props: MessageFuncProps) => {
  const config = isString(props) ? { message: props } : { ...props }
  return FactoryMessage(Object.assign({ type: 'success' }, config))
}

Message.$info = (props: MessageFuncProps) => {
  const config = isString(props) ? { message: props } : { ...props }
  return FactoryMessage(Object.assign({ type: 'info' }, config))
}

Message.$error = (props: MessageFuncProps) => {
  const config = isString(props) ? { message: props } : { ...props }
  return FactoryMessage(Object.assign({ type: 'error' }, config))
}

Message.$warning = (props: MessageFuncProps) => {
  const config = isString(props) ? { message: props } : { ...props }
  return FactoryMessage(Object.assign({ type: 'warning' }, config))
}

const $success = Message.$success
const $info = Message.$info
const $error = Message.$error
const $warning = Message.$warning

export { $success, $info, $error, $warning }

export default Message
