import * as React from 'react'
import * as marked from 'marked'

import codebox from './codebox'

import './style.scss'

export interface ICode {
  [key: string]: {
    desc: string
    code: string
  }
}

marked.setOptions({
  renderer: new marked.Renderer(),
})

const Markdown = (props: { mdString: string }) => {
  const { mdString } = props
  const codes: ICode = {}

  const replacedDocument = mdString.replace(/:::\s?demo\s([^]+?):::/g, (...rest) => {
    const p1 = rest[1]
    const offset = rest[2]
    const document = p1.match(/([^]*)\n?(```[^]+```)/)
    const desc = marked(document[1])
    const code = marked(document[2])
    const id = offset.toString(16)
    codes[id] = {
      desc,
      code,
    }
    return `<div id="${id}" class="codebox"></div>`
  })
  codebox({ codes })

  return (
    <>
      <div
        className="p-20 content"
        dangerouslySetInnerHTML={{ __html: marked(replacedDocument) }}></div>
    </>
  )
}

export default Markdown
