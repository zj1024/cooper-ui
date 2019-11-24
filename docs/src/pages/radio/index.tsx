import * as React from 'react'
import { Radio } from '../../../../libs'

export default () => {
  const onChange = (e: any) => {
    console.log(e.target.value)
  }
  const options = [
    {
      label: '男',
      value: 0,
    },
    {
      label: '女',
      value: 1,
    },
  ]
  return (
    <>
      <h1>- radio</h1>
      <Radio name="test" options={options} onChange={onChange}></Radio>
    </>
  )
}
