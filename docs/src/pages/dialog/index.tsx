import * as React from 'react'
import { useState } from 'react'
import { Dialog, Button } from '../../../../libs'
import { alert } from '../../../../libs/dialog'

export default () => {
  const [visible, setVisible] = useState(false)
  const handleAlert = () => {
    alert({
      message: 'test',
      width: '300px',
    })
  }

  return (
    <>
      <h1>- Dialog</h1>
      <div>
        <Button onClick={() => setVisible(true)}>开启Dialog</Button>
        <Dialog visible={visible} onCancel={() => setVisible(false)}>
          this is body
        </Dialog>
      </div>
      <div>
        <h2>alert</h2>
        <Button type="success" onClick={handleAlert}>
          alert
        </Button>
      </div>
    </>
  )
}
