import * as React from 'react'
import { Suspense } from 'react'
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom'
import { ComponentRoutes } from './routes'
import { Layout } from '../../libs'

import GuidePage from './pages/guide'

import 'assembly-css/lib/index.scss'

const { Aside, Header, Content } = Layout

export default () => {
  return (
    <Router>
      <Layout className="h-full">
        <Header className="w-full flex p-h-20 p-v-10 b-b j-between text-content">
          <img className="w-50" src={require('./assets/images/logo.png')} alt="cooper-ui" />
          <div className="flex a-center">
            <li className="m-r-10">
              <Link to="/guide">Guide</Link>
            </li>
            <li>
              <Link to="/">组件</Link>
            </li>
          </div>
        </Header>

        <Content className="flex flex-1">
          <Route exact path="/guide" component={GuidePage} />
          <Route
            children={({ location }) => {
              return (
                <Layout>
                  <Aside className="b-r">
                    <ul className="text-content">
                      {ComponentRoutes.map(d => (
                        <li
                          className={`p-20 ${location.pathname === d.path && 'text-yellow'}`}
                          key={d.path}>
                          <Link to={d.path}>{d.title}</Link>
                        </li>
                      ))}
                    </ul>
                  </Aside>
                  <Content>
                    <Suspense fallback={<div>加载中...</div>}>
                      <Switch>
                        {ComponentRoutes.map(d => (
                          <Route key={d.path} exact path={d.path} component={d.component} />
                        ))}
                      </Switch>
                    </Suspense>
                  </Content>
                </Layout>
              )
            }}
          />
        </Content>
      </Layout>
    </Router>
  )
}
