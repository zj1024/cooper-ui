import * as React from 'react'
import { useState } from 'react'
import classnames from 'classnames'

import { setPrefixClassName, stringEqual } from '../utils'

import './style.scss'

export interface Props {
  className?: string
  options: any
  onChange: (e: React.BaseSyntheticEvent) => void
  name?: string
}

const setClass = setPrefixClassName('coo-radio')

const Radio: React.FC<Props> = props => {
  const { className, options, name, onChange, ...leftProps } = props

  const [currentRadioValue, setCurrentRadioValue] = useState(null)

  const _onChange = (e: React.BaseSyntheticEvent) => {
    setCurrentRadioValue(e.target.value)
    onChange(e)
  }

  return (
    <div className={classnames(setClass(), className)} {...leftProps}>
      {options.map((radio: any, index: number) => {
        return (
          <label
            className={classnames(
              setClass('label'),
              stringEqual(currentRadioValue, radio.value) && setClass('label-active'),
              stringEqual(index, options.length - 1) && setClass('label-last'),
            )}
            key={index}>
            <span className={setClass('inner')} />
            <input
              className={setClass('input')}
              name={name}
              onChange={_onChange}
              type="radio"
              value={radio.value}
            />
            <span className={setClass('label-text')}>{radio.label}</span>
          </label>
        )
      })}
    </div>
  )
}

export default Radio
