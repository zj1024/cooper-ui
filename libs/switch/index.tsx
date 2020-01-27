import * as React from 'react'
import { useState, useEffect } from 'react'
import classnames from 'classnames'
import { setPrefixClassName } from '../utils'

import Icon from '../icon'

import './style.scss'

interface Props {
  className?: string
  style?: any
  checked?: boolean
  defaultChecked?: boolean
  checkedChildren?: string | React.ReactNode
  unCheckedChildren?: string | React.ReactNode
  size?: string
  loading?: boolean
  disabled?: boolean
  onChange: (params?: any) => any
  [key: string]: any
}

const setClass = setPrefixClassName('coo-switch')

const Switch: React.FC<Props> = props => {
  const {
    className,
    checked,
    defaultChecked = false,
    checkedChildren,
    unCheckedChildren,
    size = 'default',
    loading = false,
    disabled = false,
    onChange = () => {},
    ...leftProps
  } = props

  const [status, setStatus] = useState(defaultChecked ? defaultChecked : checked)

  const onSwitchChange = () => {
    if (!disabled && checked === undefined) {
      setStatus(!status)
      onChange(!status)
    }
  }

  useEffect(() => {
    setStatus(checked)
    onChange(checked)
  }, [checked])

  return (
    <div
      className={classnames(
        setClass(),
        size === 'small' && setClass('small'),
        status && setClass('active'),
        disabled && setClass('disabled'),
        loading && setClass('loading'),
        className,
      )}
      onClick={onSwitchChange}
      {...leftProps}>
      {status ? checkedChildren : unCheckedChildren}
      <div className={setClass('button')}>
        {loading && <Icon className={setClass('button-loading')} name="loading-spot" />}
      </div>
    </div>
  )
}

export default Switch
