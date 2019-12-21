import * as React from 'react'
import { useState, useEffect } from 'react'
import classnames from 'classnames'
import { setPrefixClassName } from '../utils'

import Icon from '../icon'

import './style.scss'

// pagerCount 页码按钮的数量
// size 组件大小
// defaultCurrent 默认active
// pageCount 总页数
// onChange 点击触发回调
interface Props {
  className?: string
  size?: 'normal' | 'small' | 'large'
  defaultCurrent?: number
  pagerCount?: number
  pageCount?: number
  disabled?: boolean
  onChange?: (current: number) => void
}

const setClass = setPrefixClassName('coo-pagination')

const Pagination: React.FC<Props> = props => {
  const {
    className,
    size = 'normal',
    defaultCurrent = 1,
    pagerCount = 5,
    pageCount = 0,
    disabled = false,
    onChange = () => {},
    ...leftProps
  } = props

  // 页码按钮的数量，当总页数超过该值时会折叠
  const initPagers = Array.from(
    Array(pageCount <= pagerCount ? pageCount : pagerCount),
    (pager, index) => (pager ? pager : index + 1),
  )
  const [pagers, setPagers] = useState(initPagers)

  const [current, setCurrent] = useState(defaultCurrent)

  // 快速翻页按钮
  const [prevEllipsisIcon, setPrevEllipsisIcon] = useState('ellipsis')
  const [nextEllipsisIcon, setNextEllipsisIcon] = useState('ellipsis')

  const onMouseEnter = (type: string) => {
    type === 'prev' ? setPrevEllipsisIcon('double-left') : setNextEllipsisIcon('double-right')
  }
  const onMouseLeave = (type: string) => {
    type === 'prev' ? setPrevEllipsisIcon('ellipsis') : setNextEllipsisIcon('ellipsis')
  }

  const onItemClick = (current: number) => {
    if (!disabled) {
      pageCount > pagerCount && setPagers(getNewPagers(current))
      if (current > pageCount) {
        Promise.resolve().then(() => {
          setCurrent(pageCount)
        })
        return
      }
      if (current < 1) {
        Promise.resolve().then(() => {
          setCurrent(1)
        })
        return
      }
      Promise.resolve().then(() => {
        setCurrent(current)
      })
    }
  }

  const onMenuClick = (type: string) => {
    if (!disabled) {
      if (type === 'prev') {
        setPagers(getNewPagers(current - 1))
        Promise.resolve().then(() => {
          current > 1 && setCurrent(current - 1)
        })
      }
      if (type === 'next') {
        pageCount > pagerCount && setPagers(getNewPagers(current + 1))
        Promise.resolve().then(() => {
          current < pageCount && setCurrent(current + 1)
        })
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
        onClick={() => onMenuClick('prev')}
        title="上一页">
        <Icon name="arrow-left" />
      </li>
      <li
        className={classnames(setClass('item'), disabled && setClass('disabled'))}
        onClick={() => onItemClick(1)}
        title="1">
        {1}
      </li>
      <li
        className={classnames(setClass('item'), disabled && setClass('disabled'))}
        onMouseEnter={() => onMouseEnter('prev')}
        onMouseLeave={() => onMouseLeave('prev')}
        onClick={() => onItemClick(current - pagerCount)}
        title={`向前${pagerCount}页`}>
        <Icon name={prevEllipsisIcon} />
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
            onClick={() => onItemClick(d)}
            title={`${d}`}>
            {d}
          </li>
        )
      })}
      <li
        className={classnames(setClass('item'), disabled && setClass('disabled'))}
        onMouseEnter={() => onMouseEnter('next')}
        onMouseLeave={() => onMouseLeave('next')}
        onClick={() => onItemClick(current + pagerCount)}
        title={`向后${pagerCount}页`}>
        <Icon name={nextEllipsisIcon} />
      </li>
      <li
        className={classnames(setClass('item'), disabled && setClass('disabled'))}
        onClick={() => onItemClick(pageCount)}
        title={`${pageCount}`}>
        {pageCount}
      </li>
      <li
        className={classnames(
          setClass('next'),
          (current === pageCount || disabled) && setClass('disabled'),
        )}
        onClick={() => onMenuClick('next')}
        title="下一页">
        <Icon name="arrow-right" />
      </li>
    </ul>
  )
}

export default Pagination
