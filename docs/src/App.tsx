import * as React from 'react'
import { Suspense, useState, useEffect } from 'react'
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom'
import { ComponentRoutes } from './routes'
import { Layout, Icon, Drawer } from '../../libs'
import throttle from '../../libs/utils/throttle'

import GuidePage from './pages/guide'

const { Aside, Header, Content } = Layout

const List = (props: any) => {
  const { location } = props
  return (
    <ul className="navbar-list p-v-10 p-t-60">
      {ComponentRoutes.map(d => (
        <Link className="text-primary" to={d.path} key={d.path}>
          <li
            className={`fw-400 fs-14 p-10 ${
              location.pathname === d.path ? 'navbar-active' : ''
            } p-l-30`}>
            {d.title} {d.desc}
          </li>
        </Link>
      ))}
    </ul>
  )
}

export default () => {
  const [visible, setVisible] = useState(false)
  const [isSmallScreen, setIsSmallScreen] = useState(true)
  const [windowWidth, setWindowWidth] = useState(window.document.documentElement.clientWidth)

  useEffect(() => {
    window.addEventListener('hashchange', () => {
      document.documentElement.scrollTo(0, 0)
    })

    window.addEventListener(
      'resize',
      throttle(() => {
        const width = window.document.documentElement.clientWidth
        setWindowWidth(width)
      }, 100),
    )
  }, [])

  useEffect(() => {
    if (isSmallScreen && windowWidth >= 768) {
      setIsSmallScreen(false)
      setVisible(false)
    }
    if (!isSmallScreen && windowWidth < 768) {
      setIsSmallScreen(true)
      setVisible(false)
    }
  }, [windowWidth])

  return (
    <Router>
      <Layout className="w-full h-full">
        <Header className="header flex text-primary w-full flex p-h-20 p-v-5 j-between">
          <h1 className="fs-18 text-active-primary">COOPER-UI</h1>
          <div className="flex a-center">
            {/* <li className={`m-r-15${location.pathname === '/guide' ? ' text-yellow' : ''}`}> */}
            <li className="m-r-15">
              <Link to="/guide">Guide</Link>
            </li>
            <li className="m-r-15">
              <Link to="/">组件</Link>
            </li>
            <li>
              <a className="flex h-30" href="https://github.com/zj1024/cooper-ui" target="_blank">
                <Icon className="fs-30" name="github" />
              </a>
            </li>
          </div>
        </Header>

        <Content className="main flex flex-1 w-full">
          <Route exact path="/guide" component={GuidePage} />
          <Route
            children={({ location }) => {
              return (
                <Layout className="w-full">
                  {isSmallScreen ? (
                    <Aside className="relative z-index-3">
                      <div
                        className="zoom-btn fixed left-0 z-index-3 b-r-5 bg-grey p-10 cursor-pointer"
                        onClick={() => setVisible(!visible)}>
                        <Icon
                          className="fs-20 text-yellow"
                          name={visible ? 'double-left' : 'double-right'}
                        />
                      </div>
                      <Drawer visible={visible} onCancel={() => setVisible(false)} mask={false}>
                        <List location={location} />
                      </Drawer>
                    </Aside>
                  ) : (
                    <Aside
                      className="navbar o-y-scroll scroll-touch"
                      style={{ display: isSmallScreen ? 'none' : 'block' }}>
                      <List location={location} />
                    </Aside>
                  )}

                  <Content className="w-full relative p-t-80 p-h-20">
                    <Suspense
                      fallback={
                        <div className="text-primary p-10 fs-13">
                          <Icon
                            className="fixed right-3 top-3 z-index-100 text-white"
                            name="loading-rotate"
                          />
                          加载中...
                        </div>
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
