import * as React from 'react'
import { Suspense, useState, useEffect } from 'react'
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom'
import { ComponentRoutes } from './routes'
import { Layout, Loading, Icon } from '../../libs'

import GuidePage from './pages/guide'

const { Aside, Header, Content } = Layout

export default () => {
  const [isFull, setIsFull] = useState<boolean>(true)
  const handleToggleLeftBar = () => setIsFull(!isFull)

  useEffect(() => {
    window.addEventListener('hashchange', () => {
      document.documentElement.scrollTo(0, 0)
    })
  }, [])

  return (
    <Router>
      <Layout className="h-full">
        <Header
          className="w-full flex p-h-20 p-v-20 j-between text-white"
          style={{ background: '#ff9400' }}>
          {/* <img className="w-50" src={require('./assets/images/logo.png')} alt="cooper-ui" /> */}
          <h1 className="fs-18">COOPER-UI</h1>
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
                  <Aside
                    className="navbar b-r"
                    style={{ width: isFull === false ? '100px' : '270px' }}>
                    <div
                      className="absolute right-0 top-20 bg-grey b-r-3 p-10 cursor-pointer"
                      onClick={handleToggleLeftBar}>
                      <Icon
                        className="fs-20 text-yellow"
                        name={isFull ? 'double-left' : 'double-right'}
                      />
                    </div>
                    <ul className="p-v-10">
                      {ComponentRoutes.map(d => (
                        <Link className="text-content" to={d.path} key={d.path}>
                          <li
                            className={`fw-400 fs-14 p-10 ${
                              location.pathname === d.path ? 'text-yellow navbar-active-bg' : ''
                            }${isFull ? ' p-l-30' : ' p-l-15'}`}>
                            {d.title} {isFull && d.desc}
                          </li>
                        </Link>
                      ))}
                    </ul>
                  </Aside>
                  <Content className="relative p-t-80" style={{ background: '#fbfbfb' }}>
                    <Suspense
                      fallback={
                        <Loading
                          className="absolute left-0 top-0 right-0 bottom-0"
                          visible={true}
                          text={'加载中...'}></Loading>
                      }>
                      <div className="docs-container">
                        <Switch>
                          {ComponentRoutes.map(d => (
                            <Route key={d.path} exact path={d.path} component={d.component} />
                          ))}
                        </Switch>
                      </div>
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
