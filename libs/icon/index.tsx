import * as React from 'react'
import classNames from 'classnames'

import './style.scss'

interface Props {
  name: string
  className?: string
  [key: string]: any
}

const Icon: React.FC<Props> = ({ name, className, ...props }) => {
  if (!name) {
    console.warn('Did you forget to assign a value to the name attribute?')
    return null
  }
  return (
    <span
      dangerouslySetInnerHTML={{
        __html: require(`../assets/icons/${name}.svg`).default,
      }}
      className={classNames('c-icon', className)}
      {...props}></span>
  )
}

export default Icon
