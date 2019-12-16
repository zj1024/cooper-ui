import * as React from 'react'
import classnames from 'classnames'
import Icon from '../icon'
import { setPrefixClassName } from '../utils'
import './style.scss'

/**
 * @type {default | primary | success | warning | danger | info} button type
 * @plain {boolean}
 * @round {string} user custom set badges background color
 * @color {string} user custom set badges font color
 * @dot {boolean} badges only has a dot not have text
 * @any {[key: string]: any} allows the user to set other props automatically
 */
interface Props {
  type?: string
  plain?: boolean
  round?: boolean
  circle?: boolean
  loading?: boolean
  disabled?: boolean
  shadow?: boolean
  [key: string]: any
}

const setClass = setPrefixClassName('coo-button')

const Button: React.FC<Props> = ({
  type = 'default',
  children = null,
  className = '',
  plain = false,
  round = false,
  circle = false,
  loading = false,
  disabled = false,
  shadow = false,
  ...props
}) => {
  const getClassName = (hasClassName: boolean | string, className: string) => {
    return hasClassName ? className : ''
  }
  return (
    <button
      className={classnames(
        setClass(),
        setClass(type ? type : 'default'),
        getClassName(round, 'is-round'),
        getClassName(circle, 'is-circle'),
        getClassName(plain, 'is-plain'),
        getClassName(shadow, 'has-shadow'),
        className,
      )}
      disabled={disabled}
      {...props}>
      {/* 连续两次赋值children是为了loading状态下不给button设置flex */}
      {loading ? (
        <div className={setClass('loading-wrapper')}>
          <Icon name="loading" className={setClass('loading')} />
          {children}
        </div>
      ) : (
        <>{children}</>
      )}
    </button>
  )
}

export default Button
