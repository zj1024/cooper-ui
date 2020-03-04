import * as React from 'react'
import classnames from 'classnames'
import { setPrefixClassName } from '../utils'

import './style.scss'

interface Props {
  row?: boolean
  [key: string]: any
}

const setClass = setPrefixClassName('coo-input-group')

const InputGroup: React.FC<Props> = props => {
  const { children, className, row = true, ...leftProps } = props

  return (
    <div className={classnames(className, setClass(), !row && setClass('column'))} {...leftProps}>
      {children}
    </div>
  )
}

export default InputGroup
