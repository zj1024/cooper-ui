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
      <Transition
        unmountOnExit={false}
        visible={visible}
        name="demo"
        duration={300}
        transitionStyles={{
          entered: {
            color: '#188eee',
          },
          exited: {
            color: '#f05',
          },
        }}>
        <div>{console.log('父组件挂载')}mask</div>
        <Transition visible={visible} name="enter-mode" unmountOnExit={true}>
          <div>{console.log('子组件挂载')}content</div>
        </Transition>
      </Transition>
    </div>
  )
}
