import React from 'react';
import { createContext } from 'react';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth';
import app from '../../firebase/firebase.init';
import { useState } from 'react';
import { useEffect } from 'react';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    
    //google provider
    const googleProvider = new GoogleAuthProvider();

    //create user
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    //login
    const signIn = (email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password);
    }

    //logout
    const logOut = ()=>{
        return signOut(auth);
    }

    //sign in with google
    const signInWithGoogle =()=>{
        setLoading(true)
        return signInWithPopup(auth,googleProvider);
    }

    useEffect( () =>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            console.log(currentUser);
            setUser(currentUser);
            setLoading(false)
        });

        return () =>{
            return unsubscribe();
        }
    }, [])

    const authInfo = {
        user, 
        loading,
        createUser,
        signIn,
        logOut,
        signInWithGoogle
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;