/** @jsx jsx */
import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { jsx, css, Global } from '@emotion/react'
import emotionReset from 'emotion-reset'

import './styles/tailwind.css'

import Login from './components/Auth/Login/Login'
import Register from './components/Auth/Register/Register'
import Home from './components/Home'

const App = () => (
  <React.Fragment>
    <Global styles={css`
        ${emotionReset}

        *, *::after, *::before {
          box-sizing: border-box;
          -moz-osx-font-smoothing: grayscale;
          -webkit-font-smoothing: antialiased;
          font-smoothing: antialiased;
        }
      `}
    />

    <Switch>
      <Route path='/login' component={Login} />
      <Route path='/register' component={Register} />
      <Route path='/' exact component={Home} />
    </Switch>
  </React.Fragment>
)

export default App
