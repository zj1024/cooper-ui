export const basic = `import React from 'react'
import { useState } from 'react'
import { Radio } from 'cooper-ui'

export default () => {
  const [basicValue, setBasicValue] = useState(null)
  const onChange = (e: any) => {
    setBasicValue(e.target.value)
  }
  const options = [
    {
      label: 'Harrison',
      value: 'Harrison',
    },
    {
      label: 'Jack',
      value: 'Jack',
    },
    {
      label: 'Barry',
      value: 'Barry',
    },
  ]
  return (
    <Radio
      options={options}
      onChange={onChange}>
    </Radio>
  )
}
`
