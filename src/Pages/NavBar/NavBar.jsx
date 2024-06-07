import {  NavLink } from "react-router-dom";


const NavBar = () => {
  
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
        <div className="navbar bg-base-100 max-w-6xl mx-auto">
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

                {/* {user ?
                    <div className="relative flex gap-3">

                        <img src={user?.photoURL || "https://static.vecteezy.com/system/resources/thumbnails/001/993/889/small/beautiful-latin-woman-avatar-character-icon-free-vector.jpg"} alt="User" className="w-10 h-10 rounded-full cursor-pointer" />


                        <span className="absolute top-0 left-full ml-2 bg-white p-1 rounded-md opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
                            {user.displayName}
                        </span>


                        <button className="bg-green-500 px-3 py-1 rounded-xl" onClick={logOut}>
                            LogOut
                        </button>
                    </div>

                    : <div>
                        <Link to='/login' className="btn bg-red-500 text-white mr-5">Login</Link>
                        <Link to="/register" className="btn bg-blue-500 text-white">Register</Link>

                    </div>

                } */}
            </div>
        </div>
    );
};


export default NavBar;