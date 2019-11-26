import * as React from 'react'
import { useState } from 'react'
import { Message, Button, Foldcard } from '../../../../libs'
import Codebox from '../../components/codebox'
import { basic } from './example'

// const {success, info, error, warning } = Message
console.log(Message)

export default () => {
  const [basicValue, setBasicValue] = useState(false)
  console.log(basicValue)
  return (
    <div className="bg-grey h-full">
      <h1>- </h1>
      <div className="flex j-between">
        <div className="w-p-48">
          <h2 className="text-content">上中下布局</h2>
          <Foldcard fold={<Codebox source={basic} />} foldName="展开代码">
            <Button type="primary" onClick={() => setBasicValue(true)}>
              打开message
            </Button>
          </Foldcard>
        </div>
      </div>
    </div>
  )
}
