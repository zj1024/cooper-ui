import * as React from 'react'
import './style.scss'
interface Props {
  className?: string
  style?: any
  behavior?: 'smooth' | 'auto'
  visibilityHeight?: number
  animat?: boolean
}
declare const BackTop: React.FC<Props>
export default BackTop
