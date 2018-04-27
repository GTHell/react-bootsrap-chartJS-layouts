import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Home, AboutMe } from '../index.js'

export default props => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/aboutme" component={AboutMe} />
  </Switch>
)
