

import MainLayout from "@/layouts/MainLayout/MainLayout";
import AboutUs from "@/pages/AboutUs";
import Cart from "@/pages/Cart";
import Categories from "@/pages/Categories";
import Error from "@/pages/Error";
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import Products from "@/pages/Products";
import Register from "@/pages/Register";
import WishList from "@/pages/WishList";
import {createBrowserRouter , RouterProvider} from "react-router-dom"

const router = createBrowserRouter([{
    path:"/",
    element:<MainLayout />,
    errorElement:<Error />,
    children:[
      {
        index:true,
        element:<Home />
      },
      {
        path:"categories",
        element: <Categories />
      },
      {
        path:"/products/:cat_prefix",
        // loader:({params})=>{
        //         if(typeof params.prefix !== "string" || !/^[a-z]+$/i.test(params.prefix)){
        //             throw new Response("Bad Request",{
        //                 statusText:"Category not found",
        //                 status:400
        //             })
        //         }
        //     return true ;
        // },
        element:<Products />
      },
      {
        path:"about-us",
        element:<AboutUs />
      },
      {
        path:"login",
        element:<Login />
      },
      {
        path:"register",
        element:<Register />
      },
      {
        path:"cart",
        element:<Cart />
      },{
        path:"whishlist",
        element:<WishList />
      }
    ]
  }])
const AppRouter = () => {
  return <RouterProvider router={router}/>;
};

export default AppRouter;
