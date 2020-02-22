import * as React from 'react'
import Markdown from '../../components/markdown'

export default () => {
  return <Markdown mdString={require('./index.md').default} />
}
