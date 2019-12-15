import * as React from 'react'
import { useState, useRef } from 'react'
import classnames from 'classnames'
import { setPrefixClassName, stringEqual } from '../utils'

import Icon from '../icon'

import './style.scss'

export type index = string | number | null

interface PrivateProps {
  contentvisible?: boolean
  accordionfn?: (params?: any) => any
  name?: string
}

interface Props extends PrivateProps {
  className?: string
  title: string
  onClick?: (name: string, visible: boolean) => void
}

const setClass = setPrefixClassName('coo-collapse-item')

const CollapseItem: React.FC<Props> = props => {
  const { contentvisible, children, name = '0', className, title, onClick = () => {} } = props
  const visible = stringEqual(contentvisible, true)
  const [contentStyle, setContentStyle] = useState(visible ? ({ display: 'block' } as any) : {})
  const contentRef = useRef(null)

  // 折叠起来的样式
  const callbackContentStyle = { display: 'block', height: '0' }

  React.useEffect(() => {
    Promise.resolve().then(() => {
      const contentHeight = getComputedStyle(contentRef.current as any)['height']
      if (visible === true) {
        setContentStyle({ display: 'block', height: contentHeight })
      }
    })
  }, [])

  // 每次父级传来的visible都会动态添加动画
  React.useEffect(() => {
    if (stringEqual(contentvisible, true) === false) {
      setContentStyle(callbackContentStyle)
      setTimeout(() => {
        setContentStyle({ display: 'none' })
      }, 290)
    }
  }, [contentvisible])

  let closeTimer: any
  let openTimer: any
  const _onTitleClick = () => {
    openTimer && clearTimeout(openTimer)
    closeTimer && clearTimeout(closeTimer)
    // 父组件callback
    onClick(name, stringEqual(contentvisible, true))

    /**
     * @params {string} contentvisible
     * 根据父组件传过来的contentvisible判断动画
     * contentvisible === false 为展开动画, 这里的false是上一次visible值
     */
    if (stringEqual(contentvisible, true) === false) {
      setContentStyle({ display: 'block' })
      Promise.resolve().then(() => {
        const contentHeight = getComputedStyle(contentRef.current as any)['height']
        setContentStyle(callbackContentStyle)
        openTimer = setTimeout(() => {
          setContentStyle({ display: 'block', height: contentHeight })
        }, 20)
      })
    } else {
      setContentStyle(callbackContentStyle)
      closeTimer = setTimeout(() => {
        setContentStyle({ display: 'none' })
      }, 290)
    }
  }

  return (
    <div className={classnames(setClass(''), className)}>
      <div
        className={classnames(setClass('title'), visible && setClass('title-visible'))}
        onClick={_onTitleClick}>
        <Icon className={setClass('title-icon')} name="arrow-right"></Icon>
        <p>{title}</p>
      </div>
      <div className={setClass('content')} ref={contentRef} style={contentStyle}>
        {children}
      </div>
    </div>
  )
}

export default CollapseItem
