import * as React from 'react'
import { useState } from 'react'
import Select from '../../../../libs/select'

export default () => {
  const [value, setValue] = useState<string>('')
  console.log(setValue)
  const options = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map(d => ({
    value: `长长的选项${d}`,
    label: `长长的选项${d}`,
  }))

  return (
    <div>
      <Select value={value} style={{ width: '300px' }} onChange={data => console.log(data)}>
        {options.map(d => {
          return <Select.Option key={d.value} label={d.label} value={d.value} />
        })}
      </Select>
    </div>
  )
}
