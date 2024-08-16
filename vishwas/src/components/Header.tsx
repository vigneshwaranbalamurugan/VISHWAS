import React from 'react'
import '../input.css'

const Header = () => {
  return (
    <>
      <div className="bg-orange-300 top-0 right-0 w-full left-0 h-18 flex items-center justify-between px-16 py-2 text-slate-50">
        <h2 className="font-bold text-2xl md:text-4xl text-[#000080]">Vishwas</h2>
        <div className="flex">
          <nav className="flex items-center gap-3">
            <div className="flex items-center gap-5">
              <button type="button" className="text-[#000080] bg-gradient-to-br from-[#FF9933] via-white to-[#138808] hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                <a title="Login" href="/login">Login</a>
              </button>
              <button type="button" className="text-[#000080] bg-gradient-to-br from-[#FF9933] via-white to-[#138808] hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                <a title="Register" href="/register">Register</a>
              </button>
            </div>
          </nav>
        </div>
      </div>
    </>
  )
}

export default Header
