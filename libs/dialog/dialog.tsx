import * as React from 'react'
import { useState, useEffect } from 'react'
import * as ReactDOM from 'react-dom'
import classnames from 'classnames'
import { setPrefixClassName } from '../utils'

import Icon from '../icon'
import Button from '../button'

import './style.scss'

/**
 * @prop {boolean} visible prop passed in by user
 * @prop {string} width custom dialog content width
 * @prop {React.ReactNode} header dialog header
 * @prop {React.ReactNode} footer dialog footer
 * @prop {string} okText custom ok button text
 * @prop {string} cancelText custom cancel button text
 * @prop {boolean} closable dialog the close button in the upper right corner
 * @prop {boolean} animat dialog open or close animat
 * @prop {boolean} mask dialog mask
 * @prop {boolean} maskClosable click mask close dialog
 * @prop {boolean} lockScroll dialog hidden scrollbar when open state
 * @prop {(params?: any) => void} onOk click ok button callback
 * @prop {(params?: any) => any} onCancel click cancel button callback
 * @prop {[key: string]: any} any allows the user to set other props automatically
 */
export interface Props {
  visible: boolean
  width?: string
  header?: React.ReactNode
  footer?: React.ReactNode
  okText?: string
  cancelText?: string
  cancelable?: boolean
  closable?: boolean
  animat?: boolean
  mask?: boolean
  maskClosable?: boolean
  lockScroll?: boolean
  onOk?: (params?: any) => void
  onCancel: (params?: any) => any
  [key: string]: any
}

// dialog function api
interface DialogFC extends React.FC<Props> {
  Modal: (props?: any) => any
  Alert: (props?: any) => any
  Confirm: (props?: any) => any
}

const setClass = setPrefixClassName('coo-dialog')

const Dialog: DialogFC = props => {
  /**
   * @prop {object} style custom style
   */
  const {
    className = '',
    children,
    style = {},
    visible = false,
    width,
    header,
    footer,
    okText = '确认',
    cancelText = '取消',
    cancelable = true,
    closable = true,
    animat = true,
    mask = true,
    maskClosable = true,
    lockScroll = true,
    onOk = () => {},
    onCancel = () => {},
    ...leftProps
  } = props

  // create style only include 'display' and 'opacity' to animat
  const createStyle = (display: string = 'none', opacity: number = 0) => {
    return {
      display,
      opacity,
    }
  }

  // animat style include 'display' and 'opacity'
  const [animation, setAnimation] = useState(createStyle('none', 0))

  // click mask close dialog
  const maskOnClick = async () => {
    if (maskClosable) {
      await closeAnimat()
      onCancel()
    }
  }

  // private funtion to open disalog with animat or not
  const openAnimat = () => {
    if (animat) {
      setAnimation(createStyle('block', 0))
      setTimeout(() => {
        setAnimation(createStyle('block', 1))
      }, 20)
    } else {
      setAnimation(createStyle('block', 1))
    }
  }

  // private funtion to close disalog with animat or not
  const closeAnimat = () => {
    return new Promise(resolve => {
      if (animat) {
        setAnimation(createStyle('block', 0))
        setTimeout(() => {
          setAnimation(createStyle('none', 0))
          resolve()
        }, 300)
      } else {
        setAnimation(createStyle('none', 0))
        resolve()
      }
    })
  }

  // The user clicks ok or cancel the callback
  const onDialogCancel = async () => {
    await closeAnimat()
    onCancel()
  }

  const onDialogOk = async () => {
    if (onOk) {
      onOk(async () => {
        await closeAnimat()
        onCancel()
      })
    } else {
      await closeAnimat()
      onCancel()
    }
  }

  /**
   * lockScroll
   * originBodyOverflow record user custom body's overflow
   * when dialog close, body's overflow equal user custom value
   */
  let originBodyOverflow: string = ''
  useEffect(() => {
    if (visible) {
      openAnimat()
    }
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
  }, [visible])

  return visible ? (
    <div
      className={classnames(setClass(), className)}
      style={{ width, ...animation, ...style }}
      {...leftProps}>
      {closable !== true ? null : (
        <Icon name="close" className={setClass('close')} onClick={onCancel} />
      )}
      {header !== null ? <header className={setClass('header')}>{header || '提示'}</header> : null}
      <main className={setClass('main')}>{children}</main>
      {/* judge footer show or hidden or custom */}
      {footer ? (
        <footer className={setClass('footer')}>{footer}</footer>
      ) : footer !== null ? (
        <footer className={setClass('footer')}>
          <div className={setClass('footer-button-wrapper')}>
            {cancelable === true ? (
              <Button className={setClass('footer-button-cancel')} onClick={onDialogCancel}>
                {cancelText}
              </Button>
            ) : (
              false
            )}
            <Button className={setClass('footer-button-ok')} type="primary" onClick={onDialogOk}>
              {okText}
            </Button>
          </div>
        </footer>
      ) : null}
      {/* create portal to close modal */}
      {mask === true &&
        ReactDOM.createPortal(
          <div onClick={maskOnClick} className={setClass('mask')} style={{ ...animation }}></div>,
          document.body,
        )}
    </div>
  ) : null
}

/**
 * @function api
 * Declare that the direct reference to the function is invalid
 */
Dialog.Alert = () => {}
Dialog.Confirm = () => {}
Dialog.Modal = () => {}

export default Dialog
