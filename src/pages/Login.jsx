import React, { useRef, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

export default function Login() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const { login } = useAuth()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const history = useHistory()

    emailRef.current.value = ''
    passwordRef.current.value = ''

    async function handleLogin(e) {
        e.preventDefault()

        try {
            setLoading(true)
            setError('')
            await login(emailRef.current.value, passwordRef.current.value)
            history.push('/')
        } catch {
            setError('Failed to signup')
        }
        setLoading(false)
    }

    return (
        <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
            <div className="row justify-content-center w-100">
                <div className="col-5">
                    <h1 className="text-center">Sign in here</h1>
                    {error && <div className="alert alert-danger" role="alert">{error}</div>}
                    <form className="mt-5" onSubmit={handleLogin}>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="email" aria-describedby="emailHelp" ref={emailRef} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input type="password" className="form-control" id="password" ref={passwordRef} />
                        </div>
                        <button type="submit" className="btn btn-primary w-100 mt-3" disabled={loading}>Signup for free</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
