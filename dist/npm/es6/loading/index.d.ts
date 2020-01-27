import * as React from 'react'
import './style.scss'
interface Props {
  className?: string
  visible: boolean
  color?: string
  type?: 'light' | 'dark'
}
declare const Loading: React.FC<Props>
export default Loading
