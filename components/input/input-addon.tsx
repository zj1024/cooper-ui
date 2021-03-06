import * as React from 'react'
import classnames from 'classnames'
import { setPrefixClassName } from '../utils'

interface Props {
  addonPlacement?: 'left' | 'right' | ''
  [key: string]: any
}

const setClass = setPrefixClassName('coo-input-addon')

const InputAddon: React.FC<Props> = props => {
  const { children, className, addonPlacement = '', ...leftProps } = props

  const isElement = React.isValidElement(children)

  return (
    <>
      {React.Children.map(children, (child, index) => {
        return (
          <div
            className={classnames(
              className,
              setClass(),
              addonPlacement && setClass(addonPlacement),
              isElement && setClass('is-element'),
            )}
            {...leftProps}
            key={index}>
            {child}
          </div>
        )
      })}
    </>
  )
}

export default InputAddon
