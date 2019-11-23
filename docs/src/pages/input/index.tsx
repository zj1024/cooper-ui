import * as React from 'react'
import { useState } from 'react'
import { Input } from '../../../../libs'

import './style.scss'

export default () => {
  const [count, setCount] = useState('')
  const onChange = (value: any) => {
    setCount(value)
  }
  return (
    <>
      <h1>- Input</h1>
      <div>
        <Input onChange={onChange} value={count} placeholder={'123'} allowClear={true}></Input>
        count: {count}
      </div>
    </>
  )
}
