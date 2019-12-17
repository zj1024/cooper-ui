import * as React from 'react'
import { useState } from 'react'
import { Dialog, Button, Foldcard } from '../../../../libs'
import Codebox from '../../components/codebox'
import { basic, fnAlert, fnConfirm, fnModal } from './example'

const { Alert, Confirm, Modal } = Dialog

export default () => {
  const [visible, setVisible] = useState(false)
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

  const handleOk = (done: () => void) => {
    console.log('666')
    done()
  }

  return (
    <section className="h-full bg-grey">
      <h1>- Dialog</h1>
      <div className="flex j-between">
        <div className="w-p-48">
          <h2>基础Dialog</h2>
          <Foldcard fold={<Codebox source={basic} />} foldName="展开代码">
            <Button onClick={() => setVisible(true)}>打开dialog</Button>
            <Dialog
              visible={visible}
              onCancel={() => setVisible(false)}
              onOk={handleOk}
              animat={false}>
              <Button type="primary" onClick={handleAlert}>
                alert
              </Button>
            </Dialog>
          </Foldcard>
        </div>
        <div className="w-p-48">
          <h2>函数触发：alert</h2>
          <Foldcard fold={<Codebox source={fnAlert} />} foldName="展开代码">
            <Button type="primary" onClick={handleAlert}>
              alert
            </Button>
          </Foldcard>
        </div>
      </div>
      <div className="flex j-between m-t-20">
        <div className="w-p-48">
          <h2>confirm</h2>
          <Foldcard fold={<Codebox source={fnConfirm} />} foldName="展开代码">
            <Button type="primary" onClick={handleConfirm}>
              confirm
            </Button>
          </Foldcard>
        </div>
        <div className="w-p-48">
          <h2>modal</h2>
          <Foldcard fold={<Codebox source={fnModal} />} foldName="展开代码">
            <Button type="primary" onClick={handleModal}>
              modal
            </Button>
          </Foldcard>
        </div>
      </div>
    </section>
  )
}
