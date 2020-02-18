import * as React from 'react'
import * as marked from 'marked'
import * as prism from 'prismjs'
import 'prismjs/components/prism-jsx'
import 'prismjs/components/prism-tsx'

import codebox from './codebox'

import './style.scss'

export interface ICode {
  [key: string]: {
    desc: string
    code: string
    source: string
  }
}

marked.setOptions({
  renderer: new marked.Renderer(),
  breaks: true,
  highlight: function(code, lang) {
    return prism.highlight(code, prism.languages[lang], lang)
  },
})

const Markdown = (props: { mdString: string }) => {
  const { mdString } = props
  const codes: ICode = {}

  const replacedDocument = mdString.replace(/:::\s?demo\s([^]+?):::/g, (...rest) => {
    const p1 = rest[1] || ''
    const offset = rest[2] || ''
    const document = p1.match(/([^]*)\n?(```[^]+```)/) || []

    const descString = document.length ? document[1] : ''
    const codeString = document.length ? document[2] : ''
    const sourceString = codeString.match(/```(.*)\n?([^]+)```/) || []
    const desc = marked(descString)
    const code = marked(codeString)
    const source = sourceString.length ? sourceString[2] : ''

    const id = offset.toString(16)
    codes[id] = {
      desc,
      code,
      source,
    }
    return `<div id="${id}" class="codebox"></div>`
  })
  codebox({ codes })

  const contentString = marked(replacedDocument)
  const tableFormated = contentString.replace(/<table>([^]+)<\/table>/, (...rest) => {
    const includeString = rest[0] || ''
    return `<div class="table-wrapper">${includeString}</div>`
  })

  return (
    <>
      <div className="content" dangerouslySetInnerHTML={{ __html: tableFormated }}></div>
    </>
  )
}

export default Markdown
