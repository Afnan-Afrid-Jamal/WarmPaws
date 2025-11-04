import React, { useContext } from 'react';
import { FaUser } from 'react-icons/fa';
import { IoPaw } from 'react-icons/io5';
import { MdLogin, MdLogout } from 'react-icons/md';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../Provider/AuthContext';

const Navbar = () => {
    const { user, setUser, customHandleLogOut, setLoading } = useContext(AuthContext);

    const handleLogOut = () => {
        setLoading(true);
        customHandleLogOut()
            .then(() => setUser(null))
            .catch(error => console.log(error))
            .finally(() => setLoading(false));
    };

    return (
        <div className='bg-[#ffe7c6] shadow-md'>
            <div className="navbar w-full md:w-11/12 lg:w-11/12 mx-auto">

                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow">
                            <li><NavLink to="/home" className={({ isActive }) => isActive ? "text-[#ff7a21] font-bold" : "text-gray-700"}>Home</NavLink></li>
                            <li><NavLink to="/service" className={({ isActive }) => isActive ? "text-[#ff7a21] font-bold" : "text-gray-700"}>Service</NavLink></li>
                            <li><NavLink to="/profile" className={({ isActive }) => isActive ? "text-[#ff7a21] font-bold" : "text-gray-700"}>My Profile</NavLink></li>
                        </ul>
                    </div>
                    <Link to="/home">
                        <p className="text-xl md:text-2xl lg:text-2xl poppins-font font-bold flex gap-2 items-center">
                            <IoPaw size={40} />WarmPaws
                        </p>
                    </Link>
                </div>


                <div className="navbar-center hidden lg:flex">
                    <ul className="flex gap-10">
                        <li>
                            <NavLink to="/home" className={({ isActive }) => isActive ? "text-[#ff7a21] font-bold" : "text-gray-700"}>
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/service" className={({ isActive }) => isActive ? "text-[#ff7a21] font-bold" : "text-gray-700"}>
                                Services
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/profile" className={({ isActive }) => isActive ? "text-[#ff7a21] font-bold" : "text-gray-700"}>
                                My Profile
                            </NavLink>
                        </li>
                    </ul>
                </div>

                <div className="navbar-end flex gap-3 items-center">
                    {user ? (
                        <div className="flex items-center gap-3">
                            {user.photoURL ? (
                                <img
                                    src={user.photoURL}
                                    alt="User"
                                    title={user.displayName}
                                    className="w-10 h-10 rounded-full border-2 border-orange-500 object-cover"
                                />
                            ) : (
                                <FaUser size={25} />
                            )}
                            <button onClick={handleLogOut} className="btn flex items-center gap-2 bg-gradient-to-r from-[#E59560] to-[#F28C4C] text-white 
                                       font-medium shadow-md hover:from-[#F28C4C] hover:to-[#D77A3D] 
                                       transition-all duration-300 transform hover:scale-105">
                                <MdLogout size={16} /> LogOut
                            </button>
                        </div>
                    ) : (
                        <Link to="/login" className="btn flex items-center gap-2 bg-gradient-to-r from-[#E59560] to-[#F28C4C] text-white 
                                       font-medium shadow-md hover:from-[#F28C4C] hover:to-[#D77A3D] 
                                       transition-all duration-300 transform hover:scale-105">
                            <MdLogin size={16} /> Login/Register
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;