import React,{lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './src/styles/index.css';
import Header from './src/components/Header'
import Body from './src/components/Body'
import Footer from './src/components/Footer'
import { createBrowserRouter, RouterProvider, Outlet, createHashRouter } from 'react-router-dom';
import Error from '/src/components/Error';
import Contact from './src/components/Contact';
import RestaurantMenu from './src/components/RestaurantMenu';
import Login from './src/components/Login'
import Profile from './src/components/Profile'
import Shimmer from './src/components/Shimmer';

const Instamart = lazy(()=>import ('./src/components/Instamart'))
const About = lazy(()=>import ('./src/components/About'))
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
                element: <Suspense>
                    <About />
                    </Suspense>,
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
                path: '/instamart',
                element: <Suspense fallback={<Shimmer/>}>
                    <Instamart />
                    </Suspense>
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
