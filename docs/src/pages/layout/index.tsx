import * as React from 'react'
import { Layout } from '../../../../libs'

const { Header, Content, Footer, Aside } = Layout

export default () => {
  return (
    <>
      <h1>- Layout</h1>
      <h2>Basic layout</h2>
      <Layout className="h-200 m-b-50">
        <Header className="bg-blue">this is header</Header>
        <Content className="bg-green">this is content</Content>
        <Footer className="bg-blue">this is footer</Footer>
      </Layout>
      <h2>With Aside layout</h2>
      <Layout className="h-300 m-b-50">
        <Header className="bg-blue p-20">this is header</Header>
        <Layout>
          <Aside className="bg-red p-20">this is aside</Aside>
          <Content className="bg-green p-20">this is content</Content>
        </Layout>
        <Footer className="bg-blue p-20">this is footer</Footer>
      </Layout>

      <h2>With Aside layout</h2>
      <Layout className="h-300 m-b-50">
        <Aside className="bg-yellow">this is aside</Aside>
        <Layout>
          <Header className="bg-blue p-20">this is header</Header>
          <Content className="bg-green p-20">this is content</Content>
          <Footer className="bg-blue p-20">this is footer</Footer>
        </Layout>
      </Layout>

      <h2>With Aside layout</h2>
      <Layout className="h-300 m-b-50">
        <Aside className="bg-yellow">this is aside</Aside>
        <Layout>
          <Header className="bg-blue p-20">this is header</Header>
          <Layout>
            <Content className="bg-green p-20">this is content</Content>
            <Aside className="bg-yellow">this is aside</Aside>
          </Layout>
          <Footer className="bg-blue p-20">this is footer</Footer>
        </Layout>
      </Layout>
    </>
  )
}
