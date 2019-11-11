import * as React from 'react'
import classnames from 'classnames'
import './style.scss'

interface Props {
  type?: string
  children?: React.ReactNode
  className?: string
  plain?: boolean
  round?: boolean
  circle?: boolean
  loading?: boolean
  disabled?: boolean
  [key: string]: any
}

const Button: React.FC<Props> = ({
  type = 'default',
  children = null,
  className = '',
  plain = false,
  round = false,
  circle = false,
  loading = false,
  disabled = false,
  ...props
  // TODO: plain, loading
}) => {
  const getClassName = (hasClassName: boolean | string, className: string) => {
    return hasClassName ? className : ''
  }
  return (
    <button
      className={classnames(
        'c-button',
        `c-button-${type ? type : 'default'}`,
        getClassName(round, 'is-round'),
        getClassName(circle, 'is-circle'),
        className,
      )}
      disabled={disabled}
      {...props}>
      {children}
    </button>
  )
}

export default Button
