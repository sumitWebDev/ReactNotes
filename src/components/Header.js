import React, { useState } from 'react';
import '../styles/index.css'
import logo from '../assets/foodVilla.png'
import { Link } from 'react-router-dom'

const Title = () => <a href="/" > <img src={logo} width='100px' /></a>

const Header = function () {
    const [loggedIn, setLoggedIn] = useState(false);
    console.log('header')
    return (
        <div className='header'>
            <Title />
            <div className="nav-items">
                <ul>
                    <li><Link to="/" >Home</Link></li>
                    <li><Link to="/about" >About</Link></li>
                    <li><Link to="/contact" >Contact</Link></li>
                    <li>Cart</li>
                    <li> <Link to="/login" >Log In</Link> </li>
                </ul>

                {/* {loggedIn === false ? <button onClick={(() => { setLoggedIn(true) })}>Login</button> : <button onClick={(() => { setLoggedIn(false) })}>Logout</button>} */}

            </div>
        </div>)
}

export default Header



