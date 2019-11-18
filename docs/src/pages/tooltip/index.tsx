import * as React from 'react'
import { Tooltip, Button } from '../../../../libs'

export default () => {
  return (
    <>
      <h1>- Tooltip</h1>
      <div className="m-l-100">
        <div className="w-300 flex j-center">
          <Tooltip content="666">
            <Button>上</Button>
          </Tooltip>
        </div>
        <div className="w-300 m-v-50 flex j-between">
          <Tooltip content="666" placement="left">
            <Button>左</Button>
          </Tooltip>
          <Tooltip content="666" placement="right">
            <Button>右</Button>
          </Tooltip>
        </div>
        <div className="w-300 flex j-center m-b-50">
          <Tooltip content="666" placement="bottom">
            <Button>下</Button>
          </Tooltip>
        </div>
        <div className="w-300 flex j-center m-t-100">
          <Tooltip content="这是一段比较长的文本" placement="top">
            普通文本
          </Tooltip>
        </div>
      </div>
    </>
  )
}
