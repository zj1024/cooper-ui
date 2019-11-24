import * as React from 'react'
import { Radio } from '../../../../libs'

export default () => {
  const onChange = (e: any) => {
    console.log(e)
  }
  return (
    <>
      <h1>- radio</h1>
      <Radio.Group onChange={onChange}>
        <Radio value={'test'}>男</Radio>
        <Radio value={'test1'}>女</Radio>
      </Radio.Group>
    </>
  )
}
