import * as React from 'react'
import { useState, useEffect } from 'react'
// import { CSSTransition } from '../transition'
import classnames from 'classnames'
import { setPrefixClassName } from '../utils'

import './style.scss'

/**
 * @prop {boolean} visible open drawer
 * @prop {boolean} mask mask under the drawer
 * @prop {boolean} maskClosable click mask close drawer
 * @prop {boolean} destroyOnClose remove dom when close drawer TODO:
 * @prop {string} direction drawer content direction when opened
 * @prop {string} contentBackground drawer content background
 * @prop {number} zIndex drawer zIndex for avoid cover other drawer
 * @prop {(params?: any) => any} onMaskClose callback, click mask close the drawer
 * @prop {[key: string]: any} any allows the user to set other props automatically
 */
interface Props {
  visible: boolean
  mask?: boolean
  maskClosable?: boolean
  destroyOnClose?: boolean
  direction?: 'left' | 'right' | 'top' | 'bottom'
  contentBackground?: string
  zIndex?: number
  onCancel: (params?: any) => any
  [key: string]: any
}

const setClass = setPrefixClassName('coo-drawer')

const Drawer: React.FC<Props> = props => {
  const {
    children,
    visible,
    mask = true,
    maskClosable = true,
    destroyOnClose = false,
    direction = 'left',
    contentBackground = '#fff',
    zIndex = 1001,
    onCancel = () => {},
    ...leftProps
  } = props

  const initStyle = {
    left: {
      transform: 'translate3d(-100%, 0, 0)',
    },
    right: { transform: 'translate3d(100%, 0, 0)' },
    top: { transform: 'translate3d(0, -100%, 0)' },
    bottom: { transform: 'translate3d(0, 100%, 0)' },
  }

  const [drawerStyle, setDrawerStyle] = useState({
    display: 'none',
    ...initStyle[direction],
  })
  const [drawerMaskStyle, setDrawerMaskStyle] = useState({ display: 'none', opacity: 0 })

  const openDrawer = () => {
    setDrawerMaskStyle({ display: 'block', opacity: 0 })
    setDrawerStyle({ display: 'inline-block', ...initStyle[direction] })

    setTimeout(() => {
      setDrawerMaskStyle({ display: 'block', opacity: 1 })
      setDrawerStyle({ display: 'inline-block', transform: 'translate3d(0, 0, 0)' })
    }, 20)
  }

  const closeDrawer = () => {
    setDrawerMaskStyle({ display: 'block', opacity: 0 })
    setDrawerStyle({ display: 'inline-block', ...initStyle[direction] })

    setTimeout(() => {
      setDrawerStyle({ display: 'none', ...initStyle[direction] })
      setDrawerMaskStyle({ display: 'none', opacity: 0 })
    }, 300)
  }

  useEffect(() => {
    visible ? openDrawer() : closeDrawer()
  }, [visible])

  const onPrevent = (e: { stopPropagation: () => void }) => {
    e.stopPropagation()
  }

  const onMaskClick = () => {
    onCancel()
  }

  return (
    <div
      onClick={onMaskClick}
      className={classnames(mask && setClass('mask'))}
      style={{ zIndex, ...drawerMaskStyle }}
      {...leftProps}>
      <div
        onClick={onPrevent}
        className={classnames(setClass('content'), setClass(`content-${direction}`))}
        style={{
          backgroundColor: contentBackground,
          ...drawerStyle,
        }}>
        {children}
      </div>
    </div>
  )
}
export default Drawer
