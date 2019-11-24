import * as React from 'react'
import classnames from 'classnames'

import { setPrefixClassName } from '../utils'

import './style.scss'

export interface Props {
  children?: React.ReactNode
  className?: string
  value: string
}

// radio function api
interface RadioFC extends React.FC<Props> {
  Group: (props?: any) => any
}

const setClass = setPrefixClassName('coo-radio')

const Radio: RadioFC = props => {
  const { children, className, value, ...leftProps } = props
  return (
    <div className={classnames(setClass(), className)} {...leftProps}>
      <label>
        <input type="radio" value={value} />
        {children}
      </label>
    </div>
  )
}

/**
 * @function api
 * Declare that the direct reference to the function is invalid
 */
Radio.Group = () => {}

export default Radio
