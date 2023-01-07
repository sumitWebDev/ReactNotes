import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css'
import restaurantList from './data/restaurant-data'

const restaurantList = restaurantList;
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
const Title = () => <a href="/" > <h1>Food Villa</h1></a>

const Header = function () {
    return (
        <div className='header'>
            <Title />
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>Home</li>
                    <li>Home</li>
                    <li>Home</li>
                </ul>
            </div>
        </div>)
}


const RestaurantCard = () => {
    return (
        <div className='card'>
            <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
                restaurantList[0].data.cloudinaryImageId} alt='Burger King' />
            <h2>{restaurantList[0].data.name}</h2>
            <h3>{restaurantList[0].data.cuisines.join(', ')}</h3>
            <h4>{restaurantList[0].data.lastMileTravelString}</h4>
        </div>
    )
}

const Body = () => {
    return (
        <div class="restaurant-lists">
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
        </div>
    )
}
const Footer = () => {
    return (
        <h4>
            Footer
        </h4>
    )
}
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
