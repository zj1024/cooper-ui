import * as React from 'react'
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
declare const _default: (props: Props) => JSX.Element
export default _default
