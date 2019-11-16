import * as React from 'react'
import * as ReactDOM from 'react-dom'
import Button from '../button'
import Dialog from './dialog'

// 用户传入的选项
interface DialogFuncProps {
  title?: React.ReactElement
  message: React.ReactElement
  okText: string
  width?: string
  beforeClose?: (params?: any) => any
}

// 内部自定义的选项
interface RenderProps extends DialogFuncProps {
  visible: boolean
  closable: boolean
  maskClosable: boolean
}

Dialog.alert = (props: DialogFuncProps) => {
  const renderProps = {
    visible: true,
    closable: false,
    maskClosable: false,
    message: props.message,
    okText: props.okText,
    width: props.width,
    beforeClose: props.beforeClose,
  }

  const render = (renderProps: RenderProps) => {
    const { message, okText, beforeClose, ...renderLeftProps } = renderProps
    const handleClose = () => {
      beforeClose && beforeClose()
      destory()
    }
    ReactDOM.render(
      <Dialog
        {...renderLeftProps}
        onCancel={() => {}}
        footer={
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button onClick={handleClose} type="primary">
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
  console.log(props)
}

Dialog.modal = (props: DialogFuncProps) => {
  console.log(props)
}

const alert = Dialog.alert
const confirm = Dialog.confirm
const modal = Dialog.modal

export { alert, confirm, modal }

export default Dialog
