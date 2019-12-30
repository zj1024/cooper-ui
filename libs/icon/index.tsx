import * as React from 'react'
import classNames from 'classnames'

import './style.scss'

interface Props {
  name?: string
  component?: string
  className?: string
  [key: string]: any
}

const Icon: React.FC<Props> = props => {
  const { name, className, component, ...leftProps } = props

  if (!name && !component) {
    console.warn('Did you forget to assign a value to the name or component attribute?')
    return null
  }

  let iconString = ''

  if (name) {
    iconString = require(`../assets/icons/${name}.svg`).default
  }

  if (component) {
    iconString = component
  }

  return (
    <span
      dangerouslySetInnerHTML={{
        __html: iconString,
      }}
      className={classNames('coo-icon', className)}
      {...leftProps}></span>
  )
}

export default Icon
