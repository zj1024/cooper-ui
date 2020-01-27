import * as React from 'react'
import './style.scss'
interface Props {
  className?: string
}
interface LayoutFC extends React.FC<Props> {
  Header: (props?: any) => any
  Content: (props?: any) => any
  Footer: (props?: any) => any
  Aside: (props?: any) => any
}
declare const Layout: LayoutFC
export default Layout
