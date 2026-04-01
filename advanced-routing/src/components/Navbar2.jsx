import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar2 = () => {
    let navigate = useNavigate()
  return (
    <div className='bg-cyan-800 h-18 px-4 py-2 '>
        <button  
            onClick={()=>{
                navigate('/')
            }}
            className='bg-amber-500 font-medium active:scale-95 px-3 py-2 m-2 cursor-pointer rounded'>
            Return to Home
        </button>
        <button
            onClick={()=>{
                navigate(-1)
            }}
            className='bg-amber-500 font-medium active:scale-95 px-3 py-2 m-2 cursor-pointer rounded'>
            Back
        </button>
        <button 
            onClick={()=>{
                navigate(+1)
            }}
            className='bg-amber-500 font-medium active:scale-95 px-3 py-2 m-2 cursor-pointer rounded'>
            Next
        </button>
    </div>
  )
}

export default Navbar2
