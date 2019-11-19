import * as React from 'react'
import { useState } from 'react'
import classnames from 'classnames'
import { setPrefixClassName } from '../utils'
import Icon from '../icon'

import './style.scss'

interface Props {
  className?: string
  fold: React.ReactNode
  // foldcardClose?: (done: any) => void
  // footer?: React.ReactElement
}

const setClass = setPrefixClassName('coo-foldcard')

const Foldcard: React.FC<Props> = props => {
  const [visible, setVisible] = useState(false)
  const { children, className, fold, ...leftProps } = props
  return (
    <section className={classnames(setClass(), className)} {...leftProps}>
      <div className={setClass('content')}>{children}</div>
      <footer className={setClass('footer')}>
        <div className={setClass('footer-main')}>
          <p className={setClass('footer-spread')} onClick={() => setVisible(!visible)}>
            <Icon name="arrow-down" className={setClass('footer-icon')} />
            <span>展开</span>
          </p>
          {/* <div onClick={() => foldcardClose && foldcardClose(setVisible)}>{footer}</div> */}
        </div>
      </footer>
      <div
        className={classnames(
          setClass('card'),
          visible ? setClass('card-show') : setClass('card-hidden'),
        )}>
        {fold}
      </div>
    </section>
  )
}

export default Foldcard
