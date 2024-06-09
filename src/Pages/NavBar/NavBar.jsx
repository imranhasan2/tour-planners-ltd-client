import { Link, NavLink } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { useState } from "react";


const NavBar = () => {

    const { user, logOut } = useAuth()


    const [dashboard, setDashBoard] = useState(false)





    const handleImage = () => {
        console.log('clicked')
        setDashBoard(!dashboard)

    }

    const handleLogout = () => {
        logOut()
        setDashBoard(false)
    }



    const navbar = <>
        <li><NavLink to='/' style={({ isActive }) => {
            return {
                fontWeight: isActive ? "bold" : "",
                backgroundColor: isActive ? "green" : "",
            };
        }}>Home</NavLink></li>
        <li><NavLink to='art'
            style={({ isActive }) => {
                return {
                    fontWeight: isActive ? "bold" : "",
                    backgroundColor: isActive ? "green" : "",
                };
            }}> Community</NavLink></li>
        <li><NavLink to='addCraftItem'
            style={({ isActive }) => {
                return {
                    fontWeight: isActive ? "bold" : "",
                    backgroundColor: isActive ? "green" : "",
                };
            }}>Blog</NavLink></li>
        <li><NavLink to="my" style={({ isActive }) => {
            return {
                fontWeight: isActive ? "bold" : "",
                backgroundColor: isActive ? "green" : "",
            };
        }}>About Us</NavLink></li>
        <li><NavLink to="my" style={({ isActive }) => {
            return {
                fontWeight: isActive ? "bold" : "",
                backgroundColor: isActive ? "green" : "",
            };
        }}>Contact Us</NavLink></li>
    </>
    return (
        <div className="navbar  bg-white max-w-6xl mx-auto ">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {
                            navbar
                        }
                    </ul>
                </div>
                <img className="h-12" src="https://www.tour-planners.com/uploads/vaQdkhSEelNt.gif" alt="" />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {
                        navbar
                    }
                </ul>
            </div>
            <div className="navbar-end">

                {user ?
                    <div className="relative flex gap-3">

                        <img onClick={ handleImage} src={user?.photoURL || "https://static.vecteezy.com/system/resources/thumbnails/001/993/889/small/beautiful-latin-woman-avatar-character-icon-free-vector.jpg"} alt="User" className="w-10 h-10 rounded-full cursor-pointer" />
                        {dashboard && (
                            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-50">
                                <div className="px-4 py-2 text-sm text-gray-700">{user?.displayName}</div>
                                <div className="px-4 py-2 text-sm text-gray-700">{user?.email}</div>
                                <Link to="/dashboard" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Dashboard</Link>
                                <button
                                    onClick={handleLogout}
                                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                >
                                    Logout
                                </button>
                            </div>
                        )}




                    </div>

                    : <div>
                        <Link to='/login' className="btn bg-red-500 text-white mr-5">Login</Link>
                        <Link to="/register" className="btn bg-blue-500 text-white">Register</Link>

                    </div>

                }
            </div>
        </div>
    );
};


export default NavBar;