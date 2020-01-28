import * as React from 'react'
import classnames from 'classnames'
import { setPrefixClassName } from '../utils'

import './style.scss'

/**
 * @prop {boolean} dashed line style
 * @prop {left | center | right} orientation text-align
 * @prop {horizontal | vertical} type the divider direction
 * @prop {[key: string]: any} any allows the user to set other props automatically
 */
interface Props {
  className?: string
  dashed?: boolean
  orientation?: 'left' | 'center' | 'right'
  type?: 'horizontal' | 'vertical'
  [key: string]: any
}

const setClass = setPrefixClassName('coo-divider')

const Divider: React.FC<Props> = props => {
  const {
    children,
    className,
    dashed = false,
    orientation = 'center',
    type = 'horizontal',
    ...leftProps
  } = props
  return (
    <div
      className={classnames(
        setClass(),
        dashed && setClass('dashed'),
        orientation === 'left' && setClass('left'),
        orientation === 'right' && setClass('right'),
        type === 'vertical' && setClass('vertical'),
        className,
      )}
      {...leftProps}>
      {type === 'horizontal' && children && <span className={setClass('content')}>{children}</span>}
    </div>
  )
}

export default Divider
