import * as React from 'react'
import { useState } from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import { Icon, Button, Input, Dialog } from '../../libs'

import 'assembly-css/lib/index.scss'

const Index = () => {
  const [visible, setVisible] = useState(false)
  const handleDialogCancel = () => {
    setVisible(false)
  }

  const [dialog2Visible, setDialog2Visible] = useState(false)
  const handleDialog2Cancel = () => {
    setDialog2Visible(false)
  }

  const [buttonLoading, setButtonLoading] = useState(false)

  return (
    <>
      <div>
        <h1>- Icon</h1>
        <Icon name="hint" className="test" />
        <Icon name="eyes" />
        <Icon name="share" />
        <Icon name="message" />
        <Icon name="correct" />
      </div>
      <div>
        <h1>- Button</h1>
        <div>
          <Button loading={buttonLoading} onClick={() => setButtonLoading(!buttonLoading)}>
            Click me
          </Button>
          <Button round className="button-test" style={{ fontSize: '20px' }} type="primary">
            Click me
          </Button>
          <Button circle className="button-test" type="success"></Button>
          <Button disabled onClick={() => console.log(1)} className="button-test" type="warning">
            Click me
          </Button>
          <Button className="button-test" type="danger">
            Click me
          </Button>
        </div>
        <div>
          <Button disabled>Click me</Button>
          <Button disabled type="primary">
            Click me
          </Button>
        </div>
        <div>
          <Button>Click me</Button>
          <Button type="primary">Click me</Button>
        </div>
      </div>
      <Input>this is input</Input>
      <div>
        <h1>- Dialog</h1>
        <div>
          <Button onClick={() => setVisible(true)}>Toggle Dialog</Button>
          <Dialog visible={visible} header={'test'} onCancel={handleDialogCancel}>
            dialog1
          </Dialog>
        </div>
        <div>
          <Button onClick={() => setDialog2Visible(!dialog2Visible)}>Toggle Dialog2</Button>
          <Dialog
            visible={dialog2Visible}
            header={'test'}
            onCancel={handleDialog2Cancel}
            footer={null}>
            dialog2
          </Dialog>
        </div>
      </div>
    </>
  )
}

const Guide = () => {
  return <div>guide</div>
}

const MyButton = () => {
  return <div>button</div>
}
const MyDialog = () => {
  return <div>Dialog</div>
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
                  <li className="p-10">
                    <Link to="/button">Button</Link>
                  </li>
                  <li className="p-10">
                    <Link to="/dialog">Dialog</Link>
                  </li>
                </ul>
              </aside>
              <div className="flex-1">
                1234
                <Route exact path="/button" component={MyButton} />
                <Route exact path="/dialog" component={MyDialog} />
              </div>
            </>
          )}
        />
        <Route exact path="/guide" component={Guide} />
      </main>
    </Router>
  )
}

console.log(Index)
