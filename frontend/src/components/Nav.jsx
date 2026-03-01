import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='text-2xl h-15 items-center rounded-b-3xl bg-gray-800 py-5 flex gap-10 justify-center '>
         <NavLink to='/'>Home</NavLink>
         <NavLink to='/products'>Products</NavLink>
         <NavLink to='/login'>Login</NavLink>
    </div>
  )
}

export default Nav