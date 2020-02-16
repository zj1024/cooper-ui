import * as React from 'react'
import { useState } from 'react'
import { Switch, Icon, Button, Foldcard } from '../../../../libs'
import Codebox from '../../components/codebox'
import { basic } from './example'

export default () => {
  const [statusWithLoading, setStatusWithLoading] = useState(true)
  const [loading, setLoading] = useState(false)

  const onChange = (value: boolean) => {
    console.log(value)
  }

  const onChangeWithLoading = (value: boolean) => {
    console.log(value)
  }

  const onChangeCheck = () => {
    setLoading(true)
    setTimeout(() => {
      setStatusWithLoading(!statusWithLoading)
      setLoading(false)
    }, 3000)
  }

  return (
    <div className="h-full">
      <h1>- </h1>
      <div className="flex j-between">
        <div className="w-p-48">
          <h2 className="text-content">上中下布局</h2>
          <Foldcard fold={<Codebox source={basic} />} foldName="展开代码">
            <div className="d-inline-block m-r-10">
              <Switch onChange={onChange}></Switch>
            </div>
            <div className="d-inline-block m-r-10">
              <Switch onChange={onChange} defaultChecked={true}></Switch>
            </div>
            <div className="d-inline-block m-r-10">
              <Switch
                onChange={onChange}
                checkedChildren={<Icon name="close" />}
                unCheckedChildren={<Icon name="eyes" />}></Switch>
            </div>
            <div className="d-inline-block m-r-10">
              <Switch onChange={onChange} checkedChildren={'开'} unCheckedChildren={'关'}></Switch>
            </div>
            <div className="d-inline-block m-r-10">
              <Switch
                size="small"
                onChange={onChange}
                checkedChildren={'开'}
                unCheckedChildren={'关'}></Switch>
            </div>

            <div className="d-inline-block m-r-10">
              <Button onClick={onChangeCheck}>切换</Button>
              <Switch
                checked={statusWithLoading}
                onChange={onChangeWithLoading}
                loading={loading}></Switch>
            </div>
          </Foldcard>
        </div>
      </div>
    </div>
  )
}
