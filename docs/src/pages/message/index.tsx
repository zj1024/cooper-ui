import * as React from 'react'
// import { useState } from 'react'
import { Button, Foldcard } from '../../../../libs'
import Message from '../../../../libs/message/message'
import Codebox from '../../components/codebox'
import { basic } from './example'

// const {success, info, error, warning } = Message

export default () => {
  // const [basicValue, setBasicValue] = useState(false)
  const handleOpenBasic = (props: any) => {
    Message.$success({
      type: props.type,
      message: '请输入用户名',
    })
  }
  return (
    <div className="bg-grey h-full">
      <h1>- </h1>
      <div className="flex j-between">
        <div className="w-p-48">
          <h2 className="text-content">上中下布局</h2>
          <Foldcard fold={<Codebox source={basic} />} foldName="展开代码">
            <Button className="m-r-10" type="default" onClick={() => handleOpenBasic({})}>
              info
            </Button>
            <Button
              className="m-r-10"
              type="success"
              onClick={() => handleOpenBasic({ type: 'success' })}>
              success
            </Button>
            <Button
              className="m-r-10"
              type="danger"
              onClick={() => handleOpenBasic({ type: 'error' })}>
              error
            </Button>
            <Button type="warning" onClick={() => handleOpenBasic({ type: 'warning' })}>
              warning
            </Button>
            {/* <Message message={'test'} /> */}
          </Foldcard>
        </div>
      </div>
    </div>
  )
}
