import * as React from 'react'
import './style.scss'
interface TabsFC extends React.FC<Props> {
  TabPane(params?: any): any
}
interface Props {
  className?: string
  defaultActiveKey?: string
  destoryOnChange?: boolean
  animat?: boolean
  [key: string]: any
}
declare const Tabs: TabsFC
export default Tabs
