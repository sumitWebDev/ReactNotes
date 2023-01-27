import React from 'react';
import ReactDOM from 'react-dom/client';
import './src/styles/index.css';
import Header from './src/components/Header'
import Body from './src/components/Body'
import Footer from './src/components/Footer'
import { createBrowserRouter, RouterProvider, Outlet, createHashRouter } from 'react-router-dom';
import About from './src/components/About';
import Error from '/src/components/Error';
import Contact from './src/components/Contact';
import RestaurantMenu from './src/components/RestaurantMenu';
import Login from './src/components/Login'
import Profile from './src/components/Profile'
/**
 * Header
 * - Logo
 * - List Items
 * - Cart
 *
 * Body
 * - search bar
 * - restaurants
 *  - Restaurant Info Cards
 *    - Image
 *    - Name
 *    - Description
 *    - Cusines
 *
 * Footer
 * - Links
 */


const AppLayout = () => { //Func Component
    return (
        <React.Fragment>
            <Header />
            <Outlet />
            <Footer />
            {

            }
        </React.Fragment>
    )
}

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        errorElement: <Error />,
        children: [
            {
                path: 'about',
                element: <About />,
                children: [
                    {
                        path: 'profile', //no need to give /profile. This results to --> localhost:1234/profile
                        element: <Profile />
                    },
                ]
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '/',
                element: <Body />
            },
            {
                path: '/restaurant/:id',
                element: <RestaurantMenu />
            },
            {
                path: '/login',
                element: <Login />
            }
        ]
    },
    {
        path: '/about',
        element: <About />
    },
    {
        path: '/contact',
        element: <Contact />
    },

])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<RouterProvider router={appRouter} />)
