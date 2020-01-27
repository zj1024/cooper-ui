import * as React from 'react'
import './style.scss'
interface Props {
  className?: string
  style?: React.CSSProperties
  status: string
  icon?: React.ReactNode
  title?: React.ReactNode
  content?: React.ReactNode
}
declare const Result: React.FC<Props>
export default Result
