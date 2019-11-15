import * as React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'

import IconPage from './pages/icon'
import ButtonPage from './pages/button'
import DialogPage from './pages/dialog'
import InputPage from './pages/input'

import 'assembly-css/lib/index.scss'

const Guide = () => {
  return <div>guide</div>
}

export default () => {
  return (
    <Router>
      <header className="w-full p-20 b-b flex j-end a-center text-content">
        <li className="m-r-10">
          <Link to="/guide">Guide</Link>
        </li>
        <li>
          <Link to="/">组件</Link>
        </li>
      </header>
      <main className="flex flex-1">
        <Route
          path="/"
          children={() => (
            <>
              <aside className="b-r flex-column">
                <ul className="text-content">
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
              </aside>
              <div className="flex-1 p-20">
                <Route exact path="/icon" component={IconPage} />
                <Route exact path="/button" component={ButtonPage} />
                <Route exact path="/dialog" component={DialogPage} />
                <Route exact path="/input" component={InputPage} />
              </div>
            </>
          )}
        />
        <Route exact path="/guide" component={Guide} />
      </main>
    </Router>
  )
}
