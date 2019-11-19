import * as React from 'react'
import * as renderer from 'react-test-renderer'
import Layout from '../index'

describe('- Layout component', () => {
  it(`Layout.Header has children 'Header'`, () => {
    const component = renderer.create(<Layout.Header>Header</Layout.Header>)
    let tree: any = component.toTree()
    expect(tree.props.children).toEqual('Header')
  })

  it(`Layout.Content has children 'Content'`, () => {
    const component = renderer.create(<Layout.Content>Content</Layout.Content>)
    let tree: any = component.toTree()
    expect(tree.props.children).toEqual('Content')
  })

  it(`Layout.Footer has children 'Footer'`, () => {
    const component = renderer.create(<Layout.Footer>Footer</Layout.Footer>)
    let tree: any = component.toTree()
    expect(tree.props.children).toEqual('Footer')
  })

  it(`Layout.Aside has children 'Aside'`, () => {
    const component = renderer.create(<Layout.Aside>Aside</Layout.Aside>)
    let tree: any = component.toTree()
    expect(tree.props.children).toEqual('Aside')
  })

  it(`Layout has child Aside will setClass 'coo-layout-has-aside'`, () => {
    const { Aside, Content } = Layout
    const component = renderer.create(
      <Layout>
        <Aside>aside</Aside>
        <Content>content</Content>
      </Layout>,
    )
    let tree: any = component.toJSON()
    expect(tree.props.className.includes('coo-layout-has-aside')).toBeTruthy()
  })
})
