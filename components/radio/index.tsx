import * as React from 'react'
import { useState, useEffect } from 'react'
import classnames from 'classnames'

import { setPrefixClassName, stringEqual } from '../utils'

interface optionItem {
  value: any
  label: string
  disabled?: boolean
  checked?: boolean
}

export interface Props {
  className?: string
  options: optionItem[]
  onChange(e: React.BaseSyntheticEvent): void
  name?: string
  defaultValue?: any
  radioStyle?: any
  mode?: 'vertical' | 'horizontal'
  [key: string]: any
}

const setClass = setPrefixClassName('coo-radio')

const Radio: React.FC<Props> = props => {
  const {
    className,
    radioClassName = '',
    options,
    name,
    onChange,
    defaultValue,
    radioStyle = {},
    mode = 'horizontal',
    ...leftProps
  } = props
  const [_options, _setOptions] = useState([...options])

  // 如果用户传入数组的checked为true超过两个发出警告
  useEffect(() => {
    const checkOptions = _options.map(d => d.checked === true)
    if (checkOptions.filter(d => d === true).length > 1) {
      console.warn(
        `Radio props options have more than one 'checked' props, which could result in an error, please only have one checked = true in options`,
      )
    }
  }, [])

  useEffect(() => {
    _setOptions(
      _options.map((d: any) => {
        // 容错处理
        if (d.disabled === undefined) {
          d.disabled = false
        }
        if (d.checked === undefined) {
          d.checked = false
        }
        // defaultValue 传入的值可能和options的值相同
        if (stringEqual(d.value, defaultValue)) {
          console.warn(
            `Detected defaultValue datatype maybe incorrect. options have a value ${typeof d.value}: ${
              d.value
            }, defaultValue = ${typeof defaultValue}: ${defaultValue}`,
          )
        }
        if (d.value === defaultValue) {
          d.checked = true
        }
        return d
      }),
    )
  }, [])

  const _onChange = (e: React.BaseSyntheticEvent, radio: any) => {
    // const index = _options.findIndex(d => d === radio)
    _setOptions(
      _options.map((d: any) => {
        d.checked = d === radio
        return d
      }),
    )
    onChange(e)
  }
  return (
    <div
      className={classnames(
        setClass(),
        mode === 'vertical' ? setClass('vertical') : setClass('horizontal'),
        className,
      )}
      {...leftProps}>
      {_options.map((radio: any, index: number) => {
        const trulyChecked = radio.disabled === false && radio.checked
        return (
          radio.checked !== undefined && (
            <label
              className={classnames(
                setClass('label'),
                trulyChecked && setClass('label-active'),
                stringEqual(index, options.length - 1) && setClass('label-last'),
                radio.disabled && setClass('label-disabled'),
              )}
              key={index}
              style={radioStyle}>
              <span className={setClass('inner')} />
              <input
                className={classnames(setClass('input'))}
                onChange={e => _onChange(e, radio)}
                type="radio"
                name={name}
                value={radio.value}
                checked={trulyChecked}
                disabled={radio.disabled}
              />
              <span className={setClass('label-text')}>{radio.label}</span>
            </label>
          )
        )
      })}
    </div>
  )
}

export default Radio
