import * as React from 'react'
import classnames from 'classnames'
import { setPrefixClassName } from '../utils'

import './style.scss'

// avatarShape: default: round, square
// avatarSize: {number}px
interface Props {
  className?: string
  loading: boolean
  row?: number
  avatar?: boolean
  avatarShape?: string
  avatarSize?: string
  title?: boolean
}

const setClass = setPrefixClassName('coo-skeleton')

const Skeleton: React.FC<Props> = props => {
  const {
    children,
    className,
    loading,
    row = 4,
    avatar = false,
    avatarShape = 'round',
    avatarSize = '32px',
    title = true,
    ...leftProps
  } = props
  return (
    <>
      {loading ? (
        <div
          className={classnames(setClass(), className, avatar && setClass('has-avatar'))}
          {...leftProps}>
          {(avatar || title) && (
            <div className={classnames(setClass('avatar-wrapper'), setClass('animat'))}>
              {avatar && (
                <div
                  className={setClass('avatar')}
                  style={{
                    borderRadius: avatarShape === 'round' ? '50%' : 'none',
                    width: avatarSize,
                    height: avatarSize,
                  }}></div>
              )}
              {title && <div className={setClass('title')}></div>}
            </div>
          )}
          {row === 1 ? (
            <div className={classnames(setClass('row-one'), setClass('animat'))}></div>
          ) : (
            Array(row)
              .fill(1)
              .map((_d, i: number) => {
                return (
                  <div key={i} className={classnames(setClass('row'), setClass('animat'))}></div>
                )
              })
          )}
        </div>
      ) : (
        <>{children}</>
      )}
    </>
  )
}

export default Skeleton