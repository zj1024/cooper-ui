import * as React from 'react'
import { Tabs, Foldcard } from '../../../../libs'
import Codebox from '../../components/codebox'
import { basic } from './example'

export default () => {
  const { TabPane } = Tabs
  return (
    <div className="bg-grey h-full">
      <h1>- </h1>
      <div className="flex j-between">
        <div className="w-p-48">
          <h2 className="text-content">上中下布局</h2>
          <Foldcard fold={<Codebox source={basic} />} foldName="展开代码">
            <Tabs defaultActiveKey="1">
              <TabPane tab="选项一" key="1">
                <div>this is tab1</div>
              </TabPane>
              <TabPane tab="选项二" key="2">
                <div>this is tab3</div>
              </TabPane>
              <TabPane tab="选项三" key="3">
                <div>this is tab3</div>
              </TabPane>
            </Tabs>
          </Foldcard>
        </div>
      </div>
    </div>
  )
}
