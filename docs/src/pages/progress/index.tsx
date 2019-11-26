import * as React from 'react'
import { useState, useEffect } from 'react'
import { Progress, Foldcard } from '../../../../libs'
import Codebox from '../../components/codebox'
import { basic, percent } from './example'

export default () => {
  const [basicValue, setBasicValue] = useState(0)
  let timer: any

  useEffect(() => {
    if (basicValue < 80) {
      timer = setTimeout(() => {
        setBasicValue(basicValue + 5)
      }, 300)
    }
    return () => {
      clearTimeout(timer)
    }
  }, [basicValue])

  return (
    <div className="bg-grey h-full">
      <h1>- 进度条</h1>
      <div className="flex j-between">
        <div className="w-p-48">
          <h2 className="text-content">上中下布局</h2>
          <Foldcard fold={<Codebox source={basic} />} foldName="展开代码">
            <Progress></Progress>
          </Foldcard>
        </div>

        <div className="w-p-48">
          <h2 className="text-content">上 中（左右） 下布局</h2>
          <Foldcard fold={<Codebox source={percent} />} foldName="展开代码">
            <Progress percent={20}></Progress>
            <Progress color="#f200ff" percent={50}></Progress>
            <Progress
              color="orange"
              percent={basicValue}
              status={basicValue === 80 ? 'error' : null}></Progress>
            <Progress percent={100}></Progress>
          </Foldcard>
        </div>
      </div>
    </div>
  )
}
