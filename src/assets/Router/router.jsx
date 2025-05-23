import { createBrowserRouter, Navigate } from "react-router-dom";
import Home from "../../Layout/Home/Home";
import CategoryNews from "../../Pages/CategoryNews";
import AuthLayout from "../../Layout/AuthLayout";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
        {
            path:'',
            element:<Navigate to={'category/01'}></Navigate>
        },
      {
        path: "/category/:id",
        element: <CategoryNews></CategoryNews>,
        loader:({params})=>fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`)
      },
    ],
  },
  {
    path: "/about",
    element: <h2>this is about</h2>,
  },
  {
    path: "/career",
    element: <h2>this is Career</h2>,
  },
  {
    path: "*",
    element: <h2>this is error</h2>,
  },
  {
    path: "auth",
    element: <AuthLayout></AuthLayout>,
    children:[
      {
        path: "/auth/login",
        element:<h2>login</h2>
      },
      {
        path: "/auth/register",
        element:<h2>register</h2>,
      }
    ]
  },
]);

export default Router;
