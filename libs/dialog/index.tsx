import * as React from 'react'
import * as ReactDOM from 'react-dom'
import Button from '../button'
import Dialog from './dialog'

// 用户传入的选项
interface DialogFuncProps {
  title?: React.ReactElement
  message: React.ReactElement
  okText: string
  cancelText?: string
  width?: string
  onOk?: (params?: any) => any
  onCancel?: (params?: any) => any
}

// const FactoryDialog = (props: DialogFuncProps) => {

// }

interface PrivateProps extends DialogFuncProps {
  visible: boolean
  closable?: boolean
  mask?: boolean
  maskClosable?: boolean
  animat?: boolean
}

Dialog.alert = (props: DialogFuncProps) => {
  const renderProps = {
    visible: true,
    closable: false,
    maskClosable: false,
    message: props.message,
    okText: props.okText,
    width: props.width,
    beforeClose: props.onOk,
  }

  const render = (renderProps: PrivateProps) => {
    const { message, okText, onOk, ...renderLeftProps } = renderProps
    const handleOk = () => {
      onOk && onOk()
      destory()
    }
    ReactDOM.render(
      <Dialog
        {...renderLeftProps}
        onCancel={() => {}}
        footer={
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button onClick={handleOk} type="primary">
              {okText ? okText : '确认'}
            </Button>
          </div>
        }>
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

Dialog.confirm = (props: DialogFuncProps) => {
  const renderProps = {
    visible: true,
    closable: false,
    maskClosable: false,
    message: props.message,
    okText: props.okText,
    cancelText: props.cancelText,
    width: props.width,
    onOk: props.onOk,
    onCancel: props.onCancel,
  }

  const render = (renderProps: PrivateProps) => {
    const { message, okText, cancelText, onOk, onCancel, ...renderLeftProps } = renderProps
    const handleOk = () => {
      onOk && onOk()
      destory()
    }
    const handleCancel = () => {
      onCancel && onCancel()
      destory()
    }
    ReactDOM.render(
      <Dialog
        {...renderLeftProps}
        onCancel={() => {}}
        footer={
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button style={{ marginRight: '10px' }} onClick={handleCancel}>
              {cancelText ? cancelText : '取消'}
            </Button>
            <Button onClick={handleOk} type="primary">
              {okText ? okText : '确认'}
            </Button>
          </div>
        }>
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

// onCancel: (params?: any) => any
// onOk?: (params?: any) => void

Dialog.modal = (props: DialogFuncProps) => {
  const renderProps = {
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

  const render = (renderProps: PrivateProps) => {
    const { title, message, okText, cancelText, onOk, onCancel, ...renderLeftProps } = renderProps
    ReactDOM.render(
      <Dialog
        {...renderLeftProps}
        onCancel={destory}
        okText={okText}
        cancelText={cancelText}
        header={title}>
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

const alert = Dialog.alert
const confirm = Dialog.confirm
const modal = Dialog.modal

export { alert, confirm, modal }

export default Dialog
