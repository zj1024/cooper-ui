import * as React from 'react'
import classnames from 'classnames'
import { setPrefixClassName } from '../utils'

import Input from './index'
import InputAddon from './input-addon'

interface Props {
  row?: boolean
  [key: string]: any
}

const setClass = setPrefixClassName('coo-input-group')

const InputGroup: React.FC<Props> = props => {
  const { children, className, row = true, ...leftProps } = props

  // find input size
  let size = 'middle'
  let hasAddon = false
  let addonPlacement = ''

  // 找出是否有组件并确定位置
  React.Children.forEach(children as React.ReactElement, (child: React.ReactElement, index) => {
    if (child.type === Input) {
      size = child?.props?.size || 'middle'
    }

    if (child.type === InputAddon) {
      hasAddon = true
      addonPlacement = index === 0 ? 'left' : 'right'
    }
  })

  const mapChildren = React.Children.map(
    children as React.ReactElement,
    (child: React.ReactElement) => {
      return React.cloneElement(
        child,
        addonPlacement
          ? {
              addonPlacement,
            }
          : {},
      )
    },
  )

  return (
    <div
      className={classnames(
        className,
        setClass(),
        size && setClass(size),
        hasAddon && setClass('has-addon'),
        !row && setClass('column'),
      )}
      {...leftProps}>
      {mapChildren}
    </div>
  )
}

export default InputGroup
