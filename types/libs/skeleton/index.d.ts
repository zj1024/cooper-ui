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
}
declare const Skeleton: React.FC<Props>
export default Skeleton
