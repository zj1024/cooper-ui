import * as React from 'react'
import classnames from 'classnames'
import { setPrefixClassName } from '../utils'

interface Props {
  className?: string
  [key: string]: any
}

interface LayoutFC extends React.FC<Props> {
  Header: (props?: any) => any
  Content: (props?: any) => any
  Footer: (props?: any) => any
  Aside: (props?: any) => any
}

const setClass = setPrefixClassName('coo-layout')

const Layout: LayoutFC = props => {
  const { children, className, ...leftProps } = props

  // judge children has aside to add className
  const childrenType = React.Children.map(
    children,
    (child: React.ReactNode) => (child as React.ReactElement).type,
  )

  const hasAside = childrenType?.some(type => type === Layout.Aside)

  return (
    <section
      className={classnames(setClass(), className, hasAside ? setClass('has-aside') : '')}
      {...leftProps}>
      {children}
    </section>
  )
}

/**
 * @function api
 * Declare that the direct reference to the function is invalid
 */
Layout.Header = () => {}
Layout.Content = () => {}
Layout.Footer = () => {}
Layout.Aside = () => {}

export default Layout
