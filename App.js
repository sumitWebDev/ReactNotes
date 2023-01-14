import React from 'react';
import ReactDOM from 'react-dom/client';
import './src/styles/index.css';
import Header from './src/components/Header'
import Body from './src/components/Body'
import Footer from './src/components/Footer'


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
            <Body />
            <Footer />
            {

            }
        </React.Fragment>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<AppLayout />)
