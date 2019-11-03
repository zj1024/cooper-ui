import * as React from 'react'

function Button(props: { children?: React.ReactNode }) {
  return <div>{props.children}</div>
}

export default Button
