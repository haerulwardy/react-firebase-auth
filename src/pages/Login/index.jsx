import React, { useRef, useState } from 'react'
import { useHistory } from 'react-router'
import { useAuth } from '../../contexts/AuthContext'

export default function Login() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const { signin, currentUser } = useAuth()
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    async function handleLogin(e) {
        e.preventDefault()

        try {
            setLoading(true)
            await signin(emailRef.current.value, passwordRef.current.value)
            localStorage.setItem('user', JSON.stringify(currentUser))
            history.push('/')
        } catch (error) {
            console.log(error)
        }
        setLoading(false)
    }

    return (
        <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
            <form className="w-25" onSubmit={handleLogin}>
                <h2 className="text-center mb-3">Login</h2>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" ref={emailRef} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" ref={passwordRef} />
                </div>
                <button type="submit" className="btn btn-primary w-100 mt-2" disabled={loading}>Login Now</button>
            </form>
        </div>
    )
}
