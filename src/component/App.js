import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import PrivateRoute from './PrivateRoute'

// pages
import Dashboard from '../pages/Dashboard/'
import Signup from '../pages/Signup/'
import Login from '../pages/Login/'
import { AuthProvider } from '../contexts/AuthContext'

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
            <PrivateRoute exact path='/' component={Dashboard} />
            <Route path='/signup'>
              <Signup />
            </Route>
            <Route path='/login'>
              <Login />
            </Route>
        </Switch>
      </Router>
    </AuthProvider>
  )
}