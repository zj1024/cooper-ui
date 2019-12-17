import * as React from 'react'
import { useState, useEffect } from 'react'
import classnames from 'classnames'

import './style.scss'

interface TransitionStyles {
  exited: any
  entered: any
}

interface Props {
  visible: boolean
  name?: string
  duration?: number
  unmountOnExit?: boolean // TODO:
  transitionStyles?: TransitionStyles
  [key: string]: any
}

const Transition = (props: Props) => {
  const {
    children,
    className,
    visible,
    name = 'fade-css-transition',
    duration = 300,
    unmountOnExit = false,
    transitionStyles, // TODO:
    ...leftProps
  } = props

  const [visibleStyle, setVisibleStyle] = useState({ display: 'none' })
  const [animatClassName, setAnimatClassName] = useState('')

  // 动画
  const animat = duration > 0

  //  all animat class
  const getClassNames = (mode: string) => {
    return classnames('coo-transiton', className, `${name}-${mode}`)
  }

  const openAnimat = () => {
    setVisibleStyle({ display: 'block' })
    setTimeout(() => {
      setAnimatClassName(getClassNames('enter'))
    }, 20)
  }

  const closeAnimat = () => {
    setAnimatClassName(getClassNames('exit'))
    setTimeout(() => {
      setVisibleStyle({ display: 'none' })
    }, duration)
  }

  useEffect(() => {
    visible ? openAnimat() : closeAnimat()
  }, [visible])

  return (
    <div
      className={animatClassName}
      style={{ ...visibleStyle, transition: animat ? `all ${duration}ms` : '' }}
      {...leftProps}>
      {children}
    </div>
  )
}

export default Transition
