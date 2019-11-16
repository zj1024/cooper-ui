import * as React from 'react'
import { useEffect } from 'react'
import * as ReactDOM from 'react-dom'
import { Icon, Button } from '../'
import { setPrefixClassName } from '../utils'
import './style.scss'

export interface Props {
  children?: React.ReactNode | string
  visible: boolean
  width?: string | number
  header?: React.ReactNode | string
  footer?: React.ReactNode | string
  onCancel: (params?: any) => any
  onOk?: (params?: any) => void
  closable?: boolean
  mask?: boolean
  maskClosable?: boolean
  animat?: boolean
  [key: string]: any
}

interface DialogFC extends React.FC<Props> {
  modal?: (props?: any) => any
  alert?: (props?: any) => any
  confirm?: (props?: any) => any
}

const setClass = setPrefixClassName('c-dialog')

const Dialog: DialogFC = props => {
  const {
    visible = false,
    width,
    header,
    footer,
    onCancel = () => {},
    onOk,
    closable = true,
    mask = true,
    maskClosable = true,
    lockScroll = true,
    animat = true,
  } = props

  // maskClosable
  const maskOnClick = () => {
    if (maskClosable === true) {
      onCancel()
    }
  }

  // The user clicks ok to cancel the callback
  const _handleCancel = () => {
    onCancel && onCancel()
  }
  const _handleOk = () => {
    onOk ? onOk(onCancel) : onCancel()
  }

  /**
   * closeAnimat
   */
  let animation: string = ''
  if (animat === true) {
    animation = 'cooperDialogShow 0.3s ease'
  }

  /**
   * lockScroll
   * originBodyOverflow record user custom body's overflow
   * when dialog close, body's overflow equal user custom value
   */
  let originBodyOverflow: string = ''
  useEffect(() => {
    if (visible && lockScroll === true) {
      const bodyOverflow = window.getComputedStyle(document.body, null)['overflow']
      if (bodyOverflow !== 'hidden') {
        originBodyOverflow = bodyOverflow
        document.body.style.overflow = 'hidden'
      }
    }
    return () => {
      const bodyOverflow = window.getComputedStyle(document.body, null)['overflow']
      if (visible && bodyOverflow === 'hidden') {
        document.body.style.overflow = originBodyOverflow
      }
    }
  })

  return visible ? (
    <div className={setClass()} style={{ width, animation }}>
      {closable !== true ? null : (
        <Icon name="close" className={setClass('close')} onClick={onCancel} />
      )}
      {header !== null ? <header className={setClass('header')}>{header || '提示'}</header> : null}
      <main className={setClass('main')}>{props.children}</main>
      {/* judge footer show or hidden or custom */}
      {footer ? (
        <footer className={setClass('footer')}>{footer}</footer>
      ) : footer !== null ? (
        <footer className={setClass('footer')}>
          <div className={setClass('footer-button-wrapper')}>
            <Button className={setClass('footer-button-cancel')} onClick={_handleCancel}>
              取消
            </Button>
            <Button className={setClass('footer-button-ok')} type="primary" onClick={_handleOk}>
              确认
            </Button>
          </div>
        </footer>
      ) : null}
      {/* create portal to close modal */}
      {mask === true &&
        ReactDOM.createPortal(
          <div onClick={maskOnClick} className={setClass('mask')} style={{ animation }}></div>,
          document.body,
        )}
    </div>
  ) : null
}

export default Dialog
