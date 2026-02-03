import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    const session = true
  return (
   <nav className='bg-white shadow-sm'>
    <div className='container mx-auto p-4 flex justify-between items-center'>
        <Link href="/"className='text-xl font-bold text-blue-600'>
        Contact Manager
        </Link>
    </div>
   </nav>
  )
}

export default Navbar
