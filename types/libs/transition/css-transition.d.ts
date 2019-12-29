import * as React from 'react'
import './style.scss'
interface Props {
  className?: string
  visible: boolean
  name?: string
  duration?: number
  children: React.ReactNode
  unmountOnExit?: boolean
  [key: string]: any
}
declare const CSSTransition: (props: Props) => JSX.Element
export default CSSTransition
