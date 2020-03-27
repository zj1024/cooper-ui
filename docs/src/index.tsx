import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import App from './App'

import 'assembly-css/lib/index.scss'
import '../../cooper-theme/index.scss'
import './style/index.scss'
import './style.scss'

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
