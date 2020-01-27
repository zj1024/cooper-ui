import * as React from 'react'
import classnames from 'classnames'
import { setPrefixClassName } from '../utils'

import './style.scss'

interface Props {
  className?: string
  [key: string]: any
}

const setClass = setPrefixClassName('coo-tab-pane')

const TabPane: React.FC<Props> = props => {
  const { children, className, ...leftProps } = props
  console.log('this is pane')
  return (
    <div className={classnames(setClass(), className)} {...leftProps}>
      {children}
    </div>
  )
}

export default TabPane
