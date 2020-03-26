import * as React from 'react'
import classnames from 'classnames'
import { setPrefixClassName } from '../utils'
import Layout from './layout'

const setClass = setPrefixClassName('coo-layout')

Layout.Header = props => {
  const { children, className, ...leftProps } = props
  return (
    <header className={classnames(setClass('header'), className)} {...leftProps}>
      {children}
    </header>
  )
}

Layout.Content = props => {
  const { children, className, ...leftProps } = props
  return (
    <main className={classnames(setClass('content'), className)} {...leftProps}>
      {props.children}
    </main>
  )
}

Layout.Footer = props => {
  const { children, className, ...leftProps } = props
  return (
    <footer className={classnames(setClass('footer'), className)} {...leftProps}>
      {props.children}
    </footer>
  )
}

Layout.Aside = props => {
  const { children, className, ...leftProps } = props
  return (
    <aside className={classnames(setClass('aside'), className)} {...leftProps}>
      {props.children}
    </aside>
  )
}

const Header = Layout.Header
const Content = Layout.Content
const Footer = Layout.Footer

export { Header, Content, Footer }
export default Layout
