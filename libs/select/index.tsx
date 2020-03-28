import * as React from 'react'
import { useState } from 'react'
import classnames from 'classnames'
import { setPrefixClassName, isArray, isUndefined } from '../utils'
import Dropdown from '../dropdown'
import Input from '../input'
import Icon from '../icon'
import SelectOption from './select-option'

interface IProps {
  className?: string
  children: React.ReactElement | React.ReactElement[]
  showSearch?: boolean
  size?: 'large' | 'middle' | 'small'
  onChange: (params?: any) => any
  [key: string]: any
}

interface SelectFN extends React.FC<IProps> {
  Option(params?: any): any
}

const setClass = setPrefixClassName('coo-select')

const Select: SelectFN = props => {
  const {
    children,
    style,
    className,
    showSearch = false,
    size = 'middle',
    onChange,
    ...leftProps
  } = props

  const ICON_NAME = 'arrow-down'
  const ICON_NAME_CLEAR = 'close'

  const mapChildren = isUndefined(children) ? [] : isArray(children) ? children : [children]
  const [dataState, setDataState] = useState({ label: '', value: '' })
  const [iconName, setIconName] = useState('arrow-down')

  const overlay = (
    <Dropdown.Menu style={style}>
      {(mapChildren as any).length ? (
        React.Children.map(children, (child: React.ReactElement) => {
          const { label = '', value = '' } = child.props

          return (
            <Dropdown.Item
              customClick={() => {
                setDataState({ label, value })
                onChange({ label, value })
              }}>
              {React.cloneElement(child, {
                size,
              })}
            </Dropdown.Item>
          )
        })
      ) : (
        <Dropdown.Item>
          <div className={setClass('no-data')}>
            <Icon className={setClass('no-data-icon')} name="empty" />
            <span className={setClass('no-data-text')}>暂无数据</span>
          </div>
        </Dropdown.Item>
      )}
    </Dropdown.Menu>
  )

  const triggerFN = {
    onMouseEnter: () => {
      dataState.value && setIconName(ICON_NAME_CLEAR)
    },
    onMouseLeave: () => {
      iconName === ICON_NAME_CLEAR && setIconName(ICON_NAME)
    },
  }

  const handleClear = () => {
    iconName === ICON_NAME_CLEAR && dataState.value && setDataState({ value: '', label: '' })
  }

  return (
    <Dropdown trigger="click" overlay={overlay}>
      {showSearch ? (
        <Input
          size={size}
          className={classnames(setClass(), className)}
          style={style}
          {...leftProps}
          value={'1'}
        />
      ) : (
        <div
          className={classnames(
            setClass(),
            setClass(`no-input`),
            setClass(`no-input-${size}`),
            className,
          )}
          style={style}
          {...triggerFN}
          {...leftProps}>
          {dataState.value ? (
            dataState.value
          ) : (
            <span className={setClass('no-input-no-value')}>请选择</span>
          )}
          <Icon className={setClass('icon')} name={iconName} onClick={handleClear} />
        </div>
      )}
    </Dropdown>
  )
}

Select.Option = SelectOption

export default Select
