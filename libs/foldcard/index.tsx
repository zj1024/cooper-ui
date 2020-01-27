import * as React from 'react'
import { useState, useRef, useEffect } from 'react'
import classnames from 'classnames'
import { setPrefixClassName } from '../utils'
import Icon from '../icon'
// import Transition from '../transition'

import './style.scss'

interface Props {
  className?: string
  fold: React.ReactNode
  foldName?: string
  [key: string]: any
}

const setClass = setPrefixClassName('coo-foldcard')

const Foldcard: React.FC<Props> = props => {
  const foldRef = useRef(null)
  const [visible, setVisible] = useState(false)
  // 获取高度，便于折叠 TODO: 麻烦，要想出更好的解决方案
  const [foldHeight, setFoldHeight] = useState({})

  useEffect(() => {
    if (Object.prototype.toString.call(foldRef.current) === '[object HTMLDivElement]') {
      const height = window.getComputedStyle(foldRef.current as any)['height']
      // setFoldHeight({ entered: { height } })
      setFoldHeight({ height })
    }
  }, [])

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
        style={visible ? foldHeight : {}}
        className={classnames(setClass('card'), !visible && setClass('card-hidden'))}>
        <div ref={foldRef}>{fold}</div>
      </div>
    </section>
  )
}

export default Foldcard
