import * as React from 'react'
import { useState } from 'react'
import classnames from 'classnames'
import { setPrefixClassName, isArray } from '../utils'

import CollapseItem from './collapse-item'

import './style.scss'

/**
 * @Item {React.ReactElement} Collapse content
 */
interface CollapseFC extends React.FC<Props> {
  Item: (params: any) => any
}

/**
 * @prop {boolean} accordion collapse is accordion mode
 * @prop {number | number[]} value collapse initialize the expanded item
 * @prop {[key: string]: any} any allows the user to set other props automatically
 */
interface Props {
  children: React.ReactNode
  accordion?: boolean
  value?: number | number[]
  [key: string]: any
}

const setClass = setPrefixClassName('coo-collapse')

const Collapse: CollapseFC = props => {
  const { children, className, accordion, value, ...leftProps } = props

  // initialize

  /**
   * collapse initialize the expanded item
   * @accordion {boolean} if true, value's type is number, else is number[]
   */
  const activeIndex = accordion ? value || -1 : value || []
  let initActiveItem: { visible: boolean }[] = []

  // if accordion mode
  if (isArray(activeIndex)) {
    let mapChildren = isArray(children) ? children : [children]
    for (let i = 0; i < (mapChildren as any).length; i++) {
      initActiveItem.push({ visible: (activeIndex as number[]).indexOf(i) > -1 })
    }
  }

  // initialize done

  // set active by accordion value
  const [activeItem, setActiveItem] = useState(initActiveItem)
  const [accordActiveItem, setAccordActiveItem] = useState({ name: activeIndex, visible: true })

  /**
   * onContentClick collapse item click function, control expanded item
   * @param {string} name item name, unique sign
   * @param {boolean} visible item expanded state
   */
  const onContentClick = (name: string, visible: boolean): void => {
    if (accordion) {
      setAccordActiveItem({ name: +name, visible: !visible })
    } else {
      const changeActiveItem = activeItem.map((d, i) => (+name === i ? { visible: !visible } : d))
      setActiveItem(changeActiveItem)
    }
  }

  /**
   * child's expanded state, when activeItem or accordActiveItem changed, it will rerender to get
   * @param {number} index
   */
  const getContentVisible = (index: number): boolean => {
    return accordion
      ? accordActiveItem.name === index && accordActiveItem.visible === true
      : (activeItem[index] && activeItem[index].visible) || false
  }

  return (
    <div className={classnames(setClass(), className)} {...leftProps}>
      {/* control expanded item state */}
      {React.Children.map(children as React.ReactElement, (child, index) => {
        return React.cloneElement(child, {
          name: index.toString(),
          key: index,
          contentvisible: getContentVisible(index),
          onClick: onContentClick,
        })
      })}
    </div>
  )
}

Collapse.Item = CollapseItem

export default Collapse
