import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <nav className='bg-dark d-flex justify-content-around'>
        <h1 className='text-white'>Store Management..!</h1>
        <div className='mt-2'>
            <Link className='btn btn-light me-5' to={'/add'}>ADDPRODUCT</Link>
            <Link className='btn btn-light' to={'/view'}>VIEWPRODUCT</Link>
            
        </div>
    </nav>
  )
}

export default Header