export const basic = `import React from 'react'
import { useState } from 'react'
export default () => {
  const [count, setCount] = useState('')
  const onChange = (value: any) => {
    setCount(value)
  }
  return (
    <Input
      onChange={basicInputOnChange}
      value={basicInput}
      placeholder="基础用法"
      allowClear={true}></Input>
  )
}`

export const withButton = `import React from 'react'
import { useState } from 'react'
export default () => {
  const [count, setCount] = useState('')
  const onChange = (value: any) => {
    setCount(value)
  }

  return (
    <>
      <Input
        className="b-r-0"
        onChange={withButtonInputOnChange}
        value={withButtonInput}
        placeholder="带Button按钮"></Input>
      <Button className="b-r-0" type="primary">
        确定
      </Button>
    </>
  )
}
`

export const autoFocus = `import React from 'react'
import { useState } from 'react'
export default () => {
  const [count, setCount] = useState('')
  const onChange = (value: any) => {
    setCount(value)
  }

  return (
    <Input
      onChange={autoFocusInputOnChange}
      value={autoFocusInput}
      autoFocus={true}
      placeholder="自动获取焦点"></Input>
  )
}`
