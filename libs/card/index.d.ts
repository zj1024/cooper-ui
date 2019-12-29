import * as React from 'react'
import './style.scss'
interface Props {
  header?: React.ReactNode
  shadow?: string
  [key: string]: any
}
declare const Card: React.FC<Props>
export default Card
