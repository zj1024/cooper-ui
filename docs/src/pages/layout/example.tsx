export const basicLayout = `<Layout>
  <Header>header</Header>
  <Content>content</Content>
  <Footer>footer</Footer>
</Layout>
`

export const withAsideLayout = `<Layout>
  <Header>header</Header>
  <Layout>
    <Aside>aside</Aside>
    <Content>content</Content>
  </Layout>
  <Footer>footer</Footer>
</Layout>`

export const outsideAsideLayout = `<Layout>
  <Aside>aside</Aside>
  <Layout>
    <Header>header</Header>
    <Content>content</Content>
    <Footer>footer</Footer>
  </Layout>
</Layout>`

export const outsideAsideComplexLayout = `<Layout>
  <Aside>aside</Aside>
  <Layout>
    <Header>header</Header>
    <Layout>
      <Content>content</Content>
      <Aside ">aside</Aside>
    </Layout>
    <Footer>footer</Footer>
  </Layout>
</Layout>`
