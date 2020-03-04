import * as React from 'react'
import classnames from 'classnames'
import { setPrefixClassName } from '../utils'

import './style.scss'

interface Props {
  [key: string]: any
}

const setClass = setPrefixClassName('coo-input-addon')

const InputAddon: React.FC<Props> = props => {
  const { children, className, ...leftProps } = props

  return (
    <div className={classnames(className, setClass())} {...leftProps}>
      {React.Children.map(children, (child, index) => {
        return <div key={index}>{child}</div>
      })}
    </div>
  )
}

export default InputAddon
