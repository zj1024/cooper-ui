import * as React from 'react'

import { Button, Input, Message } from '../../../../components'

export default () => {
  const onClick = () => {
    Message.info('信息')
  }

  return (
    <section>
      <div>
        <Button className="w-full" type="primary" onClick={onClick}>
          测试
        </Button>
      </div>
      <div className="m-t-20">
        <Input></Input>
      </div>
      <div className="m-t-20">
        <Input></Input>
      </div>
    </section>
  )
}
