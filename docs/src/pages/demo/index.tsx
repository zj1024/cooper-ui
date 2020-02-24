import * as React from 'react'
import { useState } from 'react'
import Transition from '../../../../libs/transition'
import { Button } from '../../../../libs'

import './style.scss'

interface ITransitionStyles {
  enter?: React.CSSProperties
  enterActive?: React.CSSProperties
  enterTo?: React.CSSProperties
  leave?: React.CSSProperties
  leaveAvtive?: React.CSSProperties
  leaveTo?: React.CSSProperties
}

export default () => {
  const [visible, setVisible] = useState(false)
  // .coo-fade-enter-active {
  //   width: 200px;
  //   height: 200px;
  //   background: #188eee;
  // }

  // .coo-fade-enter,
  // .coo-fade-leave-to {
  //   width: 100px;
  //   height: 100px;
  //   background: #000;
  // }

  // .coo-fade-leave-active {
  //   width: 100px;
  //   height: 100px;
  //   background: #000;
  // }
  const styles: ITransitionStyles = {
    enter: {
      width: '100px',
      height: '100px',
      background: '#000',
      opacity: 0,
    },
    enterActive: {
      width: '100px',
      height: '100px',
      background: '#000',
      opacity: 1,
    },
    leave: {},
    leaveAvtive: {
      width: '100px',
      height: '100px',
      background: '#000',
      opacity: 0,
    },
    leaveTo: { width: '100px', height: '100px', background: '#000', opacity: 0 },
  }

  return (
    <>
      <div className="m-v-50">
        <Button type="primary" onClick={() => setVisible(!visible)}>
          visible: {`${visible}`}
        </Button>
      </div>
      <Transition visible={visible} styles={styles} unmountOnExit={true}>
        <div style={{ transition: 'all .3s' }}>1234</div>
      </Transition>
    </>
  )
}
