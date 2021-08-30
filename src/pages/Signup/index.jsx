import React, { useRef, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'

export default function Signup() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const { signup } = useAuth()
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    async function handleSignup(e) {
        e.preventDefault()

        try {
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value)
            history.push('/')
        } catch (error) {
            console.log(error)
        }
        setLoading(false)
    }

    return (
        <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
            <form className="w-25" onSubmit={handleSignup}>
                <h2 className="text-center mb-3">Sign up</h2>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" ref={emailRef} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" ref={passwordRef} />
                </div>
                <button type="submit" className="btn btn-primary w-100 mt-2" disabled={loading}>Sign up Now</button>
            </form>
        </div>
    )
}
