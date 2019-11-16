import * as React from 'react'
import classnames from 'classnames'
import Icon from '../icon'
import { setPrefixClassName } from '../utils'
import './style.scss'

interface Props {
  type?: string // 'default', 'primary', 'success', 'warning', 'danger', 'loading'
  children?: React.ReactNode
  className?: string
  plain?: boolean
  round?: boolean
  circle?: boolean
  loading?: boolean
  disabled?: boolean
  [key: string]: any
}

const setClass = setPrefixClassName('c-button')

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
  // TODO: plain
}) => {
  const getClassName = (hasClassName: boolean | string, className: string) => {
    return hasClassName ? className : ''
  }
  return (
    <button
      className={classnames(
        setClass(),
        setClass(type ? type : 'default'),
        getClassName(round, 'is-round'),
        getClassName(circle, 'is-circle'),
        className,
      )}
      disabled={disabled}
      {...props}>
      {loading ? <Icon name="loading" className={setClass('loading')} /> : null}
      {children}
    </button>
  )
}

export default Button
