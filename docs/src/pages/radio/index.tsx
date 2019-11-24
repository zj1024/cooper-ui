import * as React from 'react'
import { useState } from 'react'
import { Radio, Foldcard } from '../../../../libs'
import Codebox from '../../components/codebox'
import { basic } from './example'

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
    <div className="bg-grey h-full">
      <h1>- 布局</h1>
      <div className="flex j-between">
        <div className="w-p-48">
          <h2 className="text-content">基础用法</h2>
          <Foldcard fold={<Codebox source={basic} />} foldName="展开代码">
            <div className="flex a-center">
              <div>
                <Radio options={options} onChange={onChange}></Radio>
              </div>
              <div className="text-content m-l-20">
                选中了: <span className="text-yellow p-h-8">{basicValue}</span>
              </div>
            </div>
          </Foldcard>
        </div>
      </div>
    </div>
  )
}
