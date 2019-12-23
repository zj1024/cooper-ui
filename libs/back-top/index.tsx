import * as React from 'react'
import { useState, useEffect } from 'react'
import * as ReactDOM from 'react-dom'
import classnames from 'classnames'
import { setPrefixClassName, throttle } from '../utils'
console.log(throttle)
import Icon from '../icon'

import './style.scss'

interface Props {
  className?: string
  behavior?: 'smooth' | 'auto'
  visibilityHeight?: number
}

const setClass = setPrefixClassName('coo-back-top')

const BackTop: React.FC<Props> = props => {
  const { className, children, behavior = 'smooth', visibilityHeight = 400, ...leftProps } = props

  const [visible, setVisible] = useState(false)

  const onBackTopClick = () => {
    window.scroll({
      left: 0,
      top: 0,
      behavior,
    })
  }

  const scrollListener = throttle(() => {
    const scrollTop = document.documentElement.scrollTop
    ;+scrollTop > visibilityHeight ? setVisible(true) : setVisible(false)
  }, 100)

  useEffect(() => {
    window.addEventListener('scroll', scrollListener)
    return () => {
      window.removeEventListener('scroll', scrollListener)
    }
  }, [])

  return (
    <>
      {ReactDOM.createPortal(
        <div
          className={classnames(setClass(), visible && setClass('visible'), className)}
          onClick={onBackTopClick}
          {...leftProps}>
          {children ? children : <Icon name="back-top"></Icon>}
        </div>,
        document.body,
      )}
    </>
  )
}

export default BackTop
