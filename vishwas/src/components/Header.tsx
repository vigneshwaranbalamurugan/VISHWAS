import React from 'react';
import '../input.css';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <>

    
      <div className="bg-[#51c051] top-0 right-0 w-full left-0 h-14 flex items-center justify-between px-14 py-2 text-slate-50">
        <Link className="font-bold text-2xl md:text-4xl text-[#000080]">Vishwas</Link>
        <nav className="flex items-center gap-3">
          <button type="button" className="text-white bg-[#000080] hover:bg-[#0f6a06]  focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
            <a title="Market" href="/market">Market</a>
          </button>
          <button type="button" className="text-white bg-[#000080] hover:bg-[#0f6a06] focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
            <a title="Login" href="/login">Login</a>
          </button>
          <button type="button" className="text-white bg-[#000080] hover:bg-[#0f6a06] focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
            <a title="Login" href="/signup">Sign Up</a>
          </button>
        </nav>
      </div>

    </>
  );
};

export default Header;