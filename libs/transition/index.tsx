import * as React from 'react'
import { CSSTransition as RTGTransition } from 'react-transition-group'
export { default as CSSTransition } from './css-transition'

import './style.scss'

interface Props {
  visible: boolean
  name?: string
  duration?: number
  children: React.ReactNode
}

export default (props: Props) => {
  const { visible, duration = 300, name = 'coo-fade', children } = props
  return (
    <RTGTransition in={visible} timeout={duration} classNames={name} unmountOnExit>
      {children}
    </RTGTransition>
  )
}
