import * as React from 'react'
import { useState } from 'react'
import classnames from 'classnames'
import { setPrefixClassName } from '../utils'
import Icon from '../icon'

import './style.scss'

interface Props {
  className?: string
  fold: React.ReactNode
  foldName?: string
}

const setClass = setPrefixClassName('coo-foldcard')

const Foldcard: React.FC<Props> = props => {
  const [visible, setVisible] = useState(false)
  const { children, className, fold, foldName, ...leftProps } = props
  return (
    <section className={classnames(setClass(), className)} {...leftProps}>
      <div className={setClass('content')}>{children}</div>
      <footer className={setClass('footer')}>
        <div className={setClass('footer-main')}>
          <p className={setClass('footer-spread')} onClick={() => setVisible(!visible)}>
            <Icon name={visible ? 'arrow-up' : 'arrow-down'} className={setClass('footer-icon')} />
            <span>{foldName ? foldName : '展开'}</span>
          </p>
        </div>
      </footer>
      <div
        onClick={() => console.log(1)}
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
