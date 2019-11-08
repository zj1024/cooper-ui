import * as React from 'react'

import Icon from '../libs/icon'
import Button from '../libs/button'
import Input from '../libs/input'

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
