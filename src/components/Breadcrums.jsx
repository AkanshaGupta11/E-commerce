import React from 'react'
import { Navigate } from 'react-router-dom'
function Breadcrums({title}) {
  return (
    <div className='max-w-6xl mx-auto my-10'>
      <h1 className = 'text-xl text-gray-700 font-semibold'>
        <span className='cursor-pointer' onClick={() => Navigate('/')}>Home</span> / <span className='cursor-pointer' onClick={() => Navigate('/product')}>Products</span>
        / <span>{title}</span>
      </h1>
    </div>
  )
}

export default Breadcrums