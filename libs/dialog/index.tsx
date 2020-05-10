import * as React from 'react'
import * as ReactDOM from 'react-dom'
import Dialog from './dialog'

/**
 * @prop {React.ReactNode} title like dialog props header
 * @prop {React.ReactNode} message like dialog props children
 * @prop {string} width like dialog props width
 * @prop {string} okText like dialog props okText
 * @prop {string} cancelText like dialog props cancelText
 * @prop {(params?: any) => any} onOk like dialog props onOk
 * @prop {(params?: any) => any} onCancel like dialog props onCancel
 */
interface DialogFuncProps {
  title?: React.ReactNode
  message: React.ReactNode
  width?: string
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
  const renderProps = { ...baseConfig, ...props }

  const _handleCancel = () => {
    props.onCancel && props.onCancel()
    destory()
  }

  const div = document.createElement('div')
  document.body.appendChild(div)

  const render = (renderProps: PrivateProps) => {
    const { title, message, ...renderLeftProps } = renderProps

    ReactDOM.render(
      <Dialog {...renderLeftProps} onCancel={_handleCancel} header={title}>
        {message}
      </Dialog>,
      div,
    )
  }

  const update = (updateProps: PrivateProps) => {
    render(Object.assign({}, renderProps, updateProps))
  }

  const destory = () => {
    const isUnmount = ReactDOM.unmountComponentAtNode(div)
    if (isUnmount && div.parentNode) {
      div.parentNode!.removeChild(div)
    }
  }

  render(renderProps)
  return {
    close: destory,
    update,
  }
}

Dialog.Alert = (props: DialogFuncProps) => {
  const config = {
    visible: true,
    closable: false,
    maskClosable: false,
    cancelable: false,
    title: null,
    footerStyle: { border: 'none' },
  }
  return FactoryDialog({ ...props, ...config })
}

Dialog.Confirm = (props: DialogFuncProps) => {
  const config = {
    visible: true,
    closable: false,
    maskClosable: false,
  }
  return FactoryDialog({ ...props, ...config })
}

Dialog.Modal = (props: DialogFuncProps) => {
  const config = {}
  return FactoryDialog({ ...props, ...config })
}

const Alert = Dialog.Alert
const Confirm = Dialog.Confirm
const Modal = Dialog.Modal

export { Alert, Confirm, Modal }

export default Dialog
