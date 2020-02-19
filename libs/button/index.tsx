import * as React from 'react'
import classnames from 'classnames'
import { setPrefixClassName } from '../utils'

import Icon from '../icon'

import './style.scss'

/**
 * @prop {default | primary | success | warning | danger | info} type button type
 * @prop {boolean} plain button plain style
 * @prop {boolean} round button style border-radius: 50px
 * @prop {boolean} circle button style border-radius: 50%
 * @prop {boolean} loading loading state will have a loading icon
 * @prop {boolean} disabled button disabled
 * @prop {boolean} shadow button have a shadow
 * @prop {[key: string]: any} any allows the user to set other props automatically
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
  shadow = true,
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
