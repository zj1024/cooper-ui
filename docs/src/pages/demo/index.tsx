import * as React from 'react'
import Markdown from '../../components/markdown'

import './style.scss'

export default () => {
  return (
    <div>
      <Markdown mdString={require('./demo.md').default} />
    </div>
  )
}
