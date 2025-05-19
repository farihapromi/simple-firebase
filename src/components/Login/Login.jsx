import { signInWithPopup } from 'firebase/auth'
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
  return (
    <div>
        <button 
        onClick={handleGoogleSignIn}
        className='p-4 m-2 border rounded-lg bg-blue-400' >Login with Google</button>
        {
            user && <h4>{user.displayName}</h4>
        }
      
    </div>
  )
}

export default Login
