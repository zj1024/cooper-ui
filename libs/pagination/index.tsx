import * as React from 'react'
import { useState, useEffect } from 'react'
import classnames from 'classnames'
import { setPrefixClassName } from '../utils'

import Icon from '../icon'

import './style.scss'

interface Props {
  className?: string
  size?: 'normal' | 'small' | 'large'
  defaultCurrent?: number
  defaultPageSize?: number
  pagerCount?: number
  pageCount?: number
  disabled?: boolean
  onChange?: (current: number) => void
}

const setClass = setPrefixClassName('coo-pagination')

const Pagination: React.FC<Props> = props => {
  const {
    children,
    className,
    size = 'normal',
    defaultCurrent = 3,
    defaultPageSize = 5,
    pagerCount = 7,
    pageCount = 0,
    disabled = false,
    onChange = () => {},
    ...leftProps
  } = props

  // 页码按钮的数量，当总页数超过该值时会折叠
  const [pagers, setPagers] = useState(Array.from(Array(pagerCount), (d, i) => (d ? d : i + 1)))

  const [current, setCurrent] = useState(defaultCurrent)

  const onItemClick = (current: number) => {
    !disabled && setCurrent(current)
  }

  const onMenuClick = (type: string) => {
    if (!disabled) {
      if (type === 'prev') {
        current > 1 && setCurrent(current - 1)
      }
      if (type === 'next') {
        current < pageCount && setCurrent(current + 1)
      }
    }
  }

  // 换页核心方法
  const getNewPagers = (current: number) => {
    let pivotIndex = Math.floor(pagerCount / 2)
    let pointerPager = current

    if (pointerPager < pivotIndex + 1) {
      pointerPager = pivotIndex + 1
    }

    if (current > pageCount - pivotIndex) {
      pointerPager = pageCount - pivotIndex
    }

    let templatePagers = []
    for (let i = 0; i < pagerCount; i++) {
      templatePagers.push(pointerPager - pivotIndex + i)
    }
    return templatePagers
  }

  useEffect(() => {
    setPagers(getNewPagers(current))
    onChange(current)
  }, [current])

  return (
    <ul
      className={classnames(
        setClass(),
        size === 'normal' && setClass('normal'),
        size === 'small' && setClass('small'),
        size === 'large' && setClass('large'),
        className,
      )}
      {...leftProps}>
      <li
        className={classnames(
          setClass('prev'),
          (current === 1 || disabled) && setClass('disabled'),
        )}
        onClick={() => onMenuClick('prev')}>
        <Icon name="arrow-left" />
      </li>
      {pagers.map((d: number) => {
        return (
          <li
            key={d}
            className={classnames(
              setClass('item'),
              d === current && setClass('item-active'),
              disabled && setClass('disabled'),
            )}
            onClick={() => onItemClick(d)}>
            {d}
          </li>
        )
      })}
      <li
        className={classnames(
          setClass('next'),
          (current === pageCount || disabled) && setClass('disabled'),
        )}
        onClick={() => onMenuClick('next')}>
        <Icon name="arrow-right" />
      </li>
    </ul>
  )
}

export default Pagination