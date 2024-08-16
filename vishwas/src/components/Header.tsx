import React from 'react'
import '../input.css'
const Header = () => {
  return (
    <div className="bg-green-400 fixed top-0 right-0 w-full left-0 h-16 flex items-center justify-between px-16 text-slate-50">
      <h2 className="font-bold text-2xl md:text-4xl">Vishwas</h2>
      <div className="flex">
        
      </div>
      <nav className="flex items-center gap-3">
      
      </nav>
      <div className="flex items-center gap-5">
      <button type="button" class="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
      <a href="/login">Login</a>
      </button>
      <button type="button" class="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
      <a className="text-white  focus:ring-4 focus:outline-green   font-medium rounded-lg text-sm px-2 py-2.5 text-center" title="Register" href="/register">Register </a>
      </button>
      </div>
    </div>
  )
}

export default Header