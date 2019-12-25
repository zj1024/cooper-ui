import * as React from 'react'
import './style.scss'
interface PrivateProps {
  name?: string
  contentvisible?: boolean
  onClick?: (name: string, visible: boolean) => void
}
interface Props extends PrivateProps {
  className?: string
  title: string
  [key: string]: any
}
declare const CollapseItem: React.FC<Props>
export default CollapseItem
