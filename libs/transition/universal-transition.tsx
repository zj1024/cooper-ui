import * as React from 'react'
import { useState, useEffect, useRef } from 'react'
import classnames from 'classnames'
import { setPrefixClassName } from '../utils'
import './universal-style.scss'

/**
 * 动画结束后挂载
 * style支持
 */

/**
 * 场景分类
 * 1.dialog drawer
 * 通过改变静态的style
 * 2.popover tooltip
 * 通过transition-group做的
 * 3.foldcard collapse
 * 没有隐藏的属性，但需要动态获取高度
 * 4.message
 * 用到了destory，使用class做的动画
 */

interface IProps {
  visible: boolean
  classNames?: string
  duration?: number
  unmountOnExit?: boolean
  [key: string]: any
}

const setClass = setPrefixClassName('coo-transition')

const Transition = (props: IProps) => {
  const {
    children,
    visible = false,
    classNames = 'fade',
    duration = 300,
    unmountOnExit = true,
  } = props

  console.log(unmountOnExit)

  const getClassNames = () => {
    return {
      enter: `coo-${classNames}-enter`, // 初始化状态
      enterActive: `coo-${classNames}-enter-active`, // 动画变化最终样式
      enterTo: `coo-${classNames}-enter-to`, // 动画执行结束的样式
      leave: `coo-${classNames}-leave`,
      leaveAvtive: `coo-${classNames}-leave-active`,
      leaveTo: `coo-${classNames}-leave-to`,
    }
  }

  const [classNameState, setClassNameState] = useState(getClassNames().enter)
  const [isInit, setInit] = useState(true) // 判断是不是第一次进来的，用于visible effect
  const refDOM = useRef(null)

  const render = () => {
    const { className } = children.props
    return React.cloneElement(children, {
      className: classnames(className, classNameState),
    })
  }

  useEffect(() => {
    setInit(false)
  }, [])

  useEffect(() => {
    const { enterActive, leaveAvtive, leaveTo } = getClassNames()
    if (visible === true && !isInit) {
      // 动画执行
      setTimeout(() => {
        setClassNameState(enterActive)
      }, 20)
    }

    if (visible === false && !isInit) {
      // 动画结束
      setClassNameState(leaveAvtive)
      setTimeout(() => {
        setClassNameState(leaveTo)
      }, duration)
    }
  }, [visible])

  // const TransitionDOM = () => <div className={classnames(setClass(''))}>{render()}</div>

  // if (unmountOnExit === true) {
  //   return <>{visible ? <TransitionDOM /> : null}</>
  // }

  return (
    <div ref={refDOM} className={classnames(setClass(''))}>
      {render()}
    </div>
  )
}

export default Transition
