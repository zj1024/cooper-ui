import * as React from 'react'
import { useState } from 'react'
import { CSSTransition } from '../transition'
import classnames from 'classnames'
import { setPrefixClassName } from '../utils'

import './style.scss'

interface Props {
  children: React.ReactElement
  visible: boolean
  mask?: boolean
  destroyOnClose?: Boolean
  direction?: string
  contentBackground?: string
  zIndex?: number
  onMaskClose?: (params?: any) => any
}

const setClass = setPrefixClassName('coo-drawer')

const Drawer: React.FC<Props> = props => {
  const {
    children,
    visible,
    mask = true,
    direction = 'left',
    contentBackground = '#fff',
    onMaskClose = () => {},
    zIndex = 1001,
    ...leftProps
  } = props
  const [contentClassNames, setContentClassNames] = useState('')
  const contentClassName = (mode: string) => {
    return classnames(
      setClass('content'),
      setClass(`content-${direction}`),
      setClass(`content-${direction}-${mode}`),
    )
  }

  if (visible) {
    setTimeout(() => {
      setContentClassNames(contentClassName('enter'))
    }, 20)
  } else {
    Promise.resolve().then(() => {
      setContentClassNames(contentClassName('exit'))
    })
  }

  const _onPrevent = (e: any) => {
    e.stopPropagation()
  }

  const _onMaskClick = () => {
    onMaskClose()
  }

  return (
    <CSSTransition className={setClass('transition')} visible={visible}>
      <div
        onClick={_onMaskClick}
        className={classnames(mask && setClass('mask'))}
        style={{ zIndex }}
        {...leftProps}>
        <div
          onClick={_onPrevent}
          className={contentClassNames}
          style={{
            transition: zIndex > 1001 ? 'all 0.3s 0.3s' : 'all 0.3s',
            backgroundColor: contentBackground,
          }}>
          {children}
        </div>
      </div>
    </CSSTransition>
  )
}
export default Drawer
