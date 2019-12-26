import * as React from 'react'
import { useState } from 'react'
import classnames from 'classnames'
import { setPrefixClassName } from '../utils'

import './style.scss'

interface Props {
  className?: string
  style?: any
  defaultChecked?: boolean
  checkedChildren?: string | React.ReactNode
  unCheckedChildren?: string | React.ReactNode
  size?: string
  onChange: (value: boolean) => any
}

const setClass = setPrefixClassName('coo-switch')

const Switch: React.FC<Props> = props => {
  const {
    className,
    defaultChecked = false,
    checkedChildren,
    unCheckedChildren,
    size = 'default',
    onChange = () => {},
    ...leftProps
  } = props
  const [status, setStatus] = useState(defaultChecked)

  const onSwitchChange = () => {
    setStatus(!status)
    onChange(!status)
  }

  return (
    <div
      className={classnames(
        setClass(),
        size === 'small' && setClass('small'),
        status && setClass('active'),
        status && setClass('checked'),
        className,
      )}
      onClick={onSwitchChange}
      {...leftProps}>
      {status ? checkedChildren : unCheckedChildren}
      <div className={setClass('button')}></div>
    </div>
  )
}

export default Switch
