import * as React from 'react'
import { Skeleton, Foldcard } from '../../../../libs'
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
            <Skeleton loading={true} avatar={true}>
              内容
            </Skeleton>
          </Foldcard>
        </div>
        <div className="w-p-48">
          <h2 className="text-content">上中下布局</h2>
          <Foldcard fold={<Codebox source={basic} />} foldName="展开代码">
            <Skeleton
              loading={true}
              avatar={true}
              avatarShape="square"
              avatarSize="50px"
              title={true}
              row={1}>
              内容
            </Skeleton>
          </Foldcard>
        </div>
      </div>

      <div className="flex j-between m-t-50">
        <div className="w-p-48">
          <h2 className="text-content">上中下布局</h2>
          <Foldcard fold={<Codebox source={basic} />} foldName="展开代码">
            <Skeleton loading={true} avatar={true} title={false} row={3} animat={false}>
              内容
            </Skeleton>
          </Foldcard>
        </div>
        <div className="w-p-48">
          <h2 className="text-content">上中下布局</h2>
          <Foldcard fold={<Codebox source={basic} />} foldName="展开代码">
            <Skeleton
              loading={true}
              avatar={true}
              avatarShape="square"
              avatarSize="50px"
              title={true}
              row={1}>
              内容
            </Skeleton>
          </Foldcard>
        </div>
      </div>
    </div>
  )
}
