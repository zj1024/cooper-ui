import * as React from 'react'
import { Switch, Foldcard } from '../../../../libs'
import Codebox from '../../components/codebox'
import { basic } from './example'

export default () => {
  const onChange = (value: boolean) => {
    console.log(value)
  }
  return (
    <div className="bg-grey h-full">
      <h1>- </h1>
      <div className="flex j-between">
        <div className="w-p-48">
          <h2 className="text-content">上中下布局</h2>
          <Foldcard fold={<Codebox source={basic} />} foldName="展开代码">
            <Switch onChange={onChange}></Switch>
          </Foldcard>
        </div>
      </div>
    </div>
  )
}
