import { NavLink, Outlet } from "react-router-dom";


const DashBoard = () => {
    return (
        <div className="flex">
            <div className="w-64 min-h-screen p-6 space-y-4 bg-[#D1A054]">
                
                    <NavLink to="/dashboard/whistList" className={"text-xl font-bold  hover:text-blue-600"}>
                        My WhisList
                    </NavLink>
               
            </div>
            <div className="flex-1 p-6">
                <Outlet></Outlet>
            </div>

        </div>
    );
};

export default DashBoard;