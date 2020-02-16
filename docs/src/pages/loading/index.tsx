import * as React from 'react'
import { useState } from 'react'
import { Loading, Foldcard, Button } from '../../../../libs'
import Codebox from '../../components/codebox'
import { basic, dark, customColor } from './example'

export default () => {
  const [visible, setVisible] = useState(false)

  return (
    <div className="h-full">
      <h1>- </h1>
      <div className="flex j-between">
        <div className="w-p-48">
          <h2 className="text-content">基本用法</h2>

          <Foldcard fold={<Codebox source={basic} />} foldName="展开代码">
            <div>
              <Button type="warning" onClick={() => setVisible(!visible)}>
                Toggle
              </Button>
            </div>
            <Loading visible={visible}>
              <div className="w-200 h-200 bg-grey flex a-center j-center">
                <span>Placeholder</span>
              </div>
            </Loading>
          </Foldcard>
        </div>
        <div className="w-p-48">
          <h2 className="text-content">暗黑模式</h2>
          <Foldcard fold={<Codebox source={dark} />} foldName="展开代码">
            <Loading visible={visible} type="dark">
              <div className="w-200 h-200 bg-grey flex a-center j-center">
                <span>Placeholder</span>
              </div>
            </Loading>
          </Foldcard>
        </div>
      </div>
      <div className="flex j-between">
        <div className="w-p-48">
          <h2 className="text-content">自定义loading颜色</h2>
          <Foldcard fold={<Codebox source={customColor} />} foldName="展开代码">
            <Loading visible={visible} color="orange">
              <div className="w-200 h-200 bg-grey flex a-center j-center">
                <span>Placeholder</span>
              </div>
            </Loading>
          </Foldcard>
        </div>
      </div>
    </div>
  )
}
