import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../pages/Home";
import About from "../pages/About";
import Login from "../pages/Login";
import Logout from "../pages/Logout";
import ErrorPage from "../pages/ErrorPage";
import DashboardLayout from "../layouts/DashboardLayout";

import Registration from "../pages/Registration";
import PrivetRoute from "./privet/PrivetRoute";
import ProductDetails from "../pages/ProductDetails";
import AllProducts from "../pages/AllProducts";
import AddProduct from "../pages/AddProduct";
import EditProducts from "../pages/EditProducts";

import DashboardHome from "../pages/DashboardHome";
import ProfileEdit from "../pages/ProfileEdit";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("http://localhost:5000/shoes"),
      },
      {
        path: "/product/:id",
        element: <ProductDetails />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/shoe/${params.id}`),
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/logout",
        element: <Logout />,
      },
      {
        path: "/register",
        element: <Registration />,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivetRoute>
        <DashboardLayout />
      </PrivetRoute>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: "home",
        element: (
          <PrivetRoute>
            <DashboardHome />
          </PrivetRoute>
        ),
      },
      {
        path: "allproducts",
        element: (
          <PrivetRoute>
            <AllProducts />
          </PrivetRoute>
        ),
      },
      {
        path: "add-product",
        element: (
          <PrivetRoute>
            <AddProduct />
          </PrivetRoute>
        ),
      },
      {
        path: "home/edit-user/:id",
        element: (
          <PrivetRoute>
            <ProfileEdit />
          </PrivetRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/users/get/${params.id}`),
      },
      {
        path: "allproducts/edit-product/:id",
        element: (
          <PrivetRoute>
            <EditProducts />
          </PrivetRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/shoe/${params.id}`),
      },
    ],
  },
]);
