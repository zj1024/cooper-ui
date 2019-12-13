import * as React from 'react'
import { useState } from 'react'
import classnames from 'classnames'
import { setPrefixClassName } from '../utils'

import Icon from '../icon'

import './style.scss'

export type index = string | number | null

interface PrivateProps {}

interface Props extends PrivateProps {
  className?: string
  title: string
}

const setClass = setPrefixClassName('coo-collapse-item')

const CollapseItem: React.FC<Props> = props => {
  const [visible, setVisible] = useState(false)
  console.log('render')
  const _onTitleClick = () => {
    // 打开操作
    setVisible(!visible)
  }

  const { children, className, title, ...leftProps } = props
  return (
    <div className={classnames(setClass(''), className)} {...leftProps}>
      <div className={setClass('title')} onClick={_onTitleClick}>
        <Icon name="arrow-right"></Icon>
        <p>{title}</p>
      </div>
      <div style={{ display: visible ? 'block' : 'none' }}>{children}</div>
    </div>
  )
}

export default CollapseItem
