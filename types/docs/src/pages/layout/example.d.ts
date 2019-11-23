export declare const basicLayout =
  '<Layout>\n  <Header>header</Header>\n  <Content>content</Content>\n  <Footer>footer</Footer>\n</Layout>\n'
export declare const withAsideLayout =
  '<Layout>\n  <Header>header</Header>\n  <Layout>\n    <Aside>aside</Aside>\n    <Content>content</Content>\n  </Layout>\n  <Footer>footer</Footer>\n</Layout>'
export declare const outsideAsideLayout =
  '<Layout>\n  <Aside>aside</Aside>\n  <Layout>\n    <Header>header</Header>\n    <Content>content</Content>\n    <Footer>footer</Footer>\n  </Layout>\n</Layout>'
export declare const outsideAsideComplexLayout =
  '<Layout>\n  <Aside>aside</Aside>\n  <Layout>\n    <Header>header</Header>\n    <Layout>\n      <Content>content</Content>\n      <Aside ">aside</Aside>\n    </Layout>\n    <Footer>footer</Footer>\n  </Layout>\n</Layout>'
