import * as React from 'react'
import { useState } from 'react'
import classnames from 'classnames'
import { setPrefixClassName } from '../utils'

import Icon from '../icon'

import './style.scss'

interface Props {
  style?: any
  className?: string
  src?: string
  fit?:
    | '-moz-initial'
    | 'inherit'
    | 'initial'
    | 'revert'
    | 'unset'
    | 'contain'
    | 'cover'
    | 'fill'
    | 'none'
    | 'scale-down'
    | undefined
  error?: React.ReactNode
  fallbackSrc?: string
  onError?: (params?: any) => any
  [key: string]: any
}

const setClass = setPrefixClassName('coo-image')

const Image: React.FC<Props> = props => {
  const { className, style, fit, src, error, fallbackSrc, onError, ...leftProps } = props
  const [isError, setIsError] = useState(false)
  const onImageError = (e: any) => {
    setIsError(true)
    onError && onError(e)
  }

  const Wrapper = (wrapperProps: any) => {
    const { className, style, children } = wrapperProps
    return (
      <div className={classnames(setClass(), className)} style={style}>
        {children}
      </div>
    )
  }

  const Img = (imgProps: any) => {
    const { src, fit, onImageError, imgLeftProps } = imgProps
    return (
      <img
        src={src}
        className={setClass('inner')}
        style={{ objectFit: fit }}
        onError={onImageError}
        {...imgLeftProps}
      />
    )
  }

  if (isError) {
    if (fallbackSrc) {
      return (
        <Wrapper className={className} style={style}>
          <Img src={fallbackSrc} onImageError={null} fit={fit} {...leftProps} />
        </Wrapper>
      )
    } else {
      if (error) {
        return (
          <Wrapper className={className} style={style}>
            {error}
          </Wrapper>
        )
      } else {
        return (
          <Wrapper className={className} style={style}>
            <div className={setClass('error')}>
              <Icon className={setClass('error-icon')} name="img-error" />
            </div>
          </Wrapper>
        )
      }
    }
  }

  return (
    <Wrapper className={className} style={style}>
      <Img src={src} onImageError={onImageError} fit={fit} {...leftProps} />
    </Wrapper>
  )
}

export default Image
