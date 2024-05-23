import React from 'react';
import LoginPage from '../loginPage/Login';
import Resource from '../ResourcePage/Resource';
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';

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