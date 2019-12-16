import * as React from 'react'
import classnames from 'classnames'
import { setPrefixClassName } from '../utils'

import Icon from '../icon'

import './style.scss'

/**
 * @type {default | primary | success | warning | danger | info} button type
 * @plain {boolean} button plain style
 * @round {boolean} button style border-radius: 50px
 * @circle {boolean} button style border-radius: 50%
 * @loading {boolean} loading state will have a loading icon
 * @disabled {boolean} button disabled
 * @shadow {boolean} button have a shadow
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
  children,
  className,
  type = 'default',
  plain = false,
  round = false,
  circle = false,
  loading = false,
  disabled = false,
  shadow = false,
  ...props
}) => {
  return (
    <button
      className={classnames(
        setClass(),
        setClass(type ? type : 'default'),
        round && setClass('is-round'),
        circle && setClass('is-circle'),
        plain && setClass('is-plain'),
        shadow && setClass('has-shadow'),
        className,
      )}
      disabled={disabled}
      {...props}>
      {/* Children is assigned twice in a row in order not to set flex for button in loading state */}
      {loading ? (
        <div className={setClass('loading-wrapper')}>
          <Icon name="loading" className={setClass('loading')} />
          {children}
        </div>
      ) : (
        // must have fragment, otherwise, objects are not valid as a React child
        <>{children}</>
      )}
    </button>
  )
}

export default Button
