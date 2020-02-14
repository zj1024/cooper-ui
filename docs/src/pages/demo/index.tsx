import * as React from 'react'
import { useState } from 'react'
import Transition from '../../../../libs/transition/universal-transition'
import { Button } from '../../../../libs'

import './style.scss'

export default () => {
  const [visible, setVisible] = useState(false)

  return (
    <>
      <div className="m-v-50">
        <Button type="primary" onClick={() => setVisible(!visible)}>
          visible: {`${visible}`}
        </Button>
      </div>
      <Transition visible={visible} style={{ color: '#188eee' }}>
        <div style={{ transition: 'all .3s' }}>1234</div>
      </Transition>
    </>
  )
}
