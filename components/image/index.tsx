import * as React from 'react'
import { useState, useEffect, useCallback, useRef } from 'react'
import classnames from 'classnames'
import { setPrefixClassName, throttle, getScrollContainer, isInContainer } from '../utils'

import Icon from '../icon'

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
  lazy?: boolean
  error?: React.ReactNode
  fallbackSrc?: string
  onError?: (params?: any) => any
  [key: string]: any
}

const setClass = setPrefixClassName('coo-image')

const Image: React.FC<Props> = props => {
  const {
    className,
    style,
    fit,
    src,
    lazy = false,
    error,
    fallbackSrc,
    onError,
    ...leftProps
  } = props

  const [isError, setIsError] = useState(false)
  const [show, setShow] = useState<boolean>(false)

  // lazymode
  let _scrollContainer: HTMLElement | any = null
  let _lazyLoadHandler: HTMLElement | any = null
  const $el = useRef(null)
  const showRef: any = useRef(show)

  const handleLazyLoad = () => {
    if (showRef.current !== true) {
      const isShow = isInContainer($el.current as any, _scrollContainer)
      if (isShow) {
        setShow(() => {
          showRef.current = true
          return showRef.current
        })
        _scrollContainer.removeEventListener('scroll', _lazyLoadHandler)
      }
    }
  }

  useEffect(() => {
    if (lazy) {
      _scrollContainer = getScrollContainer($el.current)
      _lazyLoadHandler = throttle(handleLazyLoad, 200)

      _scrollContainer.addEventListener('scroll', _lazyLoadHandler)
      return () => {
        _scrollContainer.removeEventListener('scroll', _lazyLoadHandler)
      }
    }
    return
  }, [])

  const onImageError = useCallback((e: any) => {
    setIsError(true)
    onError && onError(e)
  }, [])

  const Wrapper = React.forwardRef((wrapperProps: any, ref: any) => {
    const { className, style, children } = wrapperProps
    return (
      <div ref={ref} className={classnames(setClass(), className)} style={style}>
        {children}
      </div>
    )
  })

  const Img = (imgProps: any) => {
    const { src, fit, onImageError, ...imgLeftProps } = imgProps
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
    <Wrapper ref={$el} className={className} style={style}>
      {/* <div className="h-500 fs-80">placeholder</div> */}
      <Img src={src} onImageError={onImageError} fit={fit} {...leftProps} />
    </Wrapper>
  )
}

export default Image
