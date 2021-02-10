import * as React from 'react'
import { forwardRef } from 'react'
import classnames from 'classnames'
import { setPrefixClassName, stringEqual } from '../utils'

interface IProps {
  size?: 'large' | 'middle' | 'small'
  disabled?: boolean
  addonPlacement?: 'left' | 'right' | ''
  vaild: true | false | 'true' | 'false' | '' | null
  [key: string]: any
}

const setClass = setPrefixClassName('coo-input')

const Input = forwardRef((props: IProps, ref: any) => {
  const {
    className,
    size = 'middle',
    disabled,
    addonPlacement = '',
    vaild = '',
    ...leftProps
  } = props

  return (
    <input
      ref={ref}
      disabled={disabled}
      className={classnames(
        className,
        setClass(),
        setClass(size),
        disabled && setClass('disabled'),
        stringEqual(vaild, 'false') && setClass('invaild'),
        stringEqual(vaild, 'true') && setClass('vaild'),
        // 和组件相反
        addonPlacement && setClass(`${addonPlacement === 'left' ? 'right' : 'left'}`),
      )}
      {...leftProps}
    />
  )
})

export default Input
