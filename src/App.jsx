/** @jsx jsx */
import { jsx } from '@emotion/react'
import { Route, Link } from 'react-router-dom'

import Home from './Components/Home'
import About from './Components/About'

const App = () => (
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
  )

export default App
