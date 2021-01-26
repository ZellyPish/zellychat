/** @jsx jsx */
import React from 'react'
import { Route, Link } from 'react-router-dom'
import { jsx, css, Global } from '@emotion/react'
import emotionReset from 'emotion-reset'

import "./Styles/tailwind.css"

import Home from './Components/Home'
import About from './Components/About'

const App = () => (
  <>
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
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
      <hr />
      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
    </div>
  </>
  )

export default App
