import React from 'react'

function Header() {
  return (
    <div className='w-full h-16 bg-white flex items-center gap-10 px-20'>
        <h1 className='font-bold text-xl'>Walia Jobs</h1>
        <div className='mr-auto'>
            <ul className='flex gap-8 text-gray-600'>
                <li>Home</li>
                <li>Jobs</li>
                <li>Companies</li>
                <li>Build CV</li>
                <li>Blogs</li>
            </ul>
        </div>
        <div className='flex gap-5'>
            <button className='border-2 border-blue-300 py-1 px-8 rounded-md '>Login</button>
            <button className="py-1 px-8 bg-[#fa6d4d] text-white rounded-md">Register</button>
        </div>
    </div>
  )
}

export default Header