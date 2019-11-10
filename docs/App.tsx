import * as React from 'react'

import { Icon, Button, Input } from '../libs'

export default () => {
  return (
    <div>
      <Icon name="hint" className="test" />
      <Icon name="eyes" />
      <Icon name="share" />
      <Icon name="message" />
      <Icon name="correct" />
      <Button>this is test</Button>
      <Input>this is input</Input>
    </div>
  )
}
