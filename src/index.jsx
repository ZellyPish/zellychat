import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, withRouter } from 'react-router-dom'
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3'

import App from './App'

import './styles/tailwind.css'

const AppWithRouter = withRouter(App)

ReactDOM.render(
  <React.StrictMode>
    <GoogleReCaptchaProvider
      useRecaptchaNet
      reCaptchaKey={process.env.RECAPTCHA_KEY}
      scriptProps={{ async: true, defer: true, appendTo: 'body' }}
    >
      <BrowserRouter>
        <AppWithRouter />
      </BrowserRouter>
    </GoogleReCaptchaProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

if (import.meta.hot) {
  import.meta.hot.accept()
}
