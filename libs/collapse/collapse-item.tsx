import * as React from 'react'
import { useState, useRef } from 'react'
import classnames from 'classnames'
import { setPrefixClassName, stringEqual } from '../utils'

import Icon from '../icon'

import './style.scss'

/**
 * private props, passed through the parent component and parent in control
 * @prop {string} name unique sign
 * @prop {boolean} contentvisible expanded
 * @prop {(name: string, visible: boolean) => void} onClick pass the item new state to the parent
 */
interface PrivateProps {
  name?: string
  contentvisible?: boolean
  onClick?: (name: string, visible: boolean) => void
}

/**
 * @prop title {string} collpase item title
 * @prop any {[key: string]: any} allows the user to set other props automatically
 */
interface Props extends PrivateProps {
  className?: string
  title: string
  [key: string]: any
}

const setClass = setPrefixClassName('coo-collapse-item')

const CollapseItem: React.FC<Props> = props => {
  const { children, className, name = '0', contentvisible, title, onClick = () => {} } = props

  // Initialize

  const visible = stringEqual(contentvisible, true)

  // Expanded item style
  const callbackContentStyle = { display: 'block', height: '0' }

  // Initialize done

  // Set init style by visible
  const [contentStyle, setContentStyle] = useState(visible ? ({ display: 'block' } as any) : {})
  const contentRef = useRef(null)

  // Gets the height of the element to animate with height
  React.useEffect(() => {
    Promise.resolve().then(() => {
      const contentHeight = getComputedStyle(contentRef.current as any)['height']
      if (visible) {
        setContentStyle({ display: 'block', height: contentHeight })
      }
    })
  }, [])

  // Set animat by props contentvisible
  React.useEffect(() => {
    if (stringEqual(contentvisible, true) === false) {
      setContentStyle(callbackContentStyle)
      setTimeout(() => {
        setContentStyle({ display: 'none' })
      }, 290)
    }
  }, [contentvisible])

  // if animat not done, then clean funciton
  let closeTimer: any
  let openTimer: any
  const onTitleClick = () => {
    openTimer && clearTimeout(openTimer)
    closeTimer && clearTimeout(closeTimer)

    // parent onCick callback
    onClick(name, stringEqual(contentvisible, true))

    /**
     * @param {string} contentvisible
     * judge animat state by props contentvisible
     * contentvisible === false is expanded animat, there 'false' is last time state
     */
    if (!stringEqual(contentvisible, true)) {
      setContentStyle({ display: 'block' })

      // setContentStyle is async function, use Promise for wait display = block and animat
      Promise.resolve().then(() => {
        const contentHeight = getComputedStyle(contentRef.current as any)['height']

        // init animat state
        setContentStyle(callbackContentStyle)
        openTimer = setTimeout(() => {
          // 20ms to ensure that the animation occurs
          setContentStyle({ display: 'block', height: contentHeight })
        }, 20)
      })
    } else {
      // close animat
      setContentStyle(callbackContentStyle)
      closeTimer = setTimeout(() => {
        setContentStyle({ display: 'none' })
      }, 290)
    }
  }

  return (
    <div className={classnames(setClass(''), className)}>
      <div
        className={classnames(setClass('title'), visible && setClass('title-visible'))}
        onClick={onTitleClick}>
        <Icon className={setClass('title-icon')} name="arrow-right"></Icon>
        <p>{title}</p>
      </div>
      <div ref={contentRef} className={setClass('content')} style={contentStyle}>
        {children}
      </div>
    </div>
  )
}

export default CollapseItem
