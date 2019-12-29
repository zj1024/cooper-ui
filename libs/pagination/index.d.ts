import * as React from 'react'
import './style.scss'
interface Props {
  className?: string
  size?: 'normal' | 'small' | 'large'
  defaultCurrent?: number
  pagerCount?: number
  pageCount?: number
  disabled?: boolean
  hideOnSinglePage?: boolean
  showQuickJumper?: boolean
  onChange?: (current: number) => void
}
declare const Pagination: React.FC<Props>
export default Pagination
