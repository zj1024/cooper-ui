import * as React from 'react'
import { useState, useEffect, useRef } from 'react'
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
  destoryOnChange?: boolean
}

const setClass = setPrefixClassName('coo-tabs')

const Tabs: TabsFC = props => {
  const { children, className, defaultActiveKey, destoryOnChange = false, ...leftProps } = props

  const [tabsWidthList, setTabsWidthList] = useState()

  const [active, setActive] = useState(
    defaultActiveKey || (children as React.ReactElement[])[0].key || '',
  )

  const tabsRef = useRef(null)

  const onTabClick = (key: any) => {
    setActive(key)
  }

  useEffect(() => {
    const tabsElement = tabsRef.current as any
    if (tabsElement !== null && tabsElement.children.length > 0) {
      const widthList = Array.prototype.map
        .call(tabsElement.children, tab =>
          tab.className.includes('coo-tabs-tab-item') ? getComputedStyle(tab)['width'] : null,
        )
        .filter((d: any) => d !== null)
      setTabsWidthList(widthList)
    }
  }, [tabsRef])

  console.log(tabsWidthList)

  return (
    <div className={classnames(setClass(), className)} {...leftProps}>
      <ul ref={tabsRef} className={setClass('tab')}>
        {/* tab选项卡 */}
        {React.Children.map(children, child => {
          const currentChild = child as React.ReactElement
          if (currentChild.type === TabPane) {
            const key = currentChild.key || ''
            const { tab } = currentChild.props
            return (
              <li
                key={key}
                className={classnames(
                  setClass('tab-item'),
                  active === key && setClass('tab-item-active'),
                )}
                onClick={() => onTabClick(key)}>
                {tab}
              </li>
            )
          }
          return null
        })}
        <div className={setClass('tab-bar')}></div>
      </ul>
      <div className={setClass('pane')}>
        {React.Children.map(children, tab => {
          const currentChild = tab as React.ReactElement
          if (currentChild.type === TabPane) {
            const key = currentChild.key || ''
            if (destoryOnChange) {
              if (key === active) {
                return <div className={setClass('pane-content')}>{tab}</div>
              } else {
                return null
              }
            } else {
              return (
                <div
                  className={setClass('pane-content')}
                  style={{ display: key === active ? 'block' : 'none' }}>
                  {tab}
                </div>
              )
            }
          }
          return null
        })}
      </div>
    </div>
  )
}

Tabs.TabPane = TabPane

export default Tabs
