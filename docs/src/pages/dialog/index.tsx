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
      onOk: (done: any) => {
        console.log(1)
        done()
      },
    })
  }

  const handleConfirm = () => {
    confirm({
      message: '确认删除吗？',
      width: '400px',
      onOk: (done: any) => {
        console.log('ok')
        done()
      },
      onCancel: (done: any) => {
        done()
      },
    })
  }

  const handleModal = () => {
    modal({
      title: 'this is test',
      message: 'test',
      okText: '是的',
      cancelText: '不是的',
      onOk: (done: any) => {
        console.log(1)
        done()
      },
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
