import * as React from 'react'
import { useEffect, useState } from 'react'
import classnames from 'classnames'
import Icon from '../icon'
import { setPrefixClassName } from '../utils'
// import Transition from '../transition'

import './style.scss'

interface Props {
  message: React.ReactNode
  type?: 'success' | 'info' | 'error' | 'warning'
  showClose?: boolean
  placement?: 'top' | 'bottom'
  [key: string]: any
}

// message function api
interface MessageFC extends React.FC<Props> {
  $success: (props?: any) => any
  $info: (props?: any) => any
  $error: (props?: any) => any
  $warning: (props?: any) => any
}

const setClass = setPrefixClassName('coo-message')

const Message: MessageFC = props => {
  const { message, type = 'info', showClose = false, placement = 'top', ...leftProps } = props
  const [allMessageDOM, setAllMessageDOM] = useState()
  const [calcHeight, setCalcHeight] = useState()
  // const [count, setCount] = useState()

  useEffect(() => {
    // 获取所有存在的message dom
    setAllMessageDOM(document.querySelectorAll('.coo-message'))
    // 切掉第一个，为下一个计算高度
    const cutFirstArray = Array.prototype.slice.call(allMessageDOM || [], 1)
    const heightArray = cutFirstArray.map((item: HTMLElement) => {
      return parseInt(getComputedStyle(item)['height'] || '0', 10)
    })

    // 加上20的top高度
    setCalcHeight(heightArray.reduce((sum: any, cur: any) => sum + cur + 10, 10))
  }, [])

  return (
    <div
      className={classnames(setClass(), setClass(type))}
      {...leftProps}
      style={{ top: `${calcHeight}px` }}>
      <Icon name={type} className={setClass('icon')} />
      <div className={setClass('content')}>{message}</div>
    </div>
  )
}

/**
 * @function api
 * Declare that the direct reference to the function is invalid
 */
Message.$success = () => {}
Message.$info = () => {}
Message.$error = () => {}
Message.$warning = () => {}

export default Message
