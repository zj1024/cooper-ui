import * as React from 'react'
import { useEffect } from 'react'
import * as ReactDOM from 'react-dom'
import { Icon, Button } from '../'
import { setPrefixClassName } from '../utils'
import './style.scss'

interface Props {
  children?: React.ReactNode | string
  visible: boolean
  width?: string | number
  header?: React.ReactNode | string
  footer?: React.ReactNode | string
  onCancel: () => void
  closable?: boolean
  mask?: boolean
  maskClosable?: boolean
  animat?: boolean
  [key: string]: any
}

const getClass = setPrefixClassName('c-dialog')

const Dialog: React.FC<Props> = props => {
  const {
    visible = false,
    width,
    header,
    footer,
    onCancel = () => {},
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
    <div className={getClass()} style={{ width, animation }}>
      {closable !== true ? null : (
        <Icon name="close" className={getClass('close')} onClick={onCancel} />
      )}
      {header ? <header className={getClass('header')}>{header}</header> : null}
      <main className={getClass('main')}>{props.children}</main>
      {/* judge footer show or hidden or custom */}
      {footer ? (
        <footer className={getClass('footer')}>{footer}</footer>
      ) : footer !== null ? (
        <footer className={getClass('footer')}>
          <div className={getClass('footer-button-wrapper')}>
            <Button className={getClass('footer-button-cancel')} onClick={onCancel}>
              取消
            </Button>
            <Button className={getClass('footer-button-ok')} type="primary">
              确认
            </Button>
          </div>
        </footer>
      ) : null}
      {/* create portal to close modal */}
      {mask === true &&
        ReactDOM.createPortal(
          <div onClick={maskOnClick} className={getClass('mask')} style={{ animation }}></div>,
          document.body,
        )}
    </div>
  ) : null
}

export default Dialog
