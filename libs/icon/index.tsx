import * as React from 'react'
import classNames from 'classnames'

import './style.scss'

interface Props {
  name: string
  className?: string
  [key: string]: any
}

const Icon: React.FunctionComponent<Props> = ({ name, className, ...props }) => {
  if (!name) {
    console.warn('Did you forget to declare "name" attribute')
    return null
  }
  return (
    <span
      dangerouslySetInnerHTML={{
        __html: require(`../assets/icons/${name}.svg`).default.toString(),
      }}
      className={classNames('c-svg', className)}
      {...props}></span>
  )
}

export default Icon
