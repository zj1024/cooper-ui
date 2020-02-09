import * as React from 'react'
import './style.scss'
interface Props {
  className?: string
  loading: boolean
  row?: number
  avatar?: boolean
  avatarShape?: string
  avatarSize?: string
  title?: boolean
  animat?: boolean
  [key: string]: any
}
declare const Skeleton: React.FC<Props>
export default Skeleton
