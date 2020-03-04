import * as React from 'react'
import classnames from 'classnames'
import { setPrefixClassName } from '../utils'

import './style.scss'

interface Props {
  [key: string]: any
}

const setClass = setPrefixClassName('coo-input')

const Input: React.FC<Props> = props => {
  const { className, ...leftProps } = props

  return <input className={classnames(className, setClass())} {...leftProps} />
}

export default Input
