import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import App from './App'

import './style/index.scss'

ReactDOM.render(
  <AppContainer>
    <App />
  </AppContainer>,
  document.querySelector('#root'),
)

if (module.hot) {
  module.hot.accept('./App.tsx', function() {
    // 重新获取App，解除旧组件事件等
    const App = require('./App').default
    ReactDOM.render(
      <AppContainer>
        <App />
      </AppContainer>,
      document.querySelector('#root'),
    )
  })
}
