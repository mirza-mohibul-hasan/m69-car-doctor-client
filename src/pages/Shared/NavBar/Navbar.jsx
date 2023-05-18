// import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/icons/logo.svg'
import { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';
const Navbar = () => {
    const {logOut, user} = useContext(AuthContext)
    const navItems = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/services'>Services</Link></li>
        {
            user && <li><Link to='/bookings'>My Bookings</Link></li>
        }
    </>
    const handleLogOut = () =>{
        logOut()
        // .then()
        // .then(error => console.log(error))
    }
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl">
                    <img className='h-full' src={logo} alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end space-x-2">
                <button className="btn btn-outline btn-error hover:text-white ">Appointment</button>
                {
                    user ? <button className="btn btn-outline btn-error hover:text-white" onClick={()=>handleLogOut()}>Log Out</button>
                    :<Link to='/login'><button className="btn btn-outline btn-primary hover:text-white ">Login</button></Link>
                }
            </div>
        </div>
    );
};

export default Navbar;