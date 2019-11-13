import * as React from 'react'

interface Props {
  children?: React.ReactElement | string
  [key: string]: any
}

const Dialog: React.FC<Props> = props => {
  return (
    <div className="c-dialog-mask">
      <div className="c-dialog">{props.children}</div>
    </div>
  )
}

export default Dialog
