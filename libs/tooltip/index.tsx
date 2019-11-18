import * as React from 'react'
import { useState } from 'react'
import classnames from 'classnames'
import { setPrefixClassName } from '../utils'

import './style.scss'

interface Props {
  className?: string
  content: React.ReactElement | string
}

const setClass = setPrefixClassName('coo-tooltip')

const Tooltip: React.FC<Props> = props => {
  const { children, className, content, ...leftProps } = props

  const [visible, setVisible] = useState(false)

  const handleToggleTooltip = (isShow: boolean) => {
    setVisible(isShow)
    console.log(1)
  }

  return (
    <div className={classnames(setClass(), className)} {...leftProps}>
      <div
        onMouseEnter={() => handleToggleTooltip(true)}
        onMouseLeave={() => handleToggleTooltip(false)}>
        {children}
      </div>
      {/* {ReactDOM.createPortal(<div>{content}</div>, document.body)} */}
      <div
        className={classnames(
          setClass('content'),
          visible ? setClass('content-show') : setClass('content-hidden'),
        )}>
        <i className={setClass('content-icon')}></i>
        {content}
      </div>
    </div>
  )
}

export default Tooltip
