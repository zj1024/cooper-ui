import * as React from 'react'
import { Divider, Card, Foldcard } from '../../../../libs'
import Codebox from '../../components/codebox'
import { basic } from './example'

export default () => {
  return (
    <div className="bg-grey h-full">
      <h1>- </h1>
      <div className="flex j-between">
        <div className="w-p-48">
          <h2 className="text-content">上中下布局</h2>
          <Foldcard fold={<Codebox source={basic} />} foldName="展开代码">
            <Card>
              <h1>标题</h1>
              <p>测试文本测试文本测试文本</p>
              <p>测试文本测试文本测试文本</p>
              <p>测试文本测试文本测试文本</p>
              <Divider orientation="left">没有更多了</Divider>
            </Card>
          </Foldcard>
        </div>
        <div className="w-p-48">
          <h2 className="text-content">上中下布局</h2>
          <Foldcard fold={<Codebox source={basic} />} foldName="展开代码">
            <Card>
              <div>
                <span>文字</span>
                <Divider type="vertical">test</Divider>
                <span>文字</span>
                <Divider type="vertical" />
                <span>文字</span>
                <Divider type="vertical" />
                <span>文字</span>
              </div>
            </Card>
          </Foldcard>
        </div>
      </div>
    </div>
  )
}
