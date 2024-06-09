import { createBrowserRouter } from "react-router-dom";
import Root from "./Root/Root";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Home from "../Pages/Home/Home/Home";
import DashBoard from "../DashBoard/DashBoard";
import WhistList from "../DashBoard/WhistList/WhistList";
import PackageDetails from "../Pages/PackageDetails/PackageDetails";

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
            element:<Register></Register>
           },{
            path:'/',
            element:<Home></Home>
           },
           {
            path:'/packdetails/:id',
            element:<PackageDetails></PackageDetails>
           }
        ]
    },
    {
        path:'dashboard',
        element:<DashBoard></DashBoard>,
        children:[
            // user routes
            {
                path:'whistList',
                element:<WhistList></WhistList>

        },{

        }]
    }
]);