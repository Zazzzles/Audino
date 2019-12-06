import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Landing from './pages/Landing'
import Result from './pages/Result'

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/result">
          <Result />
        </Route>
        <Route path="/">
          <Landing />
        </Route>
      </Switch>
    </Router>
  )
}
