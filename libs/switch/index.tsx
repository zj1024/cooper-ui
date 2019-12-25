import * as React from 'react'
import { useState } from 'react'
import classnames from 'classnames'
import { setPrefixClassName } from '../utils'

import './style.scss'

interface Props {
  className?: string
  onChange: (value: boolean) => any
}

const setClass = setPrefixClassName('coo-switch')

const Switch: React.FC<Props> = props => {
  const { className, onChange = () => {}, ...leftProps } = props
  const [status, setStatus] = useState(false)

  const onSwitchChange = () => {
    setStatus(!status)
    onChange(true)
  }
  return (
    <div
      className={classnames(setClass(), status && setClass('active'), className)}
      onClick={onSwitchChange}
      {...leftProps}></div>
  )
}

export default Switch
