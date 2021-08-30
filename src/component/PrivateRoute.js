import React from 'react'
import { Route, Redirect } from 'react-router-dom'
// import { useAuth } from '../contexts/AuthContext'

export default function PrivateRoute({component: Component, ...rest}) {
    const currentUser = localStorage.getItem('user')
    
    return (
        <Route 
            {...rest}
            render = {props => (
                currentUser ? <Component {...props} />
                : <Redirect to="/login" />
            )}
        />
    )
}
