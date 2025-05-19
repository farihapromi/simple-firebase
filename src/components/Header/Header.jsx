import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div>
           <h3>this is navbar</h3>
    <div className='flex gap-2 '>
     
        <NavLink  className='p-4 m-2 border rounded-lg bg-blue-400'to='/'>Home</NavLink>
         <NavLink className='p-4 m-2 border rounded-lg bg-blue-400' to='/login'>Login</NavLink>
      
    </div>
    </div>
  )
}

export default Header
