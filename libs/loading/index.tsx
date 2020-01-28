import * as React from 'react'
import classnames from 'classnames'
import { setPrefixClassName } from '../utils'
import Icon from '../icon'
import Transition from '../transition'

import './style.scss'

/**
 * @prop {boolean} visible
 * @prop {string} color loading icon color
 * @prop {light | dark} type loading theme
 * @prop {[key: string]: any} any allows the user to set other props automatically
 */
interface Props {
  className?: string
  visible: boolean
  color?: string
  type?: 'light' | 'dark'
  [key: string]: any
}

const setClass = setPrefixClassName('coo-loading')

const Loading: React.FC<Props> = props => {
  const { children, className, visible, color, type = 'light', ...leftProps } = props
  return (
    <div className={classnames(setClass('container'), className)} {...leftProps}>
      {children}
      <Transition visible={visible}>
        <div
          className={classnames(setClass('mask'), type === 'dark' ? setClass('mask-dark') : null)}>
          <div className={setClass('wrapper')}>
            <Icon
              className={setClass('')}
              style={{ color }}
              name={type === 'dark' ? 'loading-spot' : 'loading-rotate'}
            />
          </div>
        </div>
      </Transition>
    </div>
  )
}

export default Loading
