import * as React from 'react'
import { useState } from 'react'
import classnames from 'classnames'
import { setPrefixClassName, isArray, isUndefined } from '../utils'
import Dropdown from '../dropdown'
import Input from '../input'
import Icon from '../icon'
import SelectOption from './select-option'

interface IData {
  value: any
  label: any
  disabled?: boolean
}

interface IProps {
  children?: React.ReactElement | React.ReactElement[]
  className?: string
  showSearch?: boolean
  size?: 'large' | 'middle' | 'small'
  defaultValue?: IData
  disabled?: boolean
  addonPlacement?: 'left' | 'right' | ''
  onChange: (params?: any) => any
  [key: string]: any
}

interface SelectFN extends React.FC<IProps> {
  Option(params?: any): any
}

const setClass = setPrefixClassName('coo-select')

// TODO: 远程搜索，自定义过滤

const Select: SelectFN = props => {
  const {
    children,
    style,
    className,
    defaultValue,
    showSearch = false,
    size = 'middle',
    disabled = false,
    onChange,
    addonPlacement = '',
    ...leftProps
  } = props

  const ICON_NAME = 'arrow-down'
  const ICON_NAME_CLEAR = 'close'
  const EMPTY_TIP = '请选择'
  const mapChildren = isUndefined(children) ? [] : isArray(children) ? children : [children]

  const [dataState, setDataState] = useState<IData>(
    defaultValue ? defaultValue : { label: '', value: '' },
  )
  const [iconName, setIconName] = useState('arrow-down')
  const [inputValue, setInputValue] = useState(defaultValue ? defaultValue.label : '')

  // useEffect(() => {
  //   console.log(props.defaultValue)
  //   // 解决异步defaultValue
  //   if (props?.defaultValue?.value && props?.defaultValue?.label) {
  //     setDataState({ label: props.defaultValue.value, value: props.defaultValue.label })
  //   }
  // }, [props.defaultValue])

  const triggerFN = {
    onMouseEnter: () => {
      if (showSearch) {
        inputValue && setIconName(ICON_NAME_CLEAR)
      } else {
        dataState.value && setIconName(ICON_NAME_CLEAR)
      }
    },
    onMouseLeave: () => {
      iconName === ICON_NAME_CLEAR && setIconName(ICON_NAME)
    },
  }

  const handleInputChange = (e: { target: { value: any } }) => {
    const { value } = e.target
    setInputValue(value)
  }

  const handleClear = () => {
    if (iconName === ICON_NAME_CLEAR) {
      const empty = { value: '', label: '' }
      if (!showSearch && dataState.value) {
        setIconName(ICON_NAME)
        setDataState(empty)
        onChange(empty)
      } else if (showSearch && inputValue) {
        setIconName(ICON_NAME)
        setInputValue('')
        onChange(empty)
      }
    }
  }

  const handleOptionClick = (data: IData) => {
    const { label, value } = data
    setDataState({ label, value })
    onChange({ label, value })
    if (showSearch) {
      setInputValue(label)
    }
  }

  const overlay = (
    <Dropdown.Menu style={style}>
      {(mapChildren as any[]).length ? (
        React.Children.map(mapChildren as any[], (child: React.ReactElement, index) => {
          const { label = '', disabled } = child.props

          if (inputValue) {
            if (!`${label}`.includes(inputValue)) return null
          }

          return (
            <Dropdown.Item
              key={index}
              disabled={disabled}
              customClick={() => handleOptionClick(child.props)}>
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

  const IconDOM = <Icon className={setClass('icon')} name={iconName} onClick={handleClear} />

  return (
    <Dropdown trigger="click" overlay={overlay}>
      {showSearch ? (
        <div
          className={classnames(setClass(), setClass(size), className)}
          style={style}
          {...triggerFN}
          {...leftProps}>
          <Input
            className={setClass('input')}
            size={size}
            value={inputValue}
            onChange={handleInputChange}
            placeholder={EMPTY_TIP}
            disabled={disabled}
            addonPlacement={addonPlacement}
          />
          {IconDOM}
        </div>
      ) : (
        <div
          className={classnames(
            setClass(),
            setClass(size),
            setClass(`no-input`),
            addonPlacement && setClass(`no-input-${addonPlacement === 'left' ? 'right' : 'left'}`),
            className,
          )}
          style={style}
          {...triggerFN}
          {...leftProps}>
          {dataState.label ? (
            dataState.label
          ) : (
            <span className={setClass('no-input-no-value')}>{EMPTY_TIP}</span>
          )}
          {IconDOM}
        </div>
      )}
    </Dropdown>
  )
}

Select.Option = SelectOption

export default Select
