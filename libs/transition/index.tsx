import * as React from 'react'
import { CSSTransition } from 'react-transition-group'

import './style.scss'

interface Props {
  visible: boolean
  name?: string
  duration?: number
  children: React.ReactNode
}

export default (props: Props) => {
  const { visible, duration = 300, name = 'fade', children } = props
  return (
    <CSSTransition in={visible} timeout={duration} classNames={name} unmountOnExit>
      {children}
    </CSSTransition>
  )
}
