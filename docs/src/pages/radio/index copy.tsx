import * as React from 'react'
import { useState } from 'react'
import { Radio } from '../../../../libs'

export default () => {
  const [basicValue, setBasicValue] = useState(null)
  const onChange = (e: any) => {
    setBasicValue(e.target.value)
  }
  const options = [
    {
      label: 'Harrison',
      value: 'Harrison',
    },
    {
      label: 'Jack',
      value: 'Jack',
    },
    {
      label: 'Barry',
      value: 'Barry',
    },
  ]
  return (
    <>
      <h1>- radio</h1>
      <div className="flex a-center">
        <div>
          <Radio options={options} onChange={onChange}></Radio>
        </div>
        <div className="text-content m-l-20">选中了: <span className="text-yellow p-h-8">{basicValue}</span></div>
      </div>
    </>
  )
}
