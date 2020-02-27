import * as React from 'react'
import { useState, useEffect, useRef } from 'react'
import classnames from 'classnames'
import { setPrefixClassName } from '../utils'
import Icon from '../icon'
import Transition from '../transition'

import './style.scss'

interface IProps {
  className?: string
  defaultActive?: number
  dots?: boolean
  arrow?: 'always' | 'hover' | 'never'
  autoplay?: boolean
  duration?: number
  [key: string]: any
}

const setClass = setPrefixClassName('coo-carousel')

let nativeActive: number
const Carousel: React.FC<IProps> = props => {
  const {
    className,
    defaultActive = 0,
    dots = true,
    arrow = 'hover',
    autoplay = true,
    duration = 1500,
    ...leftProps
  } = props

  const children = React.isValidElement(props.children) ? [props.children] : props.children
  const length = (children as React.ReactElement[]).length

  // state
  const [active, setActive] = useState(defaultActive)
  const [width, setWidth] = useState('')
  const [transitionDuration, setTransitionDuration] = useState('0ms')
  const [canIMove, setCanIMove] = useState(true)
  const [arrowVisible, setArrowVisible] = useState(arrow === 'always')

  // ref
  const carouselRef = useRef(null)
  const slickRef = useRef(null)

  // 对动画执行时间做一个封装
  const setMoveTransition = () => {
    setCanIMove(false)
    setTransitionDuration('300ms')
  }

  // arrow用到的函数，定时器也要用到，提出来
  const handleClickArrow = (direction: string) => {
    if (!canIMove) {
      return
    }
    setMoveTransition()
    if (direction === 'left') {
      setActive(active - 1)
      nativeActive = active - 1
    } else {
      setActive(active + 1)
      nativeActive = active + 1
    }
  }

  // 窗口变化，宽度重新设置
  useEffect(() => {
    const resize = () => {
      const carouselWidth = getComputedStyle(carouselRef.current as any)['width']
      setWidth(carouselWidth)
    }

    resize()

    window.addEventListener('resize', resize)
    return () => window.removeEventListener('resize', resize)
  }, [])

  // 监听动画逻辑
  useEffect(() => {
    const slickDOM = slickRef.current as any

    // 根据nativeActive设置active
    const listener = () => {
      if (nativeActive > length - 1) {
        nativeActive = 0
        setActive(0)
      }
      if (nativeActive < 0) {
        nativeActive = length - 1
        setActive(length - 1)
      }
      setTransitionDuration('0ms')
      setCanIMove(true)
    }

    listener()

    slickDOM.addEventListener('transitionend', listener)
    return () => slickDOM.removeEventListener('transitionend', listener)
  }, [])

  // // autoplay
  // useEffect(() => {
  //   setInterval(() => {
  //     setActive(active + 1)
  //     console.log(active)
  //   }, duration)
  // }, [])

  // 渲染指示器
  const indicatorRender = () => {
    const onIndicatorChange = (index: number) => {
      setMoveTransition()
      setActive(index)
      nativeActive = index
    }

    return (
      <div className={setClass('indicator')}>
        {React.Children.map(children as React.ReactElement, (child, index: number) => {
          if (child) {
            const isActive = index === active ? setClass('indicator-item-active') : null
            const childClassName = classnames(
              child.props.className,
              setClass('indicator-item'),
              isActive,
            )
            return (
              <div
                key={index}
                className={childClassName}
                onClick={() => onIndicatorChange(index)}></div>
            )
          }
          return
        })}
      </div>
    )
  }

  // 渲染箭头
  const arrowRender = () => {
    if (arrow === 'never') {
      return
    }

    const arrowClassName = (direction: string) => {
      return classnames(
        setClass('arrow'),
        arrow === 'hover' && setClass('arrow-hover'),
        setClass(`arrow-${direction}`),
      )
    }

    return (
      <Transition visible={arrowVisible}>
        <div>
          <div className={arrowClassName('left')} onClick={() => handleClickArrow('left')}>
            <Icon name="arrow-left" />
          </div>
          <div className={arrowClassName('right')} onClick={() => handleClickArrow('right')}>
            <Icon name="arrow-right" />
          </div>
        </div>
      </Transition>
    )
  }

  // 渲染内容
  const render = () => {
    const numberWidth = parseInt(width, 10)
    const slickStyle = {
      width: `${numberWidth * (length + 2)}px`,
      transform: `translateX(-${numberWidth * (active + 1)}px)`,
      transitionDuration,
    }

    const cloneElement = (cloneIndex: number) => {
      const cloneElement = (children as React.ReactElement[])[cloneIndex]
      const currentStyle = { ...cloneElement.props.style, width }
      return React.cloneElement(cloneElement, {
        key: (Math.random() * 1000).toFixed(2),
        className: classnames(cloneElement.props.className, setClass('slick-item')),
        style: currentStyle,
      })
    }

    return (
      <div ref={slickRef} className={classnames(setClass('slick'))} style={slickStyle}>
        {cloneElement(length - 1)}
        {React.Children.map(children as React.ReactElement, (child, index: number) => {
          const currentStyle = { ...child.props.style, width }
          return React.cloneElement(child, {
            key: index,
            className: classnames(child.props.className, setClass('slick-item')),
            style: currentStyle,
          })
        })}
        {cloneElement(0)}
      </div>
    )
  }

  const onMouseEnter = () => {
    arrow === 'hover' && setArrowVisible(true)
  }

  const onMouseLeave = () => {
    arrow === 'hover' && setArrowVisible(false)
  }

  return (
    <div
      ref={carouselRef}
      className={classnames(setClass(), className)}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      {...leftProps}>
      {render()}
      {dots && indicatorRender()}
      {arrowRender()}
    </div>
  )
}

export default Carousel
