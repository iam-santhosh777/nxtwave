import React from 'react';
import LoginPage from '../LoginPage/Login';
import Resource from '../ResourcePage/Resource';
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import Add from '../AddResources/Add';

const Body = () => {

    const appRouter = createBrowserRouter(
        [
            
            {
                path: "/",
                element: <LoginPage />  
            },
            {
                path: "/resource",
                element: <Resource />
            },
            {
                path: "/add",
                element: <Add />
            }
        ]
    )

  return (
    <div>
        <RouterProvider router={appRouter} />
    </div>
  )
}

export default Body