import * as React from 'react'
import { useState, useEffect, useRef } from 'react'
import classnames from 'classnames'
import { setPrefixClassName } from '../utils'
import Icon from '../icon'

import './style.scss'

interface IProps {
  className?: string
  defaultActive?: number
  [key: string]: any
}

const setClass = setPrefixClassName('coo-carousel')

const Carousel: React.FC<IProps> = props => {
  const { children, className, defaultActive = 0, ...leftProps } = props
  const length = (children as React.ReactElement[]).length
  const [active, setActive] = useState(defaultActive)
  const [width, setWidth] = useState('')
  const carouselRef = useRef(null)

  useEffect(() => {
    const resize = () => {
      const carouselWidth = getComputedStyle(carouselRef.current as any)['width']
      setWidth(carouselWidth)
    }
    resize()
    window.addEventListener('resize', resize)
    return () => window.removeEventListener('resize', resize)
  }, [])

  useEffect(() => {
    console.log(width)
  }, [width])

  const onIndicatorChange = (index: number) => {
    setActive(index)
  }

  const indicator = () => (
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

  const arrow = () => {
    const handleClickArrow = (direction: string) => {
      if (direction === 'left') {
        if (active <= 0) {
          setActive(length - 1)
        } else {
          setActive(active - 1)
        }
      } else {
        if (active >= length - 1) {
          setActive(0)
        } else {
          setActive(active + 1)
        }
      }
    }

    return (
      <>
        <div
          className={classnames(setClass('arrow'), setClass('arrow-left'))}
          onClick={() => handleClickArrow('left')}>
          <Icon name="arrow-left" />
        </div>
        <div
          className={classnames(setClass('arrow'), setClass('arrow-right'))}
          onClick={() => handleClickArrow('right')}>
          <Icon name="arrow-right" />
        </div>
      </>
    )
  }

  const render = () => {
    const numberWidth = parseInt(width, 10)
    const slickStyle = {
      width: `${numberWidth * length}px`,
      transform: `translateX(-${numberWidth * active}px)`,
    }

    return (
      <div className={classnames(setClass('slick'))} style={slickStyle}>
        {React.Children.map(children as React.ReactElement, (child, index: number) => {
          const currentStyle = { ...child.props.style, width }
          return React.cloneElement(child, {
            key: index,
            className: classnames(child.props.className, setClass('slick-item')),
            style: currentStyle,
          })
        })}
      </div>
    )
  }

  return (
    <div ref={carouselRef} className={classnames(setClass(), className)} {...leftProps}>
      {render()}
      {indicator()}
      {arrow()}
    </div>
  )
}

export default Carousel
