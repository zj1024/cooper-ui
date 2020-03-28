import * as React from 'react'
import { useState, useEffect, useRef } from 'react'
import classnames from 'classnames'
import { setPrefixClassName, isArray, isString } from '../utils'

import Transition from '../transition'
import Button from '../button'
import ButtonGroup from '../button/button-group'
import Icon from '../icon'

import DropdownMenu from './dropdown-menu'
import DropdownItem from './dropdown-item'

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
    onClick: trigger === 'click' ? () => setVisible(state => !state) : () => {},
  }

  const hoverFN = { onMouseLeave: triggerFN.onMouseLeave, onMouseEnter: triggerFN.onMouseEnter }
  const clickFN = { onClick: triggerFN.onClick }

  const universalHoverFN = hoverFN
  const universalClickFN = !splitButton ? clickFN : {}
  const splitBtnClickFN = trigger === 'click' ? clickFN : {}

  useEffect(() => {
    let bodyDispatchEvent: any
    let overlayDispatchEvent: any
    let isOverlayClick: boolean = false

    if (trigger === 'click' && visible) {
      overlayDispatchEvent = () => (isOverlayClick = true)
      bodyDispatchEvent = (e: any) => {
        let isDropdown = false

        // 判断是否是dropdown
        if (isArray(e.path) && e.path.length) {
          isDropdown =
            e.path.findIndex((d: any) => {
              if (isString(d.className)) {
                return d.className.includes(setClass())
              } else {
                return false
              }
            }) > -1
        }

        if (isDropdown) return

        !isOverlayClick && setVisible(false)
      }

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
    <div className={classnames(setClass('wrapper'))} {...universalHoverFN}>
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
              {...splitBtnClickFN}>
              <Icon name="arrow-down" />
            </Button>
          </ButtonGroup>
        ) : (
          React.cloneElement(children as any, { ...universalClickFN })
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
