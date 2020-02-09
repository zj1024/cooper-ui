import * as React from 'react'
import './style.scss'
interface Props {
  className?: string
  fold: React.ReactNode
  foldName?: string
  [key: string]: any
}
declare const Foldcard: React.FC<Props>
export default Foldcard
