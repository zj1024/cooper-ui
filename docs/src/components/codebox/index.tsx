import * as React from 'react'

import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter'
import jsx from 'react-syntax-highlighter/dist/esm/languages/prism/jsx'
import tomorrow from 'react-syntax-highlighter/dist/esm/styles/prism/tomorrow'

import './style.scss'

interface Props {
  source: string
}

const customStyle = {
  borderRadius: '6px',
  border: '1px solid #dadada',
}

SyntaxHighlighter.registerLanguage('jsx', jsx)

export default (props: Props) => {
  const { source } = props
  return (
    <div className="coo-code">
      <SyntaxHighlighter language="javascript" style={tomorrow} customStyle={customStyle}>
        {source}
      </SyntaxHighlighter>
    </div>
  )
}
