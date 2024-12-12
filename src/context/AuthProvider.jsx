import React, { useEffect, useState } from 'react';
import AuthContext from './AuthContext';
import auth from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import Swal from 'sweetalert2';


const AuthProvider = ({children}) => {
    const [loading,setLoading]=useState(true);
    const [user,setUser]=useState(null);

    // create user
    const createUser =(email, password)=>{
        setLoading(true)
       return createUserWithEmailAndPassword(auth, email, password)
    }
    // sign in user
    const signInUser=(email, password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }
    // sign Out User
    const signOutUser=()=>{
        setLoading(true)
        signOut(auth)
        .then(data=>{
            console.log(data)
            Swal.fire({
                title: "Success",
                text: "Sign Out Successfully",
                icon: "success"
              });
        })
        .catch((error) => {
            Swal.fire({
                title: "Success",
                text: `${error.message}`,
                icon: "error"
              });
            console.log(error.message)
          });
    }

    useEffect(()=>{
        const subscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)
            // console.log(currentUser)
        })
        return ()=> subscribe()
    },[])

    const info ={
        createUser,
        signInUser,
        signOutUser,
        user,
        loading,
        setUser
    }
    return (
        <div>
            <AuthContext.Provider value={info}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;