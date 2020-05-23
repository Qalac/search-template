import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

import ParentResult from './components/Parent-result'
import ParentSearch from './components/Parent-search'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ParentSearch} />
        <Route exact path="/search" component={ParentResult} />
        <Redirect to="/" />
      </Switch>
    </Router>
  )
}


export default App;