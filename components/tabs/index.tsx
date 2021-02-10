import * as React from 'react'
import { useState, useEffect, useRef } from 'react'
import classnames from 'classnames'
import { setPrefixClassName } from '../utils'

import TabPane from './tab-pane'

interface TabsFC extends React.FC<Props> {
  TabPane(params?: any): any
}

interface Props {
  className?: string
  defaultActiveKey?: string
  destoryOnChange?: boolean
  animat?: boolean
  [key: string]: any
}

const setClass = setPrefixClassName('coo-tabs')

const Tabs: TabsFC = props => {
  const {
    children,
    className,
    defaultActiveKey,
    destoryOnChange = false,
    animat = true,
    ...leftProps
  } = props

  // TODO:
  // console.log(animat)

  // 初始化所有的tab，{key, tab}
  const tabsValue = React.Children.map(children, tab => {
    const currentTab = tab as React.ReactElement
    return { key: currentTab.key, tab: currentTab.props.tab }
  })

  // 所有的tab标题宽度
  const [tabsWidthList, setTabsWidthList] = useState<any>()

  // tab-bar移动的位置
  const [tabBarTranslateX, setTabBarTranslateX] = useState(0)

  // 当前tab
  const [active, setActive] = useState({
    key: defaultActiveKey || (children as React.ReactElement[])[0].key || '',
    tab: '',
  })

  // tab包裹层的ref
  const tabsRef = useRef(null)

  // 获取当前tab的下标
  const getCurrentTabActiveIndex = (): number => {
    return tabsValue?.findIndex(d => d.key === active.key) || 0
  }

  // 点击设置tabActive和tab-tab index
  const onTabClick = (key: any, tab: string) => {
    const currentActiveIndex = tabsValue?.findIndex(d => d.key === key)
    const translateX = tabsWidthList
      .slice(0, currentActiveIndex)
      .reduce((sum: number, current: string) => {
        return sum + parseInt(current, 10) + 16
      }, 0)
    setTabBarTranslateX(translateX)
    setActive({ key, tab })
  }

  useEffect(() => {
    // 获取所有tabs的宽度，用来设置tab-bar的transform
    const tabsElement = tabsRef.current as any
    if (tabsElement !== null && tabsElement.children.length > 0) {
      const widthList: any = Array.prototype.map
        .call(tabsElement.children, tab =>
          tab.className.includes('coo-tabs-tab-item') ? getComputedStyle(tab)['width'] : null,
        )
        .filter((d: any) => d !== null)
      setTabsWidthList(widthList)

      const currentActiveIndex = tabsValue?.findIndex(d => d.key === defaultActiveKey)
      const translateX = widthList.slice(0, currentActiveIndex).reduce((sum: any, current: any) => {
        return sum + parseInt(current, 10) + 16
      }, 0)
      setTabBarTranslateX(translateX as number)
    }
  }, [tabsRef])

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
                  active.key === key && setClass('tab-item-active'),
                )}
                onClick={() => onTabClick(key, tab)}>
                {tab}
              </li>
            )
          }
          return null
        })}
        <div
          className={setClass('tab-bar')}
          style={{
            width: tabsWidthList && tabsWidthList[getCurrentTabActiveIndex()],
            transform: `translateX(${tabBarTranslateX}px)`,
          }}></div>
      </ul>
      <div className={setClass('pane')}>
        {React.Children.map(children, tab => {
          const currentChild = tab as React.ReactElement
          if (currentChild.type === TabPane) {
            const key = currentChild.key || ''
            // 销毁dom
            if (destoryOnChange) {
              if (active.key === key) {
                return <div className={setClass('pane-content')}>{tab}</div>
              } else {
                return null
              }
            } else {
              // 不会销毁dom
              return (
                <div
                  className={setClass('pane-content')}
                  style={{ display: active.key === key ? 'block' : 'none' }}>
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
