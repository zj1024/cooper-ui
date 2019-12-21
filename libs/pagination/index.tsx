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
  total?: number
  disabled?: boolean
  onChange?: (current: number) => void
}

const setClass = setPrefixClassName('coo-pagination')

const Pagination: React.FC<Props> = props => {
  const {
    children,
    className,
    size = 'normal',
    defaultCurrent = 1,
    defaultPageSize = 5,
    total = 0,
    disabled = false,
    onChange = () => {},
    ...leftProps
  } = props

  const totalArr = Array.from(Array(total), (d, i) => (d ? d : i))

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
        current < total && setCurrent(current + 1)
      }
    }
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
        onClick={() => onMenuClick('prev')}>
        <Icon name="arrow-left" />
      </li>
      {totalArr.map((d: number) => {
        const now = d + 1
        return (
          <li
            key={d}
            className={classnames(
              setClass('item'),
              now === current && setClass('item-active'),
              disabled && setClass('disabled'),
            )}
            onClick={() => onItemClick(now)}>
            {now}
          </li>
        )
      })}
      <li
        className={classnames(
          setClass('next'),
          (current === total || disabled) && setClass('disabled'),
        )}
        onClick={() => onMenuClick('next')}>
        <Icon name="arrow-right" />
      </li>
    </ul>
  )
}

export default Pagination
