import * as React from 'react'
import './style.scss'
interface Props {
  className?: string
  percent?: number
  status?: 'error' | 'success' | null
  color?: string
}
declare const Progress: React.FC<Props>
export default Progress
