import * as React from 'react'
export { default as CSSTransition } from './css-transition'
export { default as CollapseTransition } from './collapse-transition'
import './style.scss'
interface Props {
  visible: boolean
  name?: string
  duration?: number
  children: React.ReactNode
}
declare const _default: (props: Props) => JSX.Element
export default _default
