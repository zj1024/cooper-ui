import * as React from 'react'
import classnames from 'classnames'
import './style.scss'

interface Props {
  type?: string
  children?: React.ReactNode
  className?: string
  [key: string]: any
}

const Button: React.FC<Props> = ({ type = 'default', children = null, className, ...props }) => {
  return (
    <button className={classnames('c-button', `c-button-${type}`, className)} {...props}>
      {children}
    </button>
  )
}

export default Button
