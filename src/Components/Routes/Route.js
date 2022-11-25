import { createBrowserRouter } from "react-router-dom";
import AddAProduct from "../AddAProduct/AddAProduct";
import AllBuyers from "../AllBuyers/AllBuyers";
import AllSeller from "../AllSeller/AllSeller";
import Blogs from "../Blogs/Blogs";
import DashboardLayout from "../DashBoard/DashboardLayout";

import Home from "../Home/Home";
import MyOrders from "../MyOrders.js/MyOrders";
import MyProducts from "../MyProducts/MyProducts";

import Root from "../Root/Root";

import SignIn from "../SignIn/SignIn";
import SignUp from "../SignUp/SignUp";
import SimplePage from "../SimplePage/SimplePage";
import AdminRoute from "./AdminRoute";
import BuyerRoute from "./BuyerRoute";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/signin",
        element: <SignIn></SignIn>,
      },

      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },

      // {
      //   path: "/myorders",
      //   element: <MyOrders></MyOrders>,
      // },

      {
        path: "/blogs",
        element: (
          <AdminRoute>
            <Blogs></Blogs>{" "}
          </AdminRoute>
        ),
      },
      // {
      //   path: "/blogs",
      //   element: <Blogs></Blogs>,
      // },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>{" "}
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: <SimplePage></SimplePage>,
      },
      {
        path: "/dashboard/allusers",
        element: <SimplePage></SimplePage>,
      },
      {
        path: "/dashboard/myorders",
        element: <MyOrders></MyOrders>,
      },
      {
        path: "/dashboard/allbuyers",
        element: <AllBuyers></AllBuyers>,
      },
      {
        path: "/dashboard/allsellers",
        element: <AllSeller></AllSeller>,
      },
      {
        path: "/dashboard/myproducts",
        element: <MyProducts></MyProducts>,
      },
      {
        path: "/dashboard/addaproduct",
        element: <AddAProduct></AddAProduct>,
      },
    ],
  },
]);

export default router;
