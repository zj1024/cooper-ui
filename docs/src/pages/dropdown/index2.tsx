import * as React from 'react'
import { Dropdown, Button } from '../../../../libs'

export default () => {
  const overlay = (
    // 需要手动设置宽度
    <Dropdown.Menu>
      <Dropdown.Item className="Item">
        <span className="fs-13 w-100 d-block" onClick={() => console.log('item click')}>
          京宇测试
        </span>
      </Dropdown.Item>
      <Dropdown.Item>
        <span className="fs-13 w-100 d-block">京宇测试</span>
      </Dropdown.Item>
      <Dropdown.Item>
        <span className="fs-13 w-100 d-block">京宇测试</span>
      </Dropdown.Item>
      <Dropdown.Item>
        <span className="fs-13 w-100 d-block">京宇测试</span>
      </Dropdown.Item>
    </Dropdown.Menu>
  )
  return (
    <div>
      <div>
        <Dropdown overlay={overlay} trigger="click" splitButton={true}>
          测试文本
        </Dropdown>
      </div>

      <div className="m-t-100">
        <Dropdown overlay={overlay} placement="bottom-center" trigger="click">
          bottom-center
        </Dropdown>
      </div>

      <div className="m-t-100">
        <Dropdown overlay={overlay} placement="bottom-right" trigger="click">
          <Button type="primary">bottom-right</Button>
        </Dropdown>
      </div>

      <div className="m-t-100">
        <Dropdown overlay={overlay} placement="top-left" trigger="click">
          <Button type="primary">top-left</Button>
        </Dropdown>
      </div>

      <div className="m-t-100">
        <Dropdown overlay={overlay} placement="top-center">
          <Button type="primary">top-center</Button>
        </Dropdown>
      </div>

      <div className="m-t-100">
        <Dropdown overlay={overlay} placement="top-right">
          <Button type="primary">top-right</Button>
        </Dropdown>
      </div>
    </div>
  )
}