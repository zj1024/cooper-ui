import * as React from 'react'
import { useState } from 'react'
import { Dialog, Button } from '../../../../libs'
import { alert, confirm, modal } from '../../../../libs/dialog'

export default () => {
  const [visible, setVisible] = useState(false)
  const handleAlert = () => {
    alert({
      message: 'test',
      width: '300px',
    })
  }

  const handleConfirm = () => {
    confirm({
      message: '确认删除吗？',
      width: '400px',
      onOk: () => {
        console.log('ok')
      },
      onCancel: () => {
        console.log('cancel')
      },
    })
  }

  const handleModal = () => {
    modal({
      title: 'test',
      message: 'test',
    })
  }

  const handleOk = (done: () => void) => {
    console.log('666')
    done()
  }

  return (
    <>
      <h1>- Dialog</h1>
      <div>
        <Button onClick={() => setVisible(true)}>开启Dialog</Button>
        <Dialog visible={visible} onCancel={() => setVisible(false)} onOk={handleOk}>
          this is body
        </Dialog>
      </div>
      <div>
        <h2>alert</h2>
        <Button type="success" onClick={handleAlert}>
          alert
        </Button>
      </div>
      <div>
        <h2>confirm</h2>
        <Button type="success" onClick={handleConfirm}>
          confirm
        </Button>
      </div>
      <div>
        <h2>modal</h2>
        <Button type="success" onClick={handleModal}>
          modal
        </Button>
      </div>
    </>
  )
}