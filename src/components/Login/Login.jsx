import { signInWithPopup, signOut } from 'firebase/auth'
import { GoogleAuthProvider } from 'firebase/auth'
import React, { useState } from 'react'
import auth from '../../firebase/firebase_init'

const Login = () => {
    const provider=new GoogleAuthProvider()
    const [user,setUser]=useState(null)
    const handleGoogleSignIn=()=>{
        signInWithPopup(auth,provider)
        .then((result)=>{
            setUser(result.user)

        })
        .catch((error)=>{
            console.log(error)
            setUser(null)
        })

    }
    const handleGoogleSignOut=()=>{
        signOut(auth)
        .then(()=>{
            setUser(null)

        })
        .catch(error=>{
            console.log(error)
        })

    }
  return (
    <div>
       
        
        {
            user? <button 
        onClick={handleGoogleSignOut}
        className='p-4 m-2 border rounded-lg bg-blue-400' >Sign Out</button>: <button 
        onClick={handleGoogleSignIn}
        className='p-4 m-2 border rounded-lg bg-blue-400' >Login with Google</button>
        }
        {
            user && 
            <div>
            <h4>{user.displayName}</h4>
            <h3>Email Address: {user.email}</h3>
            <img src={user.photoURL} alt="" />
            </div>
        }
      
    </div>
  )
}

export default Login
