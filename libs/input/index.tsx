import * as React from 'react'
import { useState } from 'react'
import classnames from 'classnames'
import { setPrefixClassName } from '../utils'
import { Button, Icon } from '../'

import './style.scss'

interface Props {
  className?: string
  value: any
  placeholder?: string
  allowClear?: boolean
  autoFocus?: boolean
  onChange: (value: string) => void
}

const setClass = setPrefixClassName('coo-input')

const Input: React.FC<Props> = props => {
  const {
    className,
    value,
    onChange,
    placeholder,
    allowClear = false,
    autoFocus = false,
    ...leftProps
  } = props

  const [_value, _setValue] = useState(value)

  const _onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value
    try {
      onChange(inputValue)
      _setValue(inputValue)
    } catch (e) {
      console.error(`value set error, please check your onChange method, errorMessage:${e}`)
    }
  }

  const _handleClear = () => {
    _setValue('')
    onChange('')
  }

  return (
    <div className={classnames(setClass())} {...leftProps}>
      <input
        className={classnames(
          setClass('field'),
          className,
          allowClear && setClass('field-allow-clear'),
        )}
        type="text"
        value={_value}
        onChange={_onChange}
        placeholder={placeholder}
        autoFocus={autoFocus}
      />
      {allowClear && _value ? (
        <Button onClick={_handleClear} className={classnames(setClass('allow-clear'))}>
          <Icon name="close" />
        </Button>
      ) : null}
    </div>
  )
}

export default Input
