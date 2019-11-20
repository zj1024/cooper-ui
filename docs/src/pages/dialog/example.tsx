export const basic = `import React from 'react'
import { useState } from 'react'
import { Button, Dialog } from 'cooper-ui'
const dialog = () => {
  const [visible, setVisible] = useState(false)

  const handleOk = (done: () => void) => {
    console.log('666')
    done()
  }

  <Button onClick={() => setVisible(true)}>打开dialog</Button>
  <Dialog visible={visible} onCancel={() => setVisible(false)} onOk={handleOk}>
    this is body
  </Dialog>
}`

export const fnAlert = `import React from 'react'
import { Button, Dialog } from 'cooper-ui'
const { Alert } = Dialog
const dialog = () => {
  const handleAlert = () => {
    Alert({
      message: 'test',
      width: '300px',
      onOk: (done: any) => {
        console.log(1)
        done()
      },
    })
  }

  <Button type="primary" onClick={handleAlert}>alert</Button>
}`

export const fnConfirm = `import React from 'react'
import { Button, Dialog } from 'cooper-ui'
const { Confirm } = Dialog
const dialog = () => {
  const handleConfirm = () => {
    Confirm({
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

  <Button type="primary" onClick={handleConfirm}>confirm</Button>
}`

export const fnModal = `import React from 'react'
import { Button, Dialog } from 'cooper-ui'
const { Modal } = Dialog
const dialog = () => {
  const handleModal = () => {
    Modal({
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

  <Button type="primary" onClick={handleModal}>modal</Button>
}`
