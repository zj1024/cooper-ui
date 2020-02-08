import * as React from 'react'
import * as ReactDOM from 'react-dom'
import * as prism from 'prismjs'

import { ICode } from './index'

import './style.scss'

const Codebox = (props: { codes: ICode }) => {
  const { codes } = props

  for (const id in codes) {
    if (codes.hasOwnProperty(id)) {
      const element = codes[id]
      setTimeout(() => {
        const codeId = document.getElementById(id)
        ReactDOM.render(
          <>
            <div className=""></div>
            <div className="desc language-" dangerouslySetInnerHTML={{ __html: element.desc }} />
            <div className="code" dangerouslySetInnerHTML={{ __html: element.code }} />
          </>,
          codeId,
        )
        setTimeout(() => prism.highlightAll(), 0)
      })
    }
  }
}

export default Codebox
