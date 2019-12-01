import * as React from 'react'
import { useRef } from 'react'
import classnames from 'classnames'

import './style.scss'

interface Props {
  className?: string
  visible: boolean
  name?: string
  duration?: number
  children: React.ReactNode
  unmountOnExit?: boolean
}

const CSSTransition = (props: Props) => {
  const {
    name = 'fade-css-transition',
    children,
    visible,
    duration = 300,
    className,
    ...leftProps
  } = props
  const transitionRef = useRef(null)
  const animat = duration > 0
  const getClassNames = (mode: string) => {
    return classnames('coo-transiton', className, `${name}-${mode}`)
  }
  // TODO:
  // if (unmountOnExit) {
  //   const { current: div } = transitionRef
  //   let parentNode: any
  //   if (div) {
  //     parentNode = (div as any).parentNode
  //   }
  //   if (parentNode && visible) {
  //     console.log(parentNode.hasChildNodes(div))
  //   }
  //   if (visible === false && div) {
  //     parentNode.removeChild(div)
  //   }
  //   return (
  //     <div
  //       ref={transitionRef}
  //       className={classnames(
  //         setClass(''),
  //         name,
  //         visible && `${name}-enter`,
  //         !visible && `${name}-exit`,
  //       )}
  //       style={{ transition: `all ${duration}ms` }}>
  //       {children}
  //     </div>
  //   )
  // }

  if (!animat && visible) {
    Promise.resolve().then(() => {
      ;(transitionRef.current as any).style.display = 'block'
    })
  }
  if (!animat && !visible) {
    Promise.resolve().then(() => {
      ;(transitionRef.current as any).style.display = 'none'
    })
  }

  // 进场动画
  if (animat && visible) {
    Promise.resolve().then(() => {
      ;(transitionRef.current as any).style.display = 'block'
    })
    setTimeout(() => {
      ;(transitionRef.current as any).setAttribute('class', getClassNames('enter'))
    }, 20)
  }
  // 出场动画
  if (animat && !visible) {
    Promise.resolve().then(() => {
      ;(transitionRef.current as any).setAttribute('class', getClassNames('exit'))
    })
    setTimeout(() => {
      ;(transitionRef.current as any).style.display = 'none'
    }, duration - 20)
  }
  return (
    <div
      ref={transitionRef}
      className={className}
      style={{ transition: animat ? `all ${duration}ms` : '' }}
      {...leftProps}>
      {children}
    </div>
  )
}

export default CSSTransition
