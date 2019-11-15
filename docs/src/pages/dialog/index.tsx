import * as React from 'react'
import { useState } from 'react'
import { Dialog, Button } from '../../../../libs'

export default () => {
  const [visible, setVisible] = useState(false)

  return (
    <>
      <Button onClick={() => setVisible(true)}>点击开启Dialog</Button>
      <Dialog visible={visible} onCancel={() => setVisible(false)}>
        this is body
      </Dialog>
    </>
  )
}
