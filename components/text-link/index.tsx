import * as React from 'react'
import classnames from 'classnames'
import { setPrefixClassName, _extends } from '../utils'

interface Props {
  className?: string
  type?: 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'info'
  tag?: string
  underline?: boolean
  disabled?: boolean
  [key: string]: any
}

const setClass = setPrefixClassName('coo-text-link')

const TextLink: React.FC<Props> = props => {
  const {
    children,
    className,
    tag = 'span',
    type = 'default',
    underline = true,
    disabled = false,
    ...leftProps
  } = props
  return React.createElement(
    tag,
    _extends(
      {
        className: classnames(
          setClass(),
          setClass(type),
          underline && setClass('underline'),
          className,
          disabled && setClass(`${type}-disabled`),
        ),
      },
      leftProps,
    ),
    children,
  )
}

export default TextLink
