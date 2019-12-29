import * as React from 'react'
import './style.scss'
interface Props {
  className?: string
  dashed?: boolean
  orientation?: 'left' | 'center' | 'right'
  type?: 'horizontal' | 'vertical'
}
declare const Divider: React.FC<Props>
export default Divider
