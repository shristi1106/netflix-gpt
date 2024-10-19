import React from 'react'
import Login from './Login'
import Browse from './Browse'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const Body = () => {

    const appRouter = createBrowserRouter([
        {
            path: "/browse",
            element: <Browse />
        },
        {
            path: "/login",
            element: <Login />
        }
    ]);

    return (
        <div>
            <RouterProvider router={appRouter} />
            
        </div>
    )
}

export default Body
