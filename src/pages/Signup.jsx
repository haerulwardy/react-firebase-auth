import React, { useRef, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

export default function Signup() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const confirmPasswordref = useRef()
    const { curentUser, signup } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    async function handleSubmit(e) {
        e.preventDefault()

        // check password match
        if (passwordRef.current.value !== confirmPasswordref.current.value) {
            emailRef.current.value = ''
            passwordRef.current.value = ''
            confirmPasswordref.current.value = ''
            return setError('Password do not match')
        }

        try {
            setLoading(true)
            setError('')
            await signup(emailRef.current.value, passwordRef.current.value)
            console.log(curentUser)
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
                    <h1 className="text-center">Sign up here {JSON.stringify(curentUser.uid)} </h1>
                    {error && <div class="alert alert-danger" role="alert">
                        {error}
                    </div>}
                    <form className="mt-5" onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="email" aria-describedby="emailHelp" ref={emailRef} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input type="password" className="form-control" id="password" ref={passwordRef} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="confirmPassword" className="form-label">Confirmation Password</label>
                            <input type="password" className="form-control" id="confirmPassword" ref={confirmPasswordref} />
                        </div>
                        <button type="submit" className="btn btn-primary w-100 mt-3" disabled={loading}>Signup for free</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
