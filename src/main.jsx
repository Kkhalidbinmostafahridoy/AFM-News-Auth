import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router-dom'
import Router from './assets/Router/Router.jsx'


// import Root from './Components/Root.jsx';
// import Home from './Layout/Home/Home.jsx';
// import About from './Layout/About/About.jsx';
// import Career from './Layout/Career/Career.jsx';
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Root></Root>,
//     children:[
//       {
//         path:'/',
//         element:<Home></Home>,
//       },
//       {
//         path:'/about',
//         element:<About></About>,
//       },
//       {
//         path:'/career',
//         element:<Career></Career>,
//       },
//       {
//         path:'*',
//         element:<h1>Error</h1>,
//       }
//     ]
//   },
// ]);


createRoot(document.getElementById('root')).render(
  <StrictMode >
    <RouterProvider router ={Router}></RouterProvider>
  </StrictMode>,
)
