import * as React from 'react'
import { useState, useRef } from 'react'
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
  disabled?: boolean
  onChange?: (e: any) => any
  onPressEnter?: (e: any) => any
  [key: string]: any
}

const setClass = setPrefixClassName('coo-input')

const Input: React.FC<Props> = props => {
  const {
    className,
    value,
    placeholder,
    allowClear = false,
    autoFocus = false,
    disabled = false,
    onChange = () => {},
    onPressEnter = () => {},
    ...leftProps
  } = props

  // const [inputValue, setInputValue] = useState('')
  const [event, setEvent] = useState({})
  const inputRef = useRef(null)
  // useEffect(() => {
  //   console.log('更新了props', value, event)
  // }, [value])

  const _onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    try {
      onChange(event)
      setEvent(event)
    } catch (e) {
      console.error(`value set error, please check your onChange method, errorMessage:${e}`)
    }
  }

  const _handleClear = () => {
    setEvent({})
    onChange({})
  }

  return (
    <div className={classnames(setClass())}>
      <input
        ref={inputRef}
        className={classnames(
          setClass('field'),
          className,
          allowClear && setClass('field-allow-clear'),
          disabled && setClass('field-disabled'),
        )}
        type="text"
        value={(event as any)?.target?.value}
        onChange={_onChange}
        placeholder={placeholder}
        autoFocus={autoFocus}
        disabled={disabled}
        {...leftProps}
      />
      {allowClear && (event as any).target.value ? (
        <Button onClick={_handleClear} className={classnames(setClass('allow-clear'))}>
          <Icon name="close" />
        </Button>
      ) : null}
    </div>
  )
}

export default Input
