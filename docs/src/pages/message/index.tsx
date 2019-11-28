import * as React from 'react'
import { Button, Foldcard, Message } from '../../../../libs'
import Codebox from '../../components/codebox'
import { basic } from './example'

export default () => {
  console.log(Message)
  const handleOpenBasic = (props: any) => {
    const tips = Message[props.type]({
      message: '请输入用户名',
    })
    setTimeout(() => {
      tips.close()
    }, 3000)
  }

  const handleOpenShowClose = (props: any) => {
    Message[props.type]({
      message: '请输入用户名',
      showClose: true,
    })
  }

  const handleOpenBottom = (props: any) => {
    Message[props.type]({
      message: '请输入用户名',
      showClose: true,
    })
  }

  return (
    <div className="bg-grey h-full">
      <h1>- </h1>
      <div className="flex j-between">
        <div className="w-p-48">
          <h2 className="text-content">上中下布局</h2>
          <Foldcard fold={<Codebox source={basic} />} foldName="展开代码">
            <Button
              className="m-r-10"
              type="default"
              onClick={() => handleOpenBasic({ type: '$info' })}>
              info
            </Button>
            <Button
              className="m-r-10"
              type="success"
              onClick={() => handleOpenBasic({ type: '$success' })}>
              success
            </Button>
            <Button
              className="m-r-10"
              type="danger"
              onClick={() => handleOpenBasic({ type: '$error' })}>
              error
            </Button>
            <Button type="warning" onClick={() => handleOpenBasic({ type: '$warning' })}>
              warning
            </Button>
          </Foldcard>
        </div>

        <div className="w-p-48">
          <h2 className="text-content">上中下布局</h2>
          <Foldcard fold={<Codebox source={basic} />} foldName="展开代码">
            <Button
              className="m-r-10"
              type="default"
              onClick={() => handleOpenShowClose({ type: '$info', showClose: true })}>
              info
            </Button>
            <Button
              className="m-r-10"
              type="success"
              onClick={() => handleOpenShowClose({ type: '$success', showClose: true })}>
              success
            </Button>
            <Button
              className="m-r-10"
              type="danger"
              onClick={() => handleOpenShowClose({ type: '$error', showClose: true })}>
              error
            </Button>
            <Button
              type="warning"
              onClick={() => handleOpenShowClose({ type: '$warning', showClose: true })}>
              warning
            </Button>
          </Foldcard>
        </div>
      </div>

      <div className="flex j-between">
        <div className="w-p-48">
          <h2 className="text-content">上中下布局</h2>
          <Foldcard fold={<Codebox source={basic} />} foldName="展开代码">
            <Button
              className="m-r-10"
              type="default"
              onClick={() => handleOpenBottom({ type: '$info' })}>
              info
            </Button>
            <Button
              className="m-r-10"
              type="success"
              onClick={() => handleOpenBottom({ type: '$success' })}>
              success
            </Button>
            <Button
              className="m-r-10"
              type="danger"
              onClick={() => handleOpenBottom({ type: '$error' })}>
              error
            </Button>
            <Button type="warning" onClick={() => handleOpenBottom({ type: '$warning' })}>
              warning
            </Button>
          </Foldcard>
        </div>
      </div>
    </div>
  )
}
