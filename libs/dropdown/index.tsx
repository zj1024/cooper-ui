import * as React from 'react'
import { useState, useEffect, useRef } from 'react'
import classnames from 'classnames'
import { setPrefixClassName } from '../utils'

import Transition from '../transition'
import Button from '../button'
import ButtonGroup from '../button/button-group'
import Icon from '../icon'

import DropdownMenu from './dropdown-menu'
import DropdownItem from './dropdown-item'

import './style.scss'

interface IProps {
  className?: string
  overlay: React.ReactElement
  placement?:
    | 'bottom-left'
    | 'bottom-center'
    | 'bottom-right'
    | 'top-left'
    | 'top-center'
    | 'top-right'
  trigger?: 'hover' | 'click'
  splitButton?: boolean
  // button
  type?: string
  plain?: boolean
  round?: boolean
  circle?: boolean
  loading?: boolean
  disabled?: boolean
  shadow?: boolean
  [key: string]: any
}

interface DropdownFC extends React.FC<IProps> {
  Menu(params?: any): any
  Item(params?: any): any
}

const setClass = setPrefixClassName('coo-dropdown')

const Dropdown: DropdownFC = props => {
  const {
    children,
    className,
    overlay,
    placement = 'bottom-left',
    trigger = 'hover',
    splitButton = false,
    type = 'primary',
    plain = false,
    round = false,
    circle = false,
    loading = false,
    disabled = false,
    shadow = true,
    ...leftProps
  } = props

  const [visible, setVisible] = useState(false)
  const overlayRef = useRef<any>(null)

  const isTopTransition = placement.split('-')[0] === 'top'

  const triggerFN = {
    onMouseEnter: trigger === 'hover' ? () => setVisible(true) : () => {},
    onMouseLeave: trigger === 'hover' ? () => setVisible(false) : () => {},
    onClick: trigger === 'click' ? () => setVisible(true) : () => {},
  }

  const universalTriggerFN = !splitButton ? triggerFN : {}
  const splitBtnTriggerFN = splitButton ? triggerFN : {}

  useEffect(() => {
    let bodyDispatchEvent: any
    let overlayDispatchEvent: any
    let isOverlayClick: boolean = false

    if (trigger === 'click' && visible) {
      // body注册事件
      bodyDispatchEvent = () => !isOverlayClick && setVisible(false)
      overlayDispatchEvent = () => (isOverlayClick = true)

      overlayRef.current.addEventListener('click', overlayDispatchEvent, false)
      document.body.addEventListener('click', bodyDispatchEvent, false)
    }

    return () => {
      if (bodyDispatchEvent) {
        overlayRef.current.removeEventListener('click', overlayDispatchEvent, false)
        document.body.removeEventListener('click', bodyDispatchEvent, false)
      }
    }
  }, [visible])

  return (
    <div className={classnames(setClass('wrapper'))} {...universalTriggerFN}>
      <div className={classnames(setClass(), className)} {...leftProps}>
        {splitButton ? (
          <ButtonGroup>
            <Button
              type={type}
              plain={plain}
              round={round}
              circle={circle}
              loading={loading}
              disabled={disabled}
              shadow={shadow}>
              {children}
            </Button>
            <Button
              type={type}
              plain={plain}
              round={round}
              circle={circle}
              loading={loading}
              disabled={disabled}
              shadow={shadow}
              {...splitBtnTriggerFN}>
              <Icon name="arrow-down" />
            </Button>
          </ButtonGroup>
        ) : (
          children
        )}
      </div>
      <Transition visible={visible} classNames="dropdown-transition">
        <div
          className={classnames(
            setClass('overlay'),
            setClass(`overlay-${placement}`),
            isTopTransition && setClass('overlay-top'),
          )}
          ref={overlayRef}>
          {React.cloneElement(overlay, {
            onClick: () => setVisible(false),
          })}
        </div>
      </Transition>
    </div>
  )
}

Dropdown.Menu = DropdownMenu
Dropdown.Item = DropdownItem

export default Dropdown
