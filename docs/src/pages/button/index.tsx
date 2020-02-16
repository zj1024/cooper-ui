import * as React from 'react'
import { useState } from 'react'
import { Button, Icon, Foldcard } from '../../../../libs'
import Codebox from '../../components/codebox'
import { basic } from './example'

export default () => {
  const [buttonLoading, setButtonLoading] = useState(false)
  return (
    <div className="h-full">
      <h1>- </h1>
      <div className="flex j-between">
        <div className="w-p-48">
          <h2 className="text-content">基本用法</h2>
          <Foldcard fold={<Codebox source={basic} />} foldName="展开代码">
            <Button className="m-r-10">按钮</Button>
            <Button type="primary" className="m-r-10">
              按钮
            </Button>
            <Button type="warning" className="m-r-10">
              按钮
            </Button>
            <Button type="success" className="m-r-10">
              按钮
            </Button>
            <Button type="danger" className="m-r-10">
              按钮
            </Button>
            <Button type="info" className="m-r-10">
              按钮
            </Button>
          </Foldcard>
        </div>

        <div className="w-p-48">
          <h2 className="text-content">圆形按钮</h2>
          <Foldcard fold={<Codebox source={basic} />} foldName="展开代码">
            <Button className="m-r-10" circle={true}>
              <Icon className="w-20 h-20 flex a-center j-center" name="close" />
            </Button>
            <Button className="m-r-10" type="primary" circle={true}>
              <Icon className="w-20 h-20 flex a-center j-center" name="close" />
            </Button>
            <Button className="m-r-10" type="warning" circle={true}>
              <Icon className="w-20 h-20 flex a-center j-center" name="close" />
            </Button>
            <Button className="m-r-10" type="success" circle={true}>
              <Icon className="w-20 h-20 flex a-center j-center" name="close" />
            </Button>
            <Button className="m-r-10" type="danger" circle={true}>
              <Icon className="w-20 h-20 flex a-center j-center" name="close" />
            </Button>
            <Button className="m-r-10" type="info" circle={true}>
              <Icon className="w-20 h-20 flex a-center j-center" name="close" />
            </Button>
          </Foldcard>
        </div>
      </div>

      <div className="flex j-between">
        <div className="w-p-48">
          <h2 className="text-content">缕空按钮</h2>
          <Foldcard fold={<Codebox source={basic} />} foldName="展开代码">
            <Button className="m-r-10" plain={true}>
              按钮
            </Button>
            <Button className="m-r-10" type="primary" plain={true}>
              <Icon name="eyes"></Icon>
            </Button>
            <Button className="m-r-10" type="warning" plain={true}>
              按钮
            </Button>
            <Button className="m-r-10" type="success" plain={true}>
              按钮
            </Button>
            <Button className="m-r-10" type="danger" plain={true}>
              按钮
            </Button>
            <Button className="m-r-10" type="info" plain={true}>
              按钮
            </Button>
          </Foldcard>
        </div>

        <div className="w-p-48">
          <h2 className="text-content">loading</h2>
          <Foldcard fold={<Codebox source={basic} />} foldName="展开代码">
            <Button
              className="m-r-10"
              loading={buttonLoading}
              onClick={() => setButtonLoading(!buttonLoading)}>
              按钮
            </Button>
            <Button
              className="m-r-10"
              type="primary"
              loading={buttonLoading}
              onClick={() => setButtonLoading(!buttonLoading)}>
              <Icon name="eyes"></Icon>
            </Button>
            <Button
              className="m-r-10"
              type="warning"
              loading={buttonLoading}
              onClick={() => setButtonLoading(!buttonLoading)}>
              按钮
            </Button>
            <Button
              className="m-r-10"
              type="success"
              loading={buttonLoading}
              onClick={() => setButtonLoading(!buttonLoading)}>
              按钮
            </Button>
            <Button
              className="m-r-10"
              type="danger"
              loading={buttonLoading}
              onClick={() => setButtonLoading(!buttonLoading)}>
              按钮
            </Button>
            <Button
              className="m-r-10"
              type="info"
              loading={buttonLoading}
              onClick={() => setButtonLoading(!buttonLoading)}>
              按钮
            </Button>
          </Foldcard>
        </div>
      </div>

      <div className="flex j-between">
        <div className="w-p-48">
          <h2 className="text-content">round</h2>
          <Foldcard fold={<Codebox source={basic} />} foldName="展开代码">
            <Button className="m-r-10" round={true}>
              按钮
            </Button>
            <Button className="m-r-10" type="primary" round={true}>
              <Icon name="eyes"></Icon>
            </Button>
            <Button className="m-r-10" type="warning" round={true}>
              按钮
            </Button>
            <Button className="m-r-10" type="success" round={true}>
              按钮
            </Button>
            <Button className="m-r-10" type="danger" round={true}>
              按钮
            </Button>
            <Button className="m-r-10" type="info" round={true}>
              按钮
            </Button>
          </Foldcard>
        </div>

        <div className="w-p-48">
          <h2 className="text-content">disabled</h2>
          <Foldcard fold={<Codebox source={basic} />} foldName="展开代码">
            <Button className="m-r-10" disabled={true}>
              按钮
            </Button>
            <Button className="m-r-10" type="primary" disabled={true}>
              <Icon name="eyes"></Icon>
            </Button>
            <Button className="m-r-10" type="warning" disabled={true}>
              按钮
            </Button>
            <Button className="m-r-10" type="success" disabled={true}>
              按钮
            </Button>
            <Button className="m-r-10" type="danger" disabled={true}>
              按钮
            </Button>
            <Button className="m-r-10" type="info" disabled={true}>
              按钮
            </Button>
          </Foldcard>
        </div>
      </div>
      <div className="flex j-between">
        <div className="w-p-48">
          <h2 className="text-content">阴影</h2>
          <Foldcard fold={<Codebox source={basic} />} foldName="展开代码">
            <Button className="m-r-10" shadow={true}>
              按钮
            </Button>
            <Button className="m-r-10" type="primary" shadow={true}>
              <Icon name="eyes"></Icon>
            </Button>
            <Button className="m-r-10" type="warning" shadow={true}>
              按钮
            </Button>
            <Button className="m-r-10" type="success" shadow={true}>
              按钮
            </Button>
            <Button className="m-r-10" type="danger" shadow={true}>
              按钮
            </Button>
            <Button className="m-r-10" type="info" shadow={true}>
              按钮
            </Button>
          </Foldcard>
        </div>
      </div>
    </div>
  )
}
