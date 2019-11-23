import * as React from 'react'
import { Transition } from 'react-transition-group'

import './style.scss'

interface transitionStylesProps extends React.CSSProperties {
  entering?: any
  entered?: any
  exiting?: any
  exited?: any
}

interface Props {
  visible: boolean
  name?: string
  duration?: number
  children: React.ReactNode
  style?: transitionStylesProps
}

export default (props: Props) => {
  const { visible, duration = 300, name = 'fade', children, style = {} } = props

  return (
    <Transition timeout={duration} in={visible}>
      {(state: 'entering' | 'entered' | 'exiting' | 'exited') => {
        return (
          <div className={`${name} ${name}-${state}`} style={...style[state]}>
            {children}
          </div>
        )
      }}
    </Transition>
  )
}
