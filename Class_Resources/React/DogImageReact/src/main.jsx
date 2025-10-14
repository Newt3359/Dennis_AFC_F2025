import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';

// import pages and layout(s)
import SplashPage from "./Pages/SplashPage.jsx";
import RandomDogPage from "./Pages/RandomDogPage.jsx";
import ErrorPage from "./Pages/ErrorPage.jsx";
import AppLayout from "./Components/AppLayout.jsx";

// pass in an object = hey, this is how the routes will work,
// and what pages will be shown
const router = createBrowserRouter([
        {
            path:"/",
            element: <AppLayout />,
            errorElement: <ErrorPage />,
            children: [
                {path: "results", element: <RandomDogPage/>},
                {path: "splash", element: <SplashPage/>},
                {index: true, element: <SplashPage/>},
                {path: "*", element: <ErrorPage/>},

            ]
        }
]
  )

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
