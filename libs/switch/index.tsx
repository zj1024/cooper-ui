import * as React from 'react'
import classnames from 'classnames'
import { setPrefixClassName } from '../utils'

import Icon from '../icon'

import './style.scss'

interface Props {
  className?: string
  checked?: boolean
  checkedChildren?: string | React.ReactNode
  unCheckedChildren?: string | React.ReactNode
  size?: string
  loading?: boolean
  disabled?: boolean
  onClick(params?: any): any
  [key: string]: any
}

const setClass = setPrefixClassName('coo-switch')

const Switch: React.FC<Props> = props => {
  const {
    className,
    checked = false,
    checkedChildren,
    unCheckedChildren,
    size = 'default',
    loading = false,
    disabled = false,
    onClick,
    ...leftProps
  } = props

  return (
    <div
      className={classnames(
        setClass(),
        size === 'small' && setClass('small'),
        checked && setClass('active'),
        disabled && setClass('disabled'),
        loading && setClass('loading'),
        className,
      )}
      onClick={onClick}
      {...leftProps}>
      {checked ? checkedChildren : unCheckedChildren}
      <div className={setClass('button')}>
        {loading && <Icon className={setClass('button-loading')} name="loading-spot" />}
      </div>
    </div>
  )
}

export default Switch
