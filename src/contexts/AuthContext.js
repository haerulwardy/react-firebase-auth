import React, {createContext, useContext, useState, useEffect} from 'react'
// firebase
import app from '../config/firebaseConfig'
import {
    getAuth,
    onAuthStateChanged,
    createUserWithEmailAndPassword, 
    signOut,
    signInWithEmailAndPassword
} from 'firebase/auth'


export const AuthContext = createContext()
export const useAuth = () => {
    return useContext(AuthContext)
}
export function AuthProvider({children}) {
    const [currentUser, setCurrentUser] = useState()
    const auth = getAuth()

    // signup
    function signup(email, password) {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // signin
    function signin(email, password) {
        return signInWithEmailAndPassword(auth, email, password)
    }

    // signout
    function signout() {
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            setCurrentUser(user)
        })
        
        return unsubscribe
    }, [])

    const value = {
        currentUser,
        signup,
        signin,
        signout
    }
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}
