import { createBrowserRouter, Navigate } from "react-router-dom";
import Home from "../../Layout/Home/Home";
import CategoryNews from "../../Pages/CategoryNews";
import AuthLayout from "../../Layout/AuthLayout";
import Login from "../../Pages/Login";
import Register from "../../Pages/Register";
import NewsDetails from "../../Components/Login/NewsDetails";
import PrivateRoute from "./PrivateRoute";

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
    path: "/news/:id",
    element: <PrivateRoute>
      <NewsDetails></NewsDetails>
    </PrivateRoute>,
    loader:({params})=>fetch(`https://openapi.programming-hero.com/api/news/${params.id}`)
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
        element:<Login></Login>
      },
      {
        path: "/auth/register",
        element:<Register></Register>,
      }
    ]
  },
]);

export default Router;
