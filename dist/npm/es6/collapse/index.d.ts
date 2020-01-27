import * as React from 'react'
import './style.scss'
/**
 * @Item {React.ReactElement} Collapse content
 */
interface CollapseFC extends React.FC<Props> {
  Item: (params: any) => any
}
/**
 * @prop {boolean} accordion collapse is accordion mode
 * @prop {number | number[]} value collapse initialize the expanded item
 * @prop {[key: string]: any} any allows the user to set other props automatically
 */
interface Props {
  children: React.ReactNode
  accordion?: boolean
  value?: number | number[]
  [key: string]: any
}
declare const Collapse: CollapseFC
export default Collapse
