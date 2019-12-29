import * as React from 'react'
import './style.scss'
interface CollapseFC extends React.FC<Props> {
  Item: (params: any) => any
}
interface Props {
  children: React.ReactElement[]
  accordion?: boolean
  value?: number | number[]
  [key: string]: any
}
declare const Collapse: CollapseFC
export default Collapse
