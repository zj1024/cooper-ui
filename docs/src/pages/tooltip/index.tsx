import * as React from 'react'
import { Tooltip, Button } from '../../../../libs'

export default () => {
  return (
    <>
      <h1>- Tooltip</h1>
      <div>
        <Tooltip content="666">
          <Button>Toggle</Button>
        </Tooltip>
      </div>
    </>
  )
}
