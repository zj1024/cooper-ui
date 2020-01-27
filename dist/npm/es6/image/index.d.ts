import * as React from 'react'
import './style.scss'
interface Props {
  style?: any
  className?: string
  src?: string
  fit?:
    | '-moz-initial'
    | 'inherit'
    | 'initial'
    | 'revert'
    | 'unset'
    | 'contain'
    | 'cover'
    | 'fill'
    | 'none'
    | 'scale-down'
    | undefined
  error?: React.ReactNode
  fallbackSrc?: string
  onError?: (params?: any) => any
  [key: string]: any
}
declare const Image: React.FC<Props>
export default Image
