import * as React from 'react'
import { useState, useEffect } from 'react'
import * as ReactDOM from 'react-dom'
import classnames from 'classnames'
import { setPrefixClassName, throttle } from '../utils'
import Icon from '../icon'

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
  target?: any
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
    target,
    ...leftProps
  } = props

  const targetDOM: HTMLElement = target ? target() : document.documentElement
  const listenerDOM = target ? target() : window

  const [visible, setVisible] = useState(false)

  // use throttle to improve performance
  const scrollListener = throttle(() => {
    const scrollTop = targetDOM.scrollTop
    ;+scrollTop > visibilityHeight ? setVisible(true) : setVisible(false)
    console.log('执行')
  }, 100)

  useEffect(() => {
    listenerDOM.addEventListener('scroll', scrollListener)
    return () => {
      console.log('执行清除')
      listenerDOM.removeEventListener('scroll', scrollListener)
    }
  }, [])

  const onBackTopClick = () => {
    listenerDOM.scroll({
      left: 0,
      top: 0,
      behavior,
    })
  }

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
