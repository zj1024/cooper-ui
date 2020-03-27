import * as React from 'react'
import { useState } from 'react'
import Select from '../../../../libs/select'

export default () => {
  const [value, setValue] = useState<string>('')
  console.log(setValue)
  // const options = [1, 2, 3, 4, 5, 6, 7, 8].map(d => ({
  //   value: `长长的选项${d}`,
  //   label: `长长的选项${d}`,
  // }))

  return (
    <div>
      <Select value={value}>
        {/* {options.map(d => {
          return <Select.Option key={d.value} label={d.label} value={d.value} />
        })} */}
      </Select>
    </div>
  )
}
