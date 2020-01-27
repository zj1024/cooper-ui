import * as React from 'react'
import './style.scss'
interface Props {
  name?: string
  component?: string
  className?: string
  [key: string]: any
}
declare const Icon: React.FC<Props>
export default Icon
