export const basic = `import React, { useState, useEffect } from 'react'
import { Progress } from 'cooper-ui'

export default () => {
  const [basicValue, setBasicValue] = useState(0)

  useEffect(() => {
    if (basicValue < 80) {
      setTimeout(() => {
        setBasicValue(basicValue + 5)
      }, 300)
    }
  }, [basicValue])

  return <Progress></Progress>
}
`
export const percent = `import React, { useState, useEffect } from 'react'
import { Progress } from 'cooper-ui'

export default () => {
  const [percentValue, setPercentValue] = useState(0)

  useEffect(() => {
    if (percentValue < 80) {
      setTimeout(() => {
        setPercentValue(percentValue + 5)
      }, 300)
    }
  }, [percentValue])

  return (
    <>
      <Progress percent={20}></Progress>
      <Progress color="#f200ff" percent={50}></Progress>
      <Progress
        color="orange"
        percent={basicValue}
        status={basicValue === 80 ? 'error' : null}></Progress>
        <Progress percent={100}></Progress>
    </>
  )
}
`
