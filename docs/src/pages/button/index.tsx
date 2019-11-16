import * as React from 'react'
import { useState } from 'react'
import { Button } from '../../../../libs'

export default () => {
  const [buttonLoading, setButtonLoading] = useState(false)
  return (
    <>
      <h1>- Button</h1>
      <div>
        <Button
          style={{ width: '100%' }}
          loading={buttonLoading}
          onClick={() => setButtonLoading(!buttonLoading)}>
          Click me
        </Button>
        <Button round className="button-test" style={{ fontSize: '20px' }} type="primary">
          Click me
        </Button>
        <Button circle className="button-test" type="success"></Button>
        <Button disabled onClick={() => console.log(1)} className="button-test" type="warning">
          Click me
        </Button>
        <Button className="button-test" type="danger">
          Click me
        </Button>
      </div>
      <div>
        <Button disabled>Click me</Button>
        <Button disabled type="primary">
          Click me
        </Button>
      </div>
      <div>
        <Button>Click me</Button>
        <Button type="primary">Click me</Button>
      </div>
    </>
  )
}
