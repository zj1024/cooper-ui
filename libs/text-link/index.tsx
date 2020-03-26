import * as React from 'react'
import classnames from 'classnames'
import { setPrefixClassName } from '../utils'

interface Props {
  className?: string
  type?: 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'info'
  underline?: boolean
  disabled?: boolean
  [key: string]: any
}

const setClass = setPrefixClassName('coo-text-link')

const TextLink: React.FC<Props> = props => {
  const {
    children,
    className,
    type = 'default',
    underline = true,
    disabled = false,
    ...leftProps
  } = props
  return (
    <a
      className={classnames(
        setClass(),
        setClass(type),
        underline && setClass('underline'),
        className,
        disabled && setClass(`${type}-disabled`),
      )}
      {...leftProps}>
      {children}
    </a>
  )
}

export default TextLink
