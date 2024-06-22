import { createBrowserRouter } from "react-router-dom";
import Root from "./Root/Root";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Home from "../Pages/Home/Home/Home";
import DashBoard from "../DashBoard/DashBoard";
import WhistList from "../DashBoard/WhistList/WhistList";
import PackageDetails from "../Pages/PackageDetails/PackageDetails";
import AllPackage from "../Pages/AllPackagePage/AllPackage";
import TourGuideProfilePage from "../Pages/TourGuideProfile/TourGuideProfilePage";
import GuideList from "../DashBoard/GuideList/GuideList";
import MyBooking from "../DashBoard/MyBookings/MyBooking";
import TourPackages from "../Pages/TourPackages/TourPackages";
import AllUsers from "../DashBoard/AllUsers/AllUsers";
import MyProfile from "../DashBoard/MyProfile/MyProfile";
import RequestToAdmin from "../DashBoard/RequestToAdmin/RequestToAdmin";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [{
            path: '/login',
            element: <Login></Login>,
        },
        {
            path: '/register',
            element: <Register></Register>
        }, {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/packdetails/:id',
            element: <PackageDetails></PackageDetails>
        },
        {
            path: 'allPackage',
            element: <AllPackage></AllPackage>
        },
        {
            path: '/tourPackages/:type',
            element: <TourPackages></TourPackages>
        },
        ]
    },
    {
        path: 'dashboard',
        element: <DashBoard></DashBoard>,
        children: [
            // user routes
            {
                path: 'wishList',
                element: <WhistList></WhistList>

            },
            {
                path: 'mybooking',
                element: <MyBooking></MyBooking>

            },
            {
                path: 'myProfile',
                element: <MyProfile></MyProfile>

            },{
                path:'requestAdmin',
                element:<RequestToAdmin></RequestToAdmin>
            },
            
            // guide routes
            {
                path: 'guides',
                element: <GuideList />
            }, {
                path: 'guideProfile/:id',
                element: <TourGuideProfilePage></TourGuideProfilePage>

            },

            // admin routes
            {
                path: 'allUser',
                element: <AllUsers></AllUsers>

            },]
    }
]);