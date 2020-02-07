import * as React from 'react'
import { TextLink, Foldcard } from '../../../../libs'
import Codebox from '../../components/codebox'
import { basic } from './example'

export default () => {
  return (
    <div className="bg-grey h-full">
      <h1>- 文字链接</h1>
      <div className="flex j-between">
        <div className="w-p-48">
          <h2 className="text-content">上中下布局</h2>
          <Foldcard fold={<Codebox source={basic} />} foldName="展开代码">
            <TextLink className="m-h-10" type="default" disabled={true}>
              链接
            </TextLink>
            <TextLink className="m-h-10" type="primary" underline={false}>
              链接
            </TextLink>
            <TextLink className="m-h-10" type="success">
              链接
            </TextLink>
            <TextLink className="m-h-10" type="warning">
              链接
            </TextLink>
            <TextLink className="m-h-10" type="danger">
              链接
            </TextLink>
            <TextLink className="m-h-10" type="info">
              链接
            </TextLink>
          </Foldcard>
        </div>
      </div>
    </div>
  )
}
