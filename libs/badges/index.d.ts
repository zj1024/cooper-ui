import * as React from 'react'
import './style.scss'
interface Props {
  className?: string
  type?: string
  placement?: string
  badgeContent?: number | string
  bgColor?: string
  color?: string
  dot?: boolean
  [key: string]: any
}
declare const Badges: React.FC<Props>
export default Badges
