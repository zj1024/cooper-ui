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
  unmountOnExit?: boolean
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
    transitionStyles,
    ...leftProps
  } = props

  // 样式
  const initStyle: any = {}
  const exitedStyle = { display: 'none' }
  const enteredStyle = { display: 'block' }
  // 动画
  const animat = duration > 0
  const transition = animat ? `all ${duration}ms` : ''

  const [visibleStyle, setVisibleStyle] = useState(initStyle)
  const [animatClassName, setAnimatClassName] = useState('')
  const [isMount, setIsMount] = useState(visible)
  //  all animat class
  const getClassNames = (mode: string) => {
    return classnames('coo-transiton', className, `${name}-${mode}`)
  }

  const openAnimat = () => {
    if (!isMount) {
      setIsMount(true)
    }
    setTimeout(() => {
      // 为了防止setIsMount异步带来的延迟之行导致下面代码延迟执行
      setVisibleStyle(enteredStyle)
      setTimeout(() => {
        setVisibleStyle({ ...enteredStyle, ...transitionStyles?.entered })
        setAnimatClassName(getClassNames('enter'))
      }, 20)
    }, 20)
  }

  const closeAnimat = () => {
    setVisibleStyle({ ...enteredStyle, ...transitionStyles?.exited })
    setAnimatClassName(getClassNames('exit'))
    setTimeout(() => {
      setVisibleStyle(exitedStyle)
      if (isMount) {
        setTimeout(() => {
          setIsMount(false)
        })
      }
    }, duration)
  }

  useEffect(() => {
    visible ? openAnimat() : closeAnimat()
  }, [visible])

  const UnMountOnExitDOM = () => {
    return isMount ? (
      <div className={animatClassName} style={{ ...visibleStyle, transition }} {...leftProps}>
        {children}
      </div>
    ) : null
  }

  const MountOnExitDOM = () => {
    return (
      <div className={animatClassName} style={{ ...visibleStyle, transition }} {...leftProps}>
        {children}
      </div>
    )
  }

  return unmountOnExit ? UnMountOnExitDOM() : MountOnExitDOM()
}

export default Transition
