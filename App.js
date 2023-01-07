import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css'
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

const burgerKing = {
    name : "burger King",
    image :"https://www.shutterstock.com/image-photo/berlin-oct-01-burger-king-260nw-502429909.jpg",
    cusine: ["Burger","American"],
    rating: "4.2"
}
const RestaurantCard = () => {
    return (
        <div className='card'>
            <img src={burgerKing.image} alt='Burger King' />
            <h2>{burgerKing.name}</h2>
            <h3>{burgerKing.cusine.join(',')}</h3>
            <h4>{burgerKing.rating}</h4>
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
// import React from'react';
// import ReactDOM from 'react-dom/client';
// import HeaderComponent from './components/Header'


// const Components =  () => {
//     return <div>{<HeaderComponent/>}</div>
// }

// const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(Components())