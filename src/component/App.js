import React from 'react'
import Signup from '../pages/Signup'
import Dashboard from '../pages/Dashboard'
import { AuthProvider } from '../contexts/AuthContext'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          
          <Route exact path='/'>
            <Dashboard />
          </Route>
          <Route path='/signup'>
            <Signup />
          </Route>

        </Switch>
      </Router>
    </AuthProvider>
  )
}