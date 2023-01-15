import React, { useState } from 'react';
import '../styles/index.css'
import logo from '../assets/foodVilla.png'


const Title = () => <a href="/" > <img src= {logo} width='100px' /></a>

const Header = function () {
    const [loggedIn, setLoggedIn] = useState(false);
    return (
        <div className='header'>
            <Title />
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
                {loggedIn=== false ? <button onClick = {(()=> {setLoggedIn (true) })}>Login</button> : <button onClick = {(()=> {setLoggedIn (false) })}>Logout</button>}


            </div>
        </div>)
}

export default Header



