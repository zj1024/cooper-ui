import * as React from 'react'
import { useState } from 'react'
import { Radio, Foldcard } from '../../../../components'
import Codebox from '../../components/codebox'
import { basic, horizontal } from './example'

export default () => {
  const [basicValue, setBasicValue] = useState(null)
  const [horizontalValue, setHorizontalValue] = useState(null)
  const onChange = (e: any) => {
    setBasicValue(e.target.value)
  }
  const horizontalOnChange = (e: any) => {
    setHorizontalValue(e.target.value)
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
  const options2 = [
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
    <div className="h-full">
      <h1>- 布局</h1>
      <div className="flex j-between">
        <div className="w-p-48">
          <h2 className="text-content">基础用法</h2>
          <Foldcard fold={<Codebox source={basic} />} foldName="展开代码">
            <div className="flex a-center">
              <div>
                <Radio options={[...options]} onChange={onChange}></Radio>
              </div>
              <div className="text-content m-l-20">
                | (演示用,组件中不存在)选中了:{' '}
                <span className="text-yellow p-h-8">{basicValue}</span>
              </div>
            </div>
          </Foldcard>
        </div>
        <div className="w-p-48">
          <h2 className="text-content">基础用法</h2>
          <Foldcard fold={<Codebox source={horizontal} />} foldName="展开代码">
            <div className="flex a-center">
              <div>
                <Radio mode="vertical" options={options2} onChange={horizontalOnChange}></Radio>
              </div>
              <div className="text-content m-l-20">
                | (演示用,不在组件中存在)选中了:{' '}
                <span className="text-yellow p-h-8">{horizontalValue}</span>
              </div>
            </div>
          </Foldcard>
        </div>
      </div>
    </div>
  )
}
