import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, withRouter } from 'react-router-dom'
import App from './App'

import './styles/tailwind.css'

const AppWithRouter = withRouter(App)

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AppWithRouter />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)

if (import.meta.hot) {
  import.meta.hot.accept()
}
