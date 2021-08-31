import React, { useEffect, useRef } from 'react'
import { useHistory } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'

export default function Dashboard() {
    const { signout } = useAuth()
    const history = useHistory()

    async function handleSignout() {
        try {
            await signout()
            localStorage.clear()
            history.push('/login')
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="container py-5">
            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid">
                    <h3>hello Ward!</h3>
                    <button className="btn btn-primary px-4" onClick={handleSignout}>Signout</button>
                </div>
            </nav>
        </div>
    )
}
