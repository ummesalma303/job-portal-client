import React, { useContext } from 'react';
import logo from '../../assets/smal-logo.png'
import { NavLink } from 'react-router-dom';
import AuthContext from '../../context/AuthContext';
const Navbar = () => {
    const {user,signOutUser} = useContext(AuthContext)
    const link=<>
    <NavLink to='/'>Home</NavLink>
    <NavLink to='/myApplication'>My Application</NavLink>
    <NavLink to='/addJob'>Add A Job</NavLink>
    <NavLink to='/myPostedJobs'>My Posted Jobs</NavLink>
    </>

    // console.log(user)
    return (
        <div className='bg-base-100'>
            <div className="navbar max-w-[1380px] mx-auto">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        {link}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">
        <img className='w-14' src={logo} alt="" />
        <h2>Job Portal</h2>
    </a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 space-x-4">
      {link}
    </ul>
  </div>
  <div className="navbar-end">
    {
      user?<div><h2>{user?.email}</h2><button className='btn btn-primary text-white' onClick={signOutUser}>Sign Out</button></div>:<div className="space-x-4">
      <NavLink to='/register'><button className='underline'>Register</button></NavLink>
      <NavLink to='/signIn'><button className='btn btn-primary text-white'>Sign In</button></NavLink>
    </div>
    }
  </div>
</div>
        </div>
    );
};

export default Navbar;