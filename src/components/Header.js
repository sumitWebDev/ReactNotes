import React, { useState } from 'react';
import '../styles/index.css'
import logo from '../assets/foodVilla.png'
import { Link } from 'react-router-dom'

const Title = () => <a href="/" > <img src={logo} className="h-28 pr-2"/></a>

const Header = function () {
    const [loggedIn, setLoggedIn] = useState(false);
    return (
        <div className='flex justify-between  bg-pink-50 shadow-lg'>
            <Title />
            <div className="nav-items">
                <ul class="flex py-10 ">
                    <li className="px-3"><Link to="/" >Home</Link></li>
                    <li className="px-3"><Link to="/about" >About</Link></li>
                    <li className="px-3"><Link to="/contact" >Contact</Link></li>
                    <li className="px-3">Cart</li>
                    <li className="px-3"> <Link to="/instamart" >Instamart</Link> </li>
                    <li className="px-3"> <Link to="/login" >Log In</Link> </li>
                </ul>

                {/* {loggedIn === false ? <button onClick={(() => { setLoggedIn(true) })}>Login</button> : <button onClick={(() => { setLoggedIn(false) })}>Logout</button>} */}

            </div>
        </div>)
}

export default Header



