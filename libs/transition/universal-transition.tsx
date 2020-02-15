import * as React from 'react'
import { useState, useEffect } from 'react'
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

interface ITransitionStyles {
  enter?: React.CSSProperties
  enterActive?: React.CSSProperties
  enterTo?: React.CSSProperties
  leave?: React.CSSProperties
  leaveAvtive?: React.CSSProperties
  leaveTo?: React.CSSProperties
}

interface IProps {
  visible: boolean
  styles?: ITransitionStyles
  classNames?: string
  duration?: number
  unmountOnExit?: boolean
  [key: string]: any
}

let timer: any
const setClass = setPrefixClassName('coo-transition')

const Transition = (props: IProps) => {
  const {
    children,
    visible = false,
    styles,
    classNames = 'fade',
    duration = 300,
    unmountOnExit = false,
  } = props

  // 如果是根据 style 来执行动画的
  let isStyles = false
  if (styles) {
    isStyles = true
  }

  // 初始化变量
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
  const [visibleState, setVisibleState] = useState(visible)
  const [classNameState, setClassNameState] = useState(getClassNames().enter)
  const [styleState, setStyleState] = useState(styles?.enter)
  const [isInit, setInit] = useState(true) // 判断是不是第一次进来的，用于visible effect

  const render = () => {
    const { className } = children.props
    const curStyle = { ...children.props.style, ...styleState }
    if (isStyles) {
      return React.cloneElement(children, {
        style: curStyle,
      })
    } else {
      return React.cloneElement(children, {
        className: classnames(className, classNameState),
      })
    }
  }

  useEffect(() => {
    setInit(false)
  }, [])

  useEffect(() => {
    // 如果销毁dom的话，需要先设置enter，然后requestAnimation设置enterActive
    const { enter, enterActive, leaveAvtive, leaveTo } = getClassNames()
    if (!isInit) {
      if (visible) {
        // 如果动画在执行时候，终止上一个，运行新的
        if (timer) {
          clearTimeout(timer)
        }
        // 动画执行
        setVisibleState(visible)
        if (isStyles) {
          setStyleState(styles?.enter)
        } else {
          setClassNameState(enter)
        }
        requestAnimationFrame(() => {
          if (isStyles) {
            setStyleState(styles?.enterActive)
          } else {
            setClassNameState(enterActive)
          }
        })
      }
      if (!visible) {
        // 动画结束
        if (isStyles) {
          setStyleState(styles?.leaveAvtive)
        } else {
          setClassNameState(leaveAvtive)
        }
        timer = setTimeout(() => {
          if (isStyles) {
            setStyleState(styles?.leaveTo)
          } else {
            setClassNameState(leaveTo)
          }
          setVisibleState(visible)
          timer = null
        }, duration)
      }
    }
  }, [visible])

  if (unmountOnExit) {
    return (
      <>
        {unmountOnExit && visibleState ? (
          <div className={classnames(setClass(''))}>{render()}</div>
        ) : null}
      </>
    )
  } else {
    return <div className={classnames(setClass(''))}>{render()}</div>
  }
}

export default Transition
