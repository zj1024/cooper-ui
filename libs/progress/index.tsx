import * as React from 'react'
import classnames from 'classnames'
import { setPrefixClassName } from '../utils'
import Icon from '../icon'

interface Props {
  className?: string
  percent?: number
  status?: 'error' | 'success' | null
  color?: string
  [key: string]: any
}

const setClass = setPrefixClassName('coo-progress')

const Progress: React.FC<Props> = props => {
  const { className, percent, status, color, ...leftProps } = props
  return (
    <div className={classnames(setClass('wrapper'), className)}>
      <div className={setClass()} {...leftProps}>
        {percent !== undefined ? (
          <div
            className={classnames(
              setClass('percent-bar'),
              (percent === 100 || status === 'success') && setClass('success'),
              status === 'error' && setClass('error'),
            )}
            style={{ width: `${percent}%`, background: color }}></div>
        ) : (
          <div
            className={classnames(
              setClass('bar'),
              status === 'success' && setClass('success'),
              status === 'error' && setClass('error'),
            )}
            style={{ background: color }}></div>
        )}
      </div>
      {(percent !== undefined || status === 'error' || status === 'success') && (
        <Icon
          className={classnames(
            setClass('icon'),
            status === 'error' && setClass('icon-error'),
            (percent === 100 || status === 'success') && setClass('icon-success'),
          )}
          name={status === 'error' ? 'error' : 'success'}
        />
      )}
    </div>
  )
}

export default Progress
