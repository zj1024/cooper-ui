import * as React from 'react'
import classnames from 'classnames'
import { setPrefixClassName } from '../utils'

import CollapseItem from './collapse-item'

import './style.scss'

interface CollapseFC extends React.FC<Props> {
  Item: (params: any) => any
}

interface Props {
  className?: string
  accordion?: boolean
  [key: string]: any
}

const setClass = setPrefixClassName('coo-collapse')

const Collapse: CollapseFC = props => {
  const { children, className, accordion, ...leftProps } = props
  return (
    <div className={classnames(setClass(), className)} {...leftProps}>
      {React.Children.map(children, child => {
        // if (child === CollapseItem) {

        // }
        return child
      })}
    </div>
  )
}

Collapse.Item = CollapseItem

export default Collapse
