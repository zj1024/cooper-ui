import * as React from 'react'
import { useState, useEffect } from 'react'
import classnames from 'classnames'
import { setPrefixClassName } from '../utils'
import Radio from './radio'

import './style.scss'

const setClass = setPrefixClassName('coo-radio')

interface GroupProps {
  className?: string
  children: React.ReactNode
  value?: string
  onChange: (params: any) => any
}

Radio.Group = (props: GroupProps) => {
  const { children, className, onChange } = props
  const [values, setValues] = useState([] as Array<any>)

  useEffect(() => {
    setValues(
      React.Children.map(children, (child: any) => {
        const value = child.props.value
        return value ? value : undefined
      }),
    )
  }, [])
  onChange(values)
  return <div className={classnames(setClass('group'), className)}>{children}</div>
}

const Group = Radio.Group

export { Group }
export default Radio
