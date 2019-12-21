import * as React from 'react'
import { useState } from 'react'
import Codebox from '../../components/codebox'
import { Input, Button, Foldcard } from '../../../../libs'
import { basic, withButton, autoFocus } from './example'

export default () => {
  const [basicInput, setBasicInput] = useState('')
  const basicInputOnChange = (value: any) => {
    setBasicInput(value)
  }

  const [withButtonInput, setWithButtonInput] = useState('')
  const withButtonInputOnChange = (value: any) => {
    setWithButtonInput(value)
  }

  const [autoFocusInput, setAutoFocusInput] = useState('')
  const autoFocusInputOnChange = (value: any) => {
    setAutoFocusInput(value)
  }

  return (
    <>
      <h1>- Input</h1>

      <div className="flex j-between m-b-50">
        <div className="w-p-48">
          <h2 className="text-content">基础用法</h2>
          <Foldcard fold={<Codebox source={basic}></Codebox>} foldName="展开代码">
            <Input
              onChange={basicInputOnChange}
              value={basicInput}
              placeholder="基础用法"
              allowClear={true}></Input>
          </Foldcard>
        </div>

        <div className="w-p-48">
          <h2 className="text-content">带Button按钮</h2>
          <Foldcard fold={<Codebox source={withButton}></Codebox>} foldName="展开代码">
            <Input
              className="b-r-0"
              onChange={withButtonInputOnChange}
              value={withButtonInput}
              placeholder="带Button按钮"></Input>
            <Button className="b-r-0" type="primary">
              确定
            </Button>
          </Foldcard>
        </div>
      </div>

      <div className="flex j-between">
        <div className="w-p-48">
          <h2 className="text-content">自动获取焦点</h2>
          <Foldcard fold={<Codebox source={autoFocus}></Codebox>} foldName="展开代码">
            <Input
              onChange={autoFocusInputOnChange}
              value={autoFocusInput}
              autoFocus={true}
              placeholder="自动获取焦点"></Input>
          </Foldcard>
        </div>
        <div className="w-p-48">
          <h2 className="text-content">disabled</h2>
          <Foldcard fold={<Codebox source={autoFocus}></Codebox>} foldName="展开代码">
            <Input
              onChange={autoFocusInputOnChange}
              value={autoFocusInput}
              autoFocus={true}
              disabled={true}
              placeholder="自动获取焦点"></Input>
          </Foldcard>
        </div>
      </div>
    </>
  )
}
