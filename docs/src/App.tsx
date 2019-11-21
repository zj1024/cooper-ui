import * as React from 'react'
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom'
import { Layout } from '../../libs'

import GuidePage from './pages/guide'

import LayoutPage from './pages/layout'
import IconPage from './pages/icon'
import ButtonPage from './pages/button'
import DialogPage from './pages/dialog'
import PopoverPage from './pages/popover'
import InputPage from './pages/input'
import TooltipPage from './pages/tooltip'
import FoldcardPage from './pages/foldcard'

import 'assembly-css/lib/index.scss'

const { Aside, Header, Content } = Layout

export default () => {
  return (
    <Router>
      <Layout className="h-full">
        <Header className="w-full flex p-20 b-b j-between text-content">
          <div className="">{/* <img src={Logo} alt="cooper-ui" /> */}</div>
          <div>
            <li className="m-r-10">
              <Link to="/guide">Guide</Link>
            </li>
            <li>
              <Link to="/">组件</Link>
            </li>
          </div>
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
                        <Link to="/popover">Popover</Link>
                      </li>
                      <li className="p-20">
                        <Link to="/tooltip">Tooltip</Link>
                      </li>
                      <li className="p-20">
                        <Link to="/input">Input</Link>
                      </li>
                      <li className="p-20">
                        <Link to="/foldcard">Foldcard</Link>
                      </li>
                    </ul>
                  </Aside>
                  <Content>
                    <Route exact path="/layout" component={LayoutPage} />
                    <Route exact path="/icon" component={IconPage} />
                    <Route exact path="/button" component={ButtonPage} />
                    <Route exact path="/dialog" component={DialogPage} />
                    <Route exact path="/popover" component={PopoverPage} />
                    <Route exact path="/tooltip" component={TooltipPage} />
                    <Route exact path="/input" component={InputPage} />
                    <Route exact path="/foldcard" component={FoldcardPage} />
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
