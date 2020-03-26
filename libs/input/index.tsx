import * as React from 'react'
import classnames from 'classnames'
import { setPrefixClassName } from '../utils'

interface Props {
  size?: 'large' | 'middle' | 'small'
  [key: string]: any
}

const setClass = setPrefixClassName('coo-input')

const Input: React.FC<Props> = props => {
  const { className, size = 'middle', ...leftProps } = props

  return <input className={classnames(className, setClass(), setClass(size))} {...leftProps} />
}

export default Input
