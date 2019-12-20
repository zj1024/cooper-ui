import * as React from 'react'

import { Popover, Button } from '../../../../libs'
const content = (
  <div className="p-20">
    <h1 className="text-title">标题</h1>
    <p className="text-content">文本</p>
    <div>
      <Button
        style={{ padding: '2px 5px' }}
        className="fs-12 m-r-5"
        onClick={() => console.log('content 执行')}>
        取消
      </Button>
      <Button
        type="primary"
        style={{ padding: '2px 5px' }}
        className="fs-12"
        onClick={() => console.log('content 执行')}>
        确认
      </Button>
    </div>
  </div>
)
export default () => {
  return (
    <>
      <h1>- Popover</h1>
      <div className="m-100">
        <div className="m-100">
          <Popover placement="top" content={content}>
            <Button type="primary">确认</Button>
          </Popover>
        </div>
        <div className="m-100">
          <Popover placement="bottom" content={content}>
            文字
          </Popover>
        </div>
        <div className="m-100">
          <Popover placement="left" content={content}>
            <h1>大标题</h1>
          </Popover>
        </div>
        <div className="m-100">
          <Popover placement="right" content={content}>
            test
          </Popover>
        </div>
      </div>
    </>
  )
}
