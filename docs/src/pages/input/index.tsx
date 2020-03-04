import * as React from 'react'
import { Input, InputGroup, InputAddon } from '../../../../libs'

export default () => {
  console.log(InputAddon)
  return (
    <div>
      <InputGroup row={false}>
        <label htmlFor="name">label</label>
        <Input id="name" type="text" />
      </InputGroup>
    </div>
  )
}
