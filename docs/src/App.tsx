import * as React from 'react'
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom'
import { Layout } from '../../libs'

import GuidePage from './pages/guide'

import LayoutPage from './pages/layout'
import IconPage from './pages/icon'
import ButtonPage from './pages/button'
import DialogPage from './pages/dialog'
import InputPage from './pages/input'

import 'assembly-css/lib/index.scss'

const { Aside, Header, Content } = Layout

export default () => {
  // const [componentActive, setComponentActive] = useState(0)
  return (
    <Router>
      <Layout className="h-full">
        <Header className="w-full flex p-20 b-b j-end text-content">
          <li className="m-r-10">
            <Link to="/guide">Guide</Link>
          </li>
          <li>
            <Link to="/">组件</Link>
          </li>
        </Header>

        <Content className="flex flex-1">
          <Switch>
            <Route exact path="/guide" component={GuidePage} />
            <Route
              children={() => (
                <Layout>
                  <Aside className="b-r">
                    <ul className="text-content">
                      <li className="p-20">
                        <Link to="/layout">Layout</Link>
                      </li>
                      <li className="p-20">
                        <Link to="/icon">Icon</Link>
                      </li>
                      <li className="p-20">
                        <Link to="/button">Button</Link>
                      </li>
                      <li className="p-20">
                        <Link to="/dialog">Dialog</Link>
                      </li>
                      <li className="p-20">
                        <Link to="/input">Input</Link>
                      </li>
                    </ul>
                  </Aside>
                  <Content className="p-20">
                    <Route exact path="/layout" component={LayoutPage} />
                    <Route exact path="/icon" component={IconPage} />
                    <Route exact path="/button" component={ButtonPage} />
                    <Route exact path="/dialog" component={DialogPage} />
                    <Route exact path="/input" component={InputPage} />
                  </Content>
                </Layout>
              )}
            />
          </Switch>
        </Content>
      </Layout>
    </Router>
  )
}
