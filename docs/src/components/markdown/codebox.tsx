import * as React from 'react'
import { useState } from 'react'
import * as ReactDOM from 'react-dom'
import { transform } from 'babel-standalone'
import * as prism from 'prismjs'

import { ICode } from './index'

import './style.scss'
interface ICodeProps {
  element: {
    desc: string
    code: string
    source: string
  }
  id: string
}
const Code = (props: ICodeProps) => {
  const { element, id } = props
  const { desc, code, source } = element
  const [visible, setVisible] = useState(false)

  const renderSource = function(this: any, source: any) {
    import('../../../../libs')
      .then(Element => {
        const args = ['context', 'React', 'ReactDOM']
        const argv = [this, React, ReactDOM]

        for (const key in Element) {
          args.push(key)
          argv.push((Element as any)[key])
        }

        return { args, argv }
      })
      .then(({ args, argv }) => {
        const code = transform(
          `
          ${source}
        ReactDOM.render(<App />, document.getElementById('${id}-code'))
      `,
          {
            presets: ['es2015', 'react'],
          },
        ).code

        args.push(code)
        new Function(...args).apply(null, argv)
      })
      .catch(err => {
        if (process.env.NODE_ENV !== 'production') {
          throw err
        }
      })
  }

  renderSource(source)

  return (
    <>
      <div id={`${id}-code`}></div>
      <div onClick={() => setVisible(!visible)}>{visible} 展开</div>
      <div className="desc language-" dangerouslySetInnerHTML={{ __html: desc }} />
      {visible && <div className="code" dangerouslySetInnerHTML={{ __html: code }} />}
    </>
  )
}

const Codebox = (props: { codes: ICode }) => {
  const { codes } = props

  for (const id in codes) {
    if (codes.hasOwnProperty(id)) {
      const element = codes[id]
      setTimeout(() => {
        const codeId = document.getElementById(id)
        ReactDOM.render(<Code element={element} id={id} />, codeId)
      })
    }
  }
}

export default Codebox

setTimeout(() => prism.highlightAll(), 0)