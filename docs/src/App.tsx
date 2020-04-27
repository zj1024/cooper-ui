import * as React from 'react'
import { Suspense, useState, useEffect } from 'react'
import { HashRouter as Router, Route, Link, Switch, Redirect, useLocation } from 'react-router-dom'
import { Layout, Icon, Drawer, Skeleton, TextLink, Divider } from 'cooper-ui/index'
import throttle from 'cooper-ui/utils/throttle'
import classnames from 'classnames'
import routes from 'src/routes'

import components, { IComponent } from './routes/components'

import GuidePage from 'src/pages/guide'
import Empty from 'src/pages/empty'

const { Aside, Header, Content } = Layout

const AsideNavList = () => {
  const location = useLocation()

  let result = []

  for (const ele in routes) {
    if (routes.hasOwnProperty(ele)) {
      const routesItem = routes[ele]
      result.push(
        <div key={routesItem.title}>
          <p className="fs-13 p-t-15 p-b-15 p-l-20 text-grey">{routesItem.title}</p>
          <Divider className="p-h-20 m-v-0" />
          {routesItem.components.map((d: IComponent) => (
            <Link className="text-primary" to={d.path} key={d.path}>
              <li
                className={classnames(
                  'fs-14 p-10 p-l-40',
                  location.pathname === d.path && 'navbar-active',
                )}>
                {d.title} {d.desc}
              </li>
            </Link>
          ))}
        </div>,
      )
    }
  }

  return <ul className="navbar-list p-v-10 p-t-60">{result}</ul>
}

const ComponentsRouteList = () => {
  let result = []

  for (const key in components) {
    if (components.hasOwnProperty(key)) {
      const component = components[key]
      result.push(
        <Route key={component.path} exact path={component.path} component={component.component} />,
      )
    }
  }
  return <>{result}</>
}

export default () => {
  const [visible, setVisible] = useState(false)
  const [isSmallScreen, setIsSmallScreen] = useState(
    /(?:iphone|ipod|ipad).*os 5/gi.test(navigator.userAgent),
  )
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
            <li className="m-r-15">
              <Link to="/guide">
                <TextLink tag="span" underline={false}>
                  Guide
                </TextLink>
              </Link>
            </li>
            <li className="m-r-15">
              <Link to="/components/icon">
                <TextLink tag="span" underline={false}>
                  组件
                </TextLink>
              </Link>
            </li>
            <li>
              <a className="flex h-30" href="https://github.com/zj1024/cooper-ui" target="_blank">
                <Icon className="fs-30" name="github" />
              </a>
            </li>
          </div>
        </Header>
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/components/icon" />} />
          <Route exact path="/components" render={() => <Redirect to="/components/icon" />} />
          <Route exact path="/guide" component={GuidePage} />
          <Route
            children={() => {
              return (
                <Content className="main flex flex-1 w-full">
                  <Layout className="w-full">
                    {isSmallScreen ? (
                      <Aside className="relative z-index-3">
                        <div
                          className="zoom-btn fixed left-0 z-index-3 b-r-5 bg-grey p-10 cursor-pointer"
                          onClick={() => setVisible(!visible)}>
                          <Icon
                            className="fs-20 text-blue"
                            name={visible ? 'double-left' : 'double-right'}
                          />
                        </div>
                        <Drawer visible={visible} onCancel={() => setVisible(false)} mask={false}>
                          <AsideNavList />
                        </Drawer>
                      </Aside>
                    ) : (
                      <Aside
                        className="navbar o-y-scroll scroll-touch"
                        style={{ display: isSmallScreen ? 'none' : 'block' }}>
                        <AsideNavList />
                      </Aside>
                    )}
                    <Content className="w-full relative p-t-80 p-h-20">
                      <Suspense
                        fallback={
                          <div className="docs-container">
                            <Skeleton loading={true} />
                          </div>
                        }>
                        <div className="docs-container">
                          <Switch>
                            <ComponentsRouteList />
                            <Route component={Empty} />
                          </Switch>
                        </div>
                      </Suspense>
                    </Content>
                  </Layout>
                </Content>
              )
            }}
          />
        </Switch>
      </Layout>
    </Router>
  )
}
