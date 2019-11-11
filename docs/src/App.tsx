import * as React from 'react'
import { Icon, Button, Input } from '../../libs'

export default () => {
  return (
    <>
      <div>
        <h1>- Icon</h1>
        <Icon name="hint" className="test" />
        <Icon name="eyes" />
        <Icon name="share" />
        <Icon name="message" />
        <Icon name="correct" />
      </div>
      <div>
        <h1>- Button</h1>
        <div>
          <Button>Click me</Button>
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
      </div>
      <Input>this is input</Input>
    </>
  )
}