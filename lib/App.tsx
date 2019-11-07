import * as React from 'react'

import Icon from './icon'
import Button from './button'
import Input from './input'

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
