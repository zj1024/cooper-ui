import * as React from 'react'
import classnames from 'classnames'
import { setPrefixClassName } from '../utils'

interface Props {
  size?: 'large' | 'middle' | 'small'
  disabled?: boolean
  addonPlacement?: 'left' | 'right' | ''
  [key: string]: any
}

const setClass = setPrefixClassName('coo-input')

const Input: React.FC<Props> = props => {
  const { className, size = 'middle', disabled, addonPlacement = '', ...leftProps } = props

  return (
    <input
      disabled={disabled}
      className={classnames(
        className,
        setClass(),
        setClass(size),
        disabled && setClass('disabled'),
        // 和组件相反
        addonPlacement && setClass(`${addonPlacement === 'left' ? 'right' : 'left'}`),
      )}
      {...leftProps}
    />
  )
}

export default Input
