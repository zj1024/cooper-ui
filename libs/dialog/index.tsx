import * as React from 'react'
import * as ReactDOM from 'react-dom'
import Dialog from './dialog'

// 用户传入的选项
interface DialogFuncProps {
  title?: React.ReactNode
  width?: string
  message: React.ReactNode
  okText: string
  cancelText?: string
  onOk?: (params?: any) => any
  onCancel?: (params?: any) => any
}

interface PrivateProps extends DialogFuncProps {
  visible: boolean
  closable?: boolean
  mask?: boolean
  maskClosable?: boolean
  animat?: boolean
  cancelable?: boolean
}

const FactoryDialog = (props: DialogFuncProps) => {
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
      <Dialog {...renderLeftProps} onCancel={_handleCancel} header={title}>
        {message}
      </Dialog>,
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

Dialog.Alert = (props: DialogFuncProps) => {
  const config = {
    visible: true,
    closable: false,
    maskClosable: false,
    cancelable: false,
  }
  return FactoryDialog(Object.assign(props, config))
}

Dialog.Confirm = (props: DialogFuncProps) => {
  const config = {
    visible: true,
    closable: false,
    maskClosable: false,
  }
  return FactoryDialog(Object.assign(config, props))
}

Dialog.Modal = (props: DialogFuncProps) => {
  const config = {}
  return FactoryDialog(Object.assign(props, config))
}

const Alert = Dialog.Alert
const Confirm = Dialog.Confirm
const Modal = Dialog.Modal

export { Alert, Confirm, Modal }

export default Dialog
