import { NavLink, Outlet } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import useAdmin from "../Hooks/useAdmin/useAdmin";
import useGuide from "../Hooks/useModerator/useGuide";


const DashBoard = () => {
    const { user } = useAuth();
    const [isAdmin, isAdminLoading] = useAdmin();
    const [isGuide, isGuideLoading] = useGuide();

    // Check if data is still loading
    if (isAdminLoading || isGuideLoading) {
        return <div>Loading...</div>;
    }

    // Check if user is not admin or guide
    const isUser = user && !isAdmin && !isGuide;

    console.log('Role:', isAdmin ? 'admin' : isGuide ? 'guide' : 'user');
    console.log('isAdmin:', isAdmin);
    console.log('isGuide:', isGuide);

    return (
        <div className="flex">
            <div className="w-64 min-h-screen p-6 space-y-4 bg-[#D1A054] flex flex-col">
                {isUser && (
                    <>
                        <NavLink to="/dashboard/myProfile" className="text-xl font-bold hover:text-blue-600">
                            My Profile
                        </NavLink>
                        <NavLink to="/dashboard/myBooking" className="text-xl font-bold hover:text-blue-600 mb-5">
                            My Booking
                        </NavLink>
                        <NavLink to="/dashboard/wishList" className="text-xl font-bold hover:text-blue-600">
                            My WishList
                        </NavLink>
                        <NavLink to="/dashboard/requestAdmin" className="text-xl font-bold hover:text-blue-600">
                            Request To Admin
                        </NavLink>
                    </>
                )}
                {isGuide && (
                    <>
                        <NavLink to="/dashboard/guideProfile" className="text-xl font-bold hover:text-blue-600 mb-5">
                            Guide Profile
                        </NavLink>
                        <NavLink to="/dashboard/myAssignedTours" className="text-xl font-bold hover:text-blue-600 mb-5">
                            My Assigned Tour
                        </NavLink>
                    </>
                )}
                {isAdmin && (
                    <>
                        <NavLink to="/dashboard/adminProfile" className="text-xl font-bold hover:text-blue-600 mb-5">
                            Admin Profile
                        </NavLink>
                        <NavLink to="/dashboard/addPackage" className="text-xl font-bold hover:text-blue-600 mb-5">
                            Add Package
                        </NavLink>
                        <NavLink to="/dashboard/manageUsers" className="text-xl font-bold hover:text-blue-600 mb-5">
                            Manage Users
                        </NavLink>
                        <NavLink to="/dashboard/allUser" className="text-xl font-bold hover:text-blue-600">
                            All Users
                        </NavLink>
                    </>
                )}
                <hr />
                <NavLink to="/" className="text-xl font-bold hover:text-blue-600">
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