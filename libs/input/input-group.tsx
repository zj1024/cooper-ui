import * as React from 'react'
import classnames from 'classnames'
import { setPrefixClassName } from '../utils'

import Input from './index'
import InputAddon from './input-addon'

import './style.scss'

interface Props {
  row?: boolean
  [key: string]: any
}

const setClass = setPrefixClassName('coo-input-group')

const InputGroup: React.FC<Props> = props => {
  const { children, className, row = true, ...leftProps } = props

  // find input size
  let size = 'middle'
  let hasAddon = false
  React.Children.map(children as React.ReactElement, (child: React.ReactElement) => {
    if (child.type === Input) {
      size = child?.props?.size || 'middle'
    }
    if (child.type === InputAddon) {
      hasAddon = true
    }
  })

  return (
    <div
      className={classnames(
        className,
        setClass(),
        size && setClass(size),
        hasAddon && setClass('has-addon'),
        !row && setClass('column'),
      )}
      {...leftProps}>
      {children}
    </div>
  )
}

export default InputGroup
