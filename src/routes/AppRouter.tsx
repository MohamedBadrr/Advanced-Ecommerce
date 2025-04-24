import { lazy } from "react";
// import MainLayout from "@/layouts/MainLayout/MainLayout";
const MainLayout = lazy(() => import("@/layouts/MainLayout/MainLayout"));
const ProfileLayout = lazy(
  () => import("@/layouts/ProfileLayout/ProfileLayout")
);

const AboutUs = lazy(() => import("@/pages/AboutUs"));
const Cart = lazy(() => import("@/pages/Cart"));
const Categories = lazy(() => import("@/pages/Categories"));
const Home = lazy(() => import("@/pages/Home"));
const Login = lazy(() => import("@/pages/Login"));
const Products = lazy(() => import("@/pages/Products"));
const Register = lazy(() => import("@/pages/Register"));
const WishList = lazy(() => import("@/pages/WishList"));
const Profile = lazy(() => import("@/pages/Profile"));
const Orders = lazy(() => import("@/pages/orders"));
import Error from "@/pages/Error";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SuspenseHandler from "@/components/feedback/SuspenseHandler";
import ProtectedRoute from "@/components/auth/ProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <SuspenseHandler>
        <MainLayout />
      </SuspenseHandler>
    ),
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: (
          <SuspenseHandler>
            <Home />
          </SuspenseHandler>
        ),
      },
      {
        path: "categories",
        element: (
          <SuspenseHandler>
            {" "}
            <Categories />
          </SuspenseHandler>
        ),
      },
      {
        path: "/products/:cat_prefix",
        // loader:({params})=>{
        //         if(typeof params.prefix !== "string" || !/^[a-z]+$/i.test(params.prefix)){
        //             throw new Response("Bad Request",{
        //                 statusText:"Category not found",
        //                 status:400
        //             })
        //         }
        //     return true ;
        // },
        element: (
          <SuspenseHandler>
            {" "}
            <Products />{" "}
          </SuspenseHandler>
        ),
      },
      {
        path: "about-us",
        element: (
          <SuspenseHandler>
            {" "}
            <AboutUs />{" "}
          </SuspenseHandler>
        ),
      },
      {
        path: "login",
        element: (
          <SuspenseHandler>
            {" "}
            <Login />{" "}
          </SuspenseHandler>
        ),
      },
      {
        path: "register",
        element: (
          <SuspenseHandler>
            {" "}
            <Register />{" "}
          </SuspenseHandler>
        ),
      },
      {
        path: "cart",
        element: (
          <SuspenseHandler>
            {" "}
            <Cart />{" "}
          </SuspenseHandler>
        ),
      },
      {
        path: "whishlist",
        element: (
          <SuspenseHandler>
            {" "}
            <WishList />{" "}
          </SuspenseHandler>
        ),
      },
      {
        path: "profile",
        element: (
          <ProtectedRoute>
            <SuspenseHandler>
              <ProfileLayout></ProfileLayout>
            </SuspenseHandler>
          </ProtectedRoute>
        ),
        children: [
          {
            index: true,
            element: (
              <SuspenseHandler>
                <Profile />
              </SuspenseHandler>
            ),
          },
          {
            path: "orders",
            element: (
              <SuspenseHandler>
                <Orders />
              </SuspenseHandler>
            ),
          },
        ],
      },
    ],
  },
]);
const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
