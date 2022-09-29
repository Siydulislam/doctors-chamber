import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

    const menuItems = (
        <>
            <li><Link to="/" className="rounded-lg text-lg">Home</Link></li>
            <li><Link to="/appoinment" className="rounded-lg text-lg">Appointment</Link></li>
            <li><Link to="/review" className="rounded-lg text-lg">Review</Link></li>
            <li><Link to="/about" className="rounded-lg text-lg">About</Link></li>
            <li><Link to="/contuct" className="rounded-lg text-lg">Contact</Link></li>
            <li><Link to="/login" className="rounded-lg text-lg">Login</Link></li>
        </>
    );

    return (
        <div className="navbar bg-base-100 px-12">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 gap-y-2">
                        {menuItems}
                    </ul>
                </div>
                <div>
                    <Link to="/" className="normal-case text-xl p-2">Doctors Chamber</Link>
                </div>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal gap-x-2">
                    {menuItems}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;