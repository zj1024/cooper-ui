import * as React from 'react'

interface Props {
  name: string
}

const Icon: React.FunctionComponent<Props> = ({ name }) => {
  return <div>{name}</div>
}

export default Icon
