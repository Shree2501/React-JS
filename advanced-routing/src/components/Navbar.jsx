import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='py-4 px-8 bg-cyan-900 flex items-center justify-between'>
      <h2 className='font-bold text-2xl'>Nexus</h2>
      <div className='flex gap-10'>
        <Link className='font-bold text-medium' to='/'>Home</Link>
        <Link className='font-bold text-medium' to='/about'>About</Link>
        <Link className='font-bold text-medium' to='/courses'>Courses</Link>
        <Link className='font-bold text-medium' to='/product'>Product</Link>
      </div>
    </div>
  )
}

export default Navbar
