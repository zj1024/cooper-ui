import * as React from 'react'
import * as ReactDOM from 'react-dom'
import Message from './message'

// 用户传入的选项
interface MessageFuncProps {
  title?: React.ReactElement
  message: React.ReactElement
  okText: string
  cancelText?: string
  width?: string
  onOk?: (params?: any) => any
  onCancel?: (params?: any) => any
}

interface PrivateProps extends MessageFuncProps {
  visible: boolean
  closable?: boolean
  mask?: boolean
  maskClosable?: boolean
  animat?: boolean
  cancelable?: boolean
}

const FactoryMessage = (props: MessageFuncProps) => {
  const baseConfig = {
    visible: true,
    closable: true,
    mask: true,
    maskClosable: true,
    animat: true,
    title: props.title,
    message: props.message,
    okText: props.okText,
    cancelText: props.cancelText,
    width: props.width,
    onOk: props.onOk,
    onCancel: props.onCancel,
  }
  const renderProps = Object.assign(baseConfig, props)

  const _handleCancel = () => {
    props.onCancel ? props.onCancel(destory) : destory()
  }

  const render = (renderProps: PrivateProps) => {
    const { title, message, ...renderLeftProps } = renderProps
    ReactDOM.render(
      <Message {...renderLeftProps} onCancel={_handleCancel} header={title}>
        {message}
      </Message>,
      div,
    )
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
  const config = {
    visible: true,
    closable: false,
    maskClosable: false,
    cancelable: false,
  }
  return FactoryMessage(Object.assign(props, config))
}

Message.$info = (props: MessageFuncProps) => {
  const config = {
    visible: true,
    closable: false,
    maskClosable: false,
  }
  return FactoryMessage(Object.assign(config, props))
}

Message.$error = (props: MessageFuncProps) => {
  const config = {}
  return FactoryMessage(Object.assign(props, config))
}

Message.$warning = (props: MessageFuncProps) => {
  const config = {
    visible: true,
    closable: false,
    maskClosable: false,
  }
  return FactoryMessage(Object.assign(config, props))
}

const $success = Message.$success
const $info = Message.$info
const $error = Message.$error
const $warning = Message.$warning

export { $success, $info, $error, $warning }

export default Message
