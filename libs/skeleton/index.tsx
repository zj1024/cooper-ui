import * as React from 'react'
import classnames from 'classnames'
import { setPrefixClassName } from '../utils'

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
  animat?: boolean
  [key: string]: any
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
    animat = true,
    ...leftProps
  } = props

  const animatClassName = animat ? setClass('animat') : null

  return (
    <>
      {loading ? (
        <div
          className={classnames(setClass(), className, avatar && setClass('has-avatar'))}
          {...leftProps}>
          {(avatar || title) && (
            <div className={classnames(setClass('avatar-wrapper'), animatClassName)}>
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
            <div className={classnames(setClass('row-one'), animatClassName)}></div>
          ) : (
            Array(row)
              .fill(1)
              .map((_d, i: number) => {
                return <div key={i} className={classnames(setClass('row'), animatClassName)}></div>
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
