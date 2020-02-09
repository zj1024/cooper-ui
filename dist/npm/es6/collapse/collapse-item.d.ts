import * as React from 'react'
import './style.scss'
/**
 * private props, passed through the parent component and parent in control
 * @prop {string} name unique sign
 * @prop {boolean} contentvisible expanded
 * @prop {(name: string, visible: boolean) => void} onClick pass the item new state to the parent
 */
interface PrivateProps {
  name?: string
  contentvisible?: boolean
  onClick?: (name: string, visible: boolean) => void
}
/**
 * @prop title {string} collpase item title
 * @prop any {[key: string]: any} allows the user to set other props automatically
 */
interface Props extends PrivateProps {
  className?: string
  title: string
  iconPlacement?: string
  [key: string]: any
}
declare const CollapseItem: React.FC<Props>
export default CollapseItem
