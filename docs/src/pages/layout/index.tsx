import * as React from 'react'
import { Layout, Foldcard } from '../../../../libs'
import Codebox from '../../../components/codebox'
import {
  basicLayout,
  withAsideLayout,
  outsideAsideLayout,
  outsideAsideComplexLayout,
} from './example'

const { Header, Content, Footer, Aside } = Layout

export default () => {
  return (
    <div className="bg-grey">
      <h1 className="m-0">- 布局</h1>

      <div className="flex">
        <div className="flex-1 m-20 text-white">
          <h2 className="text-content">上中下布局</h2>
          <Foldcard fold={<Codebox source={basicLayout} />} foldName="展开代码">
            <section>
              <Layout className="h-300">
                <Header className="bg-blue p-20">header</Header>
                <Content className="bg-black">content</Content>
                <Footer className="bg-blue p-20">footer</Footer>
              </Layout>
            </section>
          </Foldcard>
        </div>

        <div className="flex-1 m-20 text-white">
          <h2 className="text-content">上 中（左右） 下布局</h2>
          <Foldcard fold={<Codebox source={withAsideLayout} />} foldName="展开代码">
            <Layout className="h-300">
              <Header className="bg-blue p-20">header</Header>
              <Layout>
                <Aside className="bg-yellow w-100">aside</Aside>
                <Content className="bg-black p-20">content</Content>
              </Layout>
              <Footer className="bg-blue p-20">footer</Footer>
            </Layout>
          </Foldcard>
        </div>
      </div>

      <div className="flex">
        <div className="flex-1 m-20 text-white">
          <h2 className="text-content">左 上中下布局</h2>
          <Foldcard fold={<Codebox source={outsideAsideLayout} />} foldName="展开代码">
            <Layout className="h-300">
              <Aside className="bg-yellow w-100">aside</Aside>
              <Layout>
                <Header className="bg-blue p-20">header</Header>
                <Content className="bg-black p-20">content</Content>
                <Footer className="bg-blue p-20">footer</Footer>
              </Layout>
            </Layout>
          </Foldcard>
        </div>

        <div className="flex-1 m-20 text-white">
          <h2 className="text-content">左 上中（左右）下布局</h2>
          <Foldcard fold={<Codebox source={outsideAsideComplexLayout} />} foldName="展开代码">
            <Layout className="h-300">
              <Aside className="bg-yellow w-100">aside</Aside>
              <Layout>
                <Header className="bg-blue p-20">header</Header>
                <Layout>
                  <Content className="bg-black p-20">content</Content>
                  <Aside className="bg-yellow w-100">aside</Aside>
                </Layout>
                <Footer className="bg-blue p-20">footer</Footer>
              </Layout>
            </Layout>
          </Foldcard>
        </div>
      </div>
    </div>
  )
}
