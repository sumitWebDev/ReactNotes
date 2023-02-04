import React,{lazy, Suspense,useState } from 'react';
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
import UserContext from './src/utils/UserContext';
import Test from './src/components/Test';
import {Provider} from 'react-redux'
import store from './src/utils/store'
import Cart from './src/components/Cart';
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


const AppLayout = () => {

    const [user, setUser] = useState({
        name:'Sumit',
        email: "sumit@gmail.com"
    })
    return (
        <Provider store={store}>
            {/* <Test/> */}
            <UserContext.Provider value={{user: user,setUser:setUser}}>
                <Header />
                <Outlet />
                <Footer />
            </UserContext.Provider>

        </Provider>
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
                path: '/cart',
                element:
                    <Cart />
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
