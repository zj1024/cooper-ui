export const basic = `import React from 'react'
import { Loading } from 'cooper-ui'

export default () => {
  return (
    <Loading visible={true}>
      <div style={{ width: '200px', height: '200px', background: '#188eee' }}>等待加载的内容</div>
    </Loading>
  )
}`

export const dark = `import React from 'react'
import { Loading } from 'cooper-ui'

export default () => {
  return (
    <Loading visible={true} type="dark">
      <div style={{ width: '200px', height: '200px', background: '#188eee' }}>等待加载的内容</div>
    </Loading>
  )
}`

export const customColor = `import React from 'react'
import { Loading } from 'cooper-ui'

export default () => {
  return (
    <Loading visible={true} color="orange">
      <div style={{ width: '200px', height: '200px', background: '#188eee' }}>等待加载的内容</div>
    </Loading>
  )
}`
