import * as React from 'react'
import { useState } from 'react'
import Select from '../../../../libs/select'

export default () => {
  const [value, setValue] = useState<string>('')
  const options = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map(d => ({
    value: `value${d}`,
    label: `label${d}`,
    disabled: d === 2 || d === 10,
  }))

  return (
    <div>
      <div>{value ? value : '-'}</div>
      <div className="m-t-50">
        <Select value={value} style={{ width: '300px' }} onChange={data => setValue(data.value)}>
          {options.map(d => {
            return (
              <Select.Option key={d.value} label={d.label} value={d.value} disabled={d.disabled} />
            )
          })}
        </Select>
      </div>
      <div className="m-t-100">
        <Select
          value={value}
          style={{ width: '300px' }}
          showSearch={true}
          onChange={data => setValue(data.value)}>
          {options.map(d => {
            return <Select.Option key={d.value} label={d.label} value={d.value} />
          })}
        </Select>
      </div>
    </div>
  )
}
