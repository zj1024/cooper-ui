/// <reference types="react" />
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
declare const Transition: (props: Props) => JSX.Element | null
export default Transition
