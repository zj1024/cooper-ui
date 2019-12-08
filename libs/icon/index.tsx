import * as React from 'react'
import classNames from 'classnames'

import './style.scss'

interface Props {
  name?: string
  className?: string
  component?: string
  [key: string]: any
}

const Icon: React.FC<Props> = props => {
  const { name, className, component, ...leftProps } = props

  if (!name && !component) {
    console.warn('Did you forget to assign a value to the name attribute?')
    return null
  }

  return (
    <span
      dangerouslySetInnerHTML={{
        __html: require(`../assets/icons/${name}.svg`).default,
      }}
      className={classNames('coo-icon', className)}
      {...leftProps}></span>
  )
}

export default Icon
