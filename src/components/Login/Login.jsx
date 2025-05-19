import { signInWithPopup } from 'firebase/auth'
import { GoogleAuthProvider } from 'firebase/auth'
import React from 'react'
import auth from '../../firebase/firebase_init'

const Login = () => {
    const provider=new GoogleAuthProvider()
    const handleGoogleSignIn=()=>{
        signInWithPopup(auth,provider)
        .then((result)=>{

        })
        .catch((error)=>{
            console.log(error)
        })

    }
  return (
    <div>
        <button 
        onClick={handleGoogleSignIn}
        className='p-4 m-2 border rounded-lg bg-blue-400' >Login with Google</button>
      
    </div>
  )
}

export default Login
