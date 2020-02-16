import * as React from 'react'
import Markdown from '../../components/markdown'

export default () => {
  return (
    <div>
      <Markdown mdString={require('./demo.md').default} />
    </div>
  )
}
