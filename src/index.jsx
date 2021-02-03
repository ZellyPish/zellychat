import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, withRouter } from 'react-router-dom'
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3'
import { Provider } from 'react-redux'

import App from './App'
import store from './redux/store'

import './styles/tailwind.css'

const AppWithRouter = withRouter(App)

ReactDOM.render(
  <React.StrictMode>
    <GoogleReCaptchaProvider
      useRecaptchaNet
      reCaptchaKey={process.env.RECAPTCHA_KEY}
      scriptProps={{ async: true, defer: true, appendTo: 'body' }}
    >
      <Provider store={store}>
        <BrowserRouter>
          <AppWithRouter />
        </BrowserRouter>
      </Provider>
    </GoogleReCaptchaProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

if (import.meta.hot) {
  import.meta.hot.accept()
}
