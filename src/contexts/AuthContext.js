import React, { useContext, useEffect, useState } from 'react'
import app from '../config/firebaseConfig'
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged  } from "firebase/auth";

const AuthContext = React.createContext()
// useAuth
export const useAuth = () => {
    return useContext(AuthContext)
}

export function AuthProvider({children}) {
    const [curentUser, setCurentUser] = useState()
    const auth = getAuth();
    const [loading, setLoading] = useState(true)

    function signup(email, password) {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    useEffect(() => {
        return onAuthStateChanged(auth, user => {
            return setCurentUser(user)
        })
    }, [])

    const value = {
        curentUser,
        signup
    }
    return (
        <AuthContext.Provider value={value}>
            {loading && children}
        </AuthContext.Provider>
    )
}
