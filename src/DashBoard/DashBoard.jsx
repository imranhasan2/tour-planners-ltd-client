import { NavLink, Outlet } from "react-router-dom";


const DashBoard = () => {

    

    return (
        <div className="flex">
            <div className="w-64 min-h-screen p-6 space-y-4 bg-[#D1A054] flex flex-col">


                {/*User Navlink */}
                <NavLink
                    to="/dashboard/whistList"
                    className="text-xl font-bold hover:text-blue-600 "
                >
                    My Profile
                </NavLink>
                <NavLink
                    to="/dashboard/mybooking"
                    className="text-xl font-bold hover:text-blue-600 mb-5"
                >
                    My Booking
                </NavLink>
                <NavLink
                    to="/dashboard/whistList"
                    className="text-xl font-bold hover:text-blue-600 "
                >
                    My WishList
                </NavLink>
                <NavLink
                    to="/dashboard/whistList"
                    className="text-xl font-bold hover:text-blue-600 "
                >
                    Request To Admin
                </NavLink>




                {/* Guide Profile NavLink with margin-bottom */}
                <NavLink
                    to="/dashboard/guides"
                    className="text-xl font-bold hover:text-blue-600 mb-5"
                >
                    Guide Profile
                </NavLink>

                <hr />






                {/* Home NavLink */}
                <NavLink
                    to="/"
                    className="text-xl font-bold hover:text-blue-600"
                >
                    Home
                </NavLink>
            </div>
            <div className="flex-1 p-6 mt-5">
                <Outlet />
            </div>
        </div>
    );
};

export default DashBoard;