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
        <Button>Click me</Button>
        <Button className="button-test" type="primary">
          Click me
        </Button>
        <Button className="button-test" type="success">
          Click me
        </Button>
        <Button className="button-test" type="warning">
          Click me
        </Button>
        <Button className="button-test" type="danger">
          Click me
        </Button>
      </div>
      <Input>this is input</Input>
    </>
  )
}
