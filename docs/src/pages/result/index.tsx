import * as React from 'react'
import { Result, Button, Foldcard } from '../../../../libs'
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
            <Result
              status="success"
              title={'成功购买了一件商品！！'}
              content={<Button type="primary">返回</Button>}
            />
          </Foldcard>
        </div>
        <div className="w-p-48">
          <h2 className="text-content">上中下布局</h2>
          <Foldcard fold={<Codebox source={basic} />} foldName="展开代码">
            <Result
              status="error"
              title={'请求参数有误，请稍后再试～'}
              content={<Button>返回</Button>}
            />
          </Foldcard>
        </div>
      </div>
      <div className="flex j-between">
        <div className="w-p-48">
          <h2 className="text-content">上中下布局</h2>
          <Foldcard fold={<Codebox source={basic} />} foldName="展开代码">
            <Result
              status="info"
              title={'提示！这是一段超级长的文本，这里用来测试换行后的文本宽度'}
            />
          </Foldcard>
        </div>
        <div className="w-p-48">
          <h2 className="text-content">上中下布局</h2>
          <Foldcard fold={<Codebox source={basic} />} foldName="展开代码">
            <Result status="warning" title={'警告！您当前的操作有风险'} content={null} />
          </Foldcard>
        </div>
      </div>

      <div className="flex j-between">
        <div className="w-p-48">
          <h2 className="text-content">上中下布局</h2>
          <Foldcard fold={<Codebox source={basic} />} foldName="展开代码">
            <Result status="404" title={'404'} />
          </Foldcard>
        </div>
        <div className="w-p-48">
          <h2 className="text-content">上中下布局</h2>
          <Foldcard fold={<Codebox source={basic} />} foldName="展开代码">
            <Result status="warning" title={'warning'} />
          </Foldcard>
        </div>
      </div>
    </div>
  )
}
