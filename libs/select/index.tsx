import * as React from 'react'
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
  [key: string]: any
}

interface SelectFN extends React.FC<IProps> {
  Option(params?: any): any
}

const setClass = setPrefixClassName('coo-select')

const Select: SelectFN = props => {
  const { children, className, showSearch = false, size = 'middle', ...leftProps } = props
  const mapChildren = isUndefined(children) ? [] : isArray(children) ? children : [children]

  const overlay = (
    <Dropdown.Menu>
      {(mapChildren as any).length ? (
        React.Children.map(children, (child: React.ReactElement) => {
          return (
            <Dropdown.Item>
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

  return (
    <Dropdown trigger="click" overlay={overlay}>
      {showSearch ? (
        <Input
          size={size}
          className={classnames(setClass(), className)}
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
          {...leftProps}>
          测试测试
        </div>
      )}
    </Dropdown>
  )
}

Select.Option = SelectOption

export default Select
