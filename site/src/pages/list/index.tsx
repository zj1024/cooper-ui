import * as React from 'react'
import { Foldcard } from '../../../../components'
import Codebox from '../../components/codebox'
import { basic } from './example'

export default () => {
  return (
    <div className="h-full">
      <h1>- </h1>
      <div className="flex j-between">
        <div className="w-p-48">
          <h2 className="text-content">上中下布局</h2>
          <Foldcard fold={<Codebox source={basic} />} foldName="展开代码"></Foldcard>
        </div>
      </div>
    </div>
  )
}
