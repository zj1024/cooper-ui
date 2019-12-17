import * as React from 'react'
import { useState } from 'react'
import { Button } from '../../../../libs'
import Transition from '../../../../libs/transition/transition'

import './style.scss'

export default () => {
  const [visible, setVisible] = useState(false)
  return (
    <div className="p-20">
      <Button onClick={() => setVisible(!visible)}>transition</Button>
      <Transition visible={visible} name="demo">
        <div>mask</div>
        <Transition visible={visible} name="enter-mode">
          <div>content</div>
        </Transition>
      </Transition>
    </div>
  )
}
