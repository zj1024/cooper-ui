import * as React from 'react'
import { useState, useEffect } from 'react'
import classnames from 'classnames'
import { setPrefixClassName, isNumber } from '../utils'

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
  hideOnSinglePage?: boolean
  showQuickJumper?: boolean
  onChange?(current: number): void
  [key: string]: any
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
    hideOnSinglePage = false,
    showQuickJumper = false,
    onChange = () => {},
    ...leftProps
  } = props

  // 页码中位数指针
  const pivotIndex = Math.floor(pagerCount / 2)

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
  const [quickJumperValue, setQuickJumperValue] = useState('')

  // defaultCurrent 大于 页码坑位，重新计算页码值
  useEffect(() => {
    if (defaultCurrent > pagerCount) {
      setPagers(getNewPagers(current))
    }
  }, [])

  // 监听current触发回调
  useEffect(() => {
    // 解决快速翻页页码点击状态临界值图标回到省略状态
    if (current >= pageCount - pivotIndex) {
      setNextEllipsisIcon('ellipsis')
    }
    if (current <= pagerCount) {
      setPrevEllipsisIcon('ellipsis')
    }
    onChange && onChange(current)
  }, [current])

  if (hideOnSinglePage && pageCount <= 1) {
    return null
  }

  const onMouseEnter = (type: string) => {
    if (!disabled) {
      type === 'prev' ? setPrevEllipsisIcon('double-left') : setNextEllipsisIcon('double-right')
    }
  }
  const onMouseLeave = (type: string) => {
    if (!disabled) {
      type === 'prev' ? setPrevEllipsisIcon('ellipsis') : setNextEllipsisIcon('ellipsis')
    }
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
        pageCount > pagerCount && setPagers(getNewPagers(current - 1))
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
    let pointerPager = current

    if (pointerPager < pivotIndex + 1) {
      pointerPager = pivotIndex + 1
    }

    if (current > pageCount - pivotIndex) {
      pointerPager = pageCount - pivotIndex
    }

    let newPagers = []
    for (let i = 0; i < pagerCount; i++) {
      newPagers.push(pointerPager - pivotIndex + i)
    }
    return newPagers
  }

  const onQuickJumperChange = (e: { target: { value: React.SetStateAction<string> } }) => {
    setQuickJumperValue(e.target.value)
  }

  const onQuickJumperKeyDown = (e: React.KeyboardEvent) => {
    if (e.keyCode === 13) {
      const value = parseInt((e.target as any).value, 10)
      if (isNumber(value)) {
        onItemClick(value)
      }
      setQuickJumperValue('')
    }
  }

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
      {current > pagerCount && (
        <>
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
        </>
      )}

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
      {pageCount > pagerCount && current < pageCount - pivotIndex && (
        <>
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
        </>
      )}
      <li
        className={classnames(
          setClass('next'),
          (current === pageCount || disabled) && setClass('disabled'),
        )}
        onClick={() => onMenuClick('next')}
        title="下一页">
        <Icon name="arrow-right" />
      </li>
      {showQuickJumper && (
        <li className={classnames(setClass('quick-jumper'), disabled && setClass('disabled'))}>
          <span>跳至</span>
          <input
            className={setClass('quick-jumper-input')}
            value={quickJumperValue}
            onChange={onQuickJumperChange}
            onKeyDown={onQuickJumperKeyDown}
          />
          <span>页</span>
        </li>
      )}
    </ul>
  )
}

export default Pagination
