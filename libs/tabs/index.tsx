import * as React from 'react'
import classnames from 'classnames'
import { setPrefixClassName } from '../utils'

import TabPane from './tab-pane'

import './style.scss'

interface TabsFC extends React.FC<Props> {
  TabPane: (params?: any) => any
}

interface Props {
  className?: string
  defaultActiveKey?: string
}

const setClass = setPrefixClassName('coo-tabs')

const Tabs: TabsFC = props => {
  const { children, className, defaultActiveKey, ...leftProps } = props
  // const length = children.length
  return (
    <div className={classnames(setClass(), className)} {...leftProps}>
      {children}
    </div>
  )
}

Tabs.TabPane = TabPane

export default Tabs
