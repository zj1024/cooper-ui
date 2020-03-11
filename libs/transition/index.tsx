import * as React from 'react'
import { useState, useEffect } from 'react'
import classnames from 'classnames'
import { setPrefixClassName } from '../utils'
import './style.scss'

/**
 * 动画结束后挂载
 * style支持
 * 注意： 不要在children最外层使用fragment，否则挂载不上去
 */

/**
 * 场景分类
 * 1. drawer
 * 通过改变静态的style
 * 2.popover tooltip
 * 通过transition-group做的
 * 3.foldcard collapse
 * 没有隐藏的属性，但需要动态获取高度
 * 4.message
 * 用到了destory，使用class做的动画
 */

// init: visible ? enterTo : enter -> enterActive(20ms) -> enterTo(duration)
// leave -> leaveActive(20ms) -> leaveTo(duration)
interface IProps {
  visible: boolean
  styles?: any
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
      enter: `coo-${classNames} coo-${classNames}-enter`, // 初始化状态
      enterActive: `coo-${classNames} coo-${classNames}-enter-active`, // 动画变化最终样式
      enterTo: `coo-${classNames} coo-${classNames}-enter-to`, // 动画执行结束的样式
      leave: `coo-${classNames} coo-${classNames}-leave`,
      leaveActive: `coo-${classNames} coo-${classNames}-leave-active`,
      leaveTo: `coo-${classNames} coo-${classNames}-leave-to`,
    }
  }

  const [classNameState, setClassNameState] = useState(
    getClassNames()[visible ? 'enterTo' : 'leaveTo'],
  )
  const [styleState, setStyleState] = useState(visible ? styles?.enterTo : styles?.leaveTo)
  const [isInit, setInit] = useState(true) // 判断是不是第一次进来的，用于visible effect

  const setClassAndStyles = (name: string) => {
    if (isStyles && name !== styleState) {
      setStyleState(styles[name])
    }
    if (!isStyles && name !== classNameState) {
      setClassNameState((getClassNames() as any)[name])
    }
  }

  useEffect(() => {
    setInit(false)
  }, [])

  useEffect(() => {
    let entryTimer: any
    let leaveTimer: any
    // 如果销毁dom的话，需要先设置enter，然后requestAnimation设置enterActive
    if (!isInit) {
      if (visible) {
        // 如果动画在执行时候，终止上一个，运行新的

        // 动画执行
        setClassAndStyles('enter')

        requestAnimationFrame(() => {
          setClassAndStyles('enterActive')
          entryTimer = setTimeout(() => {
            setClassAndStyles('enterTo')
          }, duration)
        })
      }
      if (!visible) {
        // 动画结束
        setClassAndStyles('leave')

        requestAnimationFrame(() => {
          setClassAndStyles('leaveActive')
          leaveTimer = setTimeout(() => {
            setClassAndStyles('leaveTo')
          }, duration)
        })
      }
    }
    return () => {
      entryTimer && clearTimeout(entryTimer)
      leaveTimer && clearTimeout(leaveTimer)
    }
  }, [visible])

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

  if (unmountOnExit) {
    return visible ? <div className={classnames(setClass(''))}>{render()}</div> : null
  } else {
    return <div className={classnames(setClass(''))}>{render()}</div>
  }
}

export default React.memo(Transition)
