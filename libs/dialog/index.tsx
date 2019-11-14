import * as React from 'react'
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
  [key: string]: any
}

const getClass = setPrefixClassName('c-dialog')

const Dialog: React.FC<Props> = props => {
  const { visible, width, header, footer } = props
  return visible ? (
    <div className={getClass()} style={{ width }}>
      <Icon name="close" className={getClass('close')} />
      {header ? <header className={getClass('header')}>{header}</header> : null}
      <main className={getClass('main')}>{props.children}</main>
      {/* judge footer show or hidden or custom */}
      {footer ? (
        <footer className={getClass('footer')}>{footer}</footer>
      ) : footer !== null ? (
        <footer className={getClass('footer')}>
          <div className={getClass('footer-button-wrapper')}>
            <Button className={getClass('footer-button-cancel')}>取消</Button>
            <Button className={getClass('footer-button-ok')} type="primary">
              确认
            </Button>
          </div>
        </footer>
      ) : null}
      {/* create portal to close modal */}
      {ReactDOM.createPortal(<div className={getClass('mask')}></div>, document.body)}
    </div>
  ) : null
}

export default Dialog
