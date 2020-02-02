import * as React from 'react'
import { useState, useEffect } from 'react'
import * as ReactDOM from 'react-dom'
import classnames from 'classnames'
import { setPrefixClassName, throttle } from '../utils'
import Icon from '../icon'

import './style.scss'

/**
 * @prop {smooth | auto} behavior scroll spread or reset behavior
 * @prop {number} visibilityHeight scrollTop show component
 * @prop {boolean} animat show or hide have animation?
 * @prop {[key: string]: any} any allows the user to set other props automatically
 */
interface Props {
  className?: string
  behavior?: 'smooth' | 'auto'
  visibilityHeight?: number
  animat?: boolean
  [key: string]: any
}

const setClass = setPrefixClassName('coo-back-top')

const BackTop: React.FC<Props> = props => {
  const {
    className,
    children,
    behavior = 'smooth',
    visibilityHeight = 400,
    animat = true,
    ...leftProps
  } = props

  const [visible, setVisible] = useState(false)

  const onBackTopClick = () => {
    window.scroll({
      left: 0,
      top: 0,
      behavior,
    })
  }

  // use throttle to improve performance
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
          className={classnames(
            setClass(),
            visible && setClass('visible'),
            animat && setClass('animat'),
            className,
          )}
          onClick={onBackTopClick}
          {...leftProps}>
          {children ? children : <Icon name="back-top" />}
        </div>,
        document.body,
      )}
    </>
  )
}

export default BackTop