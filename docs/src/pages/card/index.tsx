import * as React from 'react'
import { Card, Button, Foldcard } from '../../../../libs'
import Codebox from '../../components/codebox'
import { basic } from './example'

export default () => {
  return (
    <div className="h-full">
      <h1>- </h1>
      <div className="flex j-between">
        <div className="w-p-48">
          <h2 className="text-content">上中下布局</h2>
          <Foldcard fold={<Codebox source={basic} />} foldName="展开代码">
            <Card
              header={
                <div className="flex a-center j-between">
                  <div>标题</div>
                  <Button type="primary" className="p-v-3 p-h-5 fs-12">
                    操作
                  </Button>
                </div>
              }>
              {[1, 2, 3, 4].map(d => (
                <div key={d} className="p-5 fs-14">
                  这是一个很长的列表{d + 1}
                </div>
              ))}
            </Card>
          </Foldcard>
        </div>
      </div>
    </div>
  )
}
