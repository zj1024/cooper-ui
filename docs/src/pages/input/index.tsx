import * as React from 'react'
import { Input, InputGroup, InputAddon, Button, Icon } from '../../../../libs'

export default () => {
  return (
    <div>
      <div>
        <InputGroup>
          <label htmlFor="name">label</label>
          <Input id="name" type="text" size="small" />
        </InputGroup>
      </div>

      <div className="m-t-100">
        <InputGroup row={false}>
          <label htmlFor="name1">label</label>
          <Input id="name1" type="text" size="large" />
        </InputGroup>
      </div>

      <div className="m-t-100">
        <InputGroup>
          <Input type="text" placeholder="这里是智能的，是ReactElement清除默认样式" />
          <InputAddon>
            <div className="w-100 h-full bg-blue flex a-center j-center">1</div>
          </InputAddon>
        </InputGroup>
      </div>

      <div className="m-t-100">
        <InputGroup>
          <InputAddon>1234</InputAddon>
          <Input type="text" placeholder="这里是智能的，是文本有默认样式" />
        </InputGroup>
      </div>

      <div className="m-t-100">
        <InputGroup>
          <InputAddon>
            <Button type="primary">1234</Button>
          </InputAddon>
          <Input type="text" placeholder="这里是智能的，是文本有默认样式" />
        </InputGroup>
      </div>

      <div className="m-t-100">
        <InputGroup>
          <Input type="text" placeholder="这里是智能的，是文本有默认样式" />
          <InputAddon>
            <Button type="primary">
              <Icon name="arrow-right" />
            </Button>
          </InputAddon>
        </InputGroup>
      </div>
    </div>
  )
}
