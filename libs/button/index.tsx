import * as React from 'react'

interface Props {
  type?: string
  children?: React.ReactNode
}

function Button(props: Props) {
  return <div>{props.children}</div>
}

export default Button
