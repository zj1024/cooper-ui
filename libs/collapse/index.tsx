import * as React from 'react'
import { useState } from 'react'
import classnames from 'classnames'
import { setPrefixClassName, isArray } from '../utils'

import CollapseItem from './collapse-item'

import './style.scss'

interface CollapseFC extends React.FC<Props> {
  Item: (params: any) => any
}

interface Props {
  children: React.ReactElement[]
  className?: string
  accordion?: boolean
  value?: number | number[]
  [key: string]: any
}

const setClass = setPrefixClassName('coo-collapse')

const Collapse: CollapseFC = props => {
  const { children, className, accordion, value, ...leftProps } = props

  // 对accordion的值做判断设置初始打开的状态
  const activeIndex = accordion ? value || -1 : value || []
  let initActiveItem: { visible: boolean }[] = []

  if (isArray(activeIndex)) {
    for (let i = 0; i < children.length; i++) {
      initActiveItem.push({ visible: (activeIndex as number[]).indexOf(i) > -1 })
    }
  }

  const [activeItem, setActiveItem] = useState(initActiveItem)

  const [accordActiveItem, setAccordActiveItem] = useState({ name: activeIndex, visible: true })

  const onContentClick = (name: string, visible: boolean) => {
    if (accordion) {
      setAccordActiveItem({ name: +name, visible: !visible })
    } else {
      const changeActiveItem = activeItem.map((d, i) => (+name === i ? { visible: !visible } : d))
      setActiveItem(changeActiveItem)
    }
  }

  const _getContentVisible = (index: number): boolean => {
    if (accordion) {
      return accordActiveItem.name === index && accordActiveItem.visible === true
    } else {
      return activeItem[index].visible
    }
  }

  return (
    <div className={classnames(setClass(), className)} {...leftProps}>
      {/* 遍历子节点，用来控制展开状态 */}
      {React.Children.map(children as React.ReactElement, (child, index) => {
        const contentVisible = _getContentVisible(index)
        return React.cloneElement(child, {
          name: index.toString(),
          key: index,
          contentvisible: `${contentVisible}`,
          onClick: onContentClick,
        })
      })}
    </div>
  )
}

Collapse.Item = CollapseItem

export default Collapse
