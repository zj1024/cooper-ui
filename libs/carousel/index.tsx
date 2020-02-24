import * as React from 'react'
import { useState, useEffect } from 'react'
import classnames from 'classnames'
import { setPrefixClassName } from '../utils'

import './style.scss'

interface IProps {
  className?: string
  height: string
  defaultActive?: number
  [key: string]: any
}

const setClass = setPrefixClassName('coo-carousel')

const Carousel: React.FC<IProps> = props => {
  const { children, className, style, height, defaultActive = 0, ...leftProps } = props
  const length = (children as React.ReactElement[]).length
  const [active, setActive] = useState(defaultActive)

  useEffect(() => {
    console.log(length, setActive)
  }, [])

  const onIndicatorChange = (index: number) => {
    setActive(index)
  }

  const indicator = () => {
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

  const render = () => {
    return React.Children.map(children as React.ReactElement, (child, index: number) => {
      const isActive = index === active ? setClass('slick-active') : setClass('slick-left')
      const childClassName = classnames(child.props.className, setClass('slick'), isActive)

      return React.cloneElement(child, {
        key: index,
        className: childClassName,
      })
    })
  }

  return (
    <div className={classnames(setClass(), className)} style={{ ...style, height }} {...leftProps}>
      {render()}
      {indicator()}
    </div>
  )
}

export default Carousel
