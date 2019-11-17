import * as React from 'react'
import { Layout } from '../../../../libs'

const { Header, Content, Footer, Aside } = Layout

export default () => {
  return (
    <>
      <h1>- Layout</h1>
      <Layout className="h-200 m-b-50">
        <Header className="bg-blue">this is header</Header>
        <Content className="bg-green">this is content</Content>
        <Footer className="bg-blue">this is footer</Footer>
      </Layout>

      <Layout className="h-300">
        <Header className="bg-blue p-20">this is header</Header>
        <Layout>
          <Aside className="bg-red p-20">this is aside</Aside>
          <Content className="bg-green p-20">this is content</Content>
        </Layout>
      </Layout>
    </>
  )
}
