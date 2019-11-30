import * as React from 'react'
import { Loading, Foldcard } from '../../../../libs'
import Codebox from '../../components/codebox'
import { basic, dark, customColor } from './example'

export default () => {
  return (
    <div className="bg-grey h-full">
      <h1>- </h1>
      <div className="flex j-between">
        <div className="w-p-48">
          <h2 className="text-content">基本用法</h2>
          <Foldcard fold={<Codebox source={basic} />} foldName="展开代码">
            <Loading visible={true}>
              <div className="w-200 h-200 bg-grey flex a-center j-center">
                <span>Placeholder</span>
              </div>
            </Loading>
          </Foldcard>
        </div>
        <div className="w-p-48">
          <h2 className="text-content">暗黑模式</h2>
          <Foldcard fold={<Codebox source={dark} />} foldName="展开代码">
            <Loading visible={true} type="dark">
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
            <Loading visible={true} color="orange">
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
