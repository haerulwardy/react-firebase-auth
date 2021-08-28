import React from 'react'
import { useAuth } from '../contexts/AuthContext'

export default function Dashboard() {
    const { curentUSer } = useAuth
    console.log(curentUSer)
    return (
        <div>
            dashboard
        </div>
    )
}
