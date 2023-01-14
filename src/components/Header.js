import React, { useState } from 'react';
import '../styles/index.css'



const Title = () => <a href="/" > <h1>Food Villa</h1></a>

const Header = function () {
    const [loggedIn, setLoggedIn] = useState(false);
    return (
        <div className='header'>
            <Title />
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>Login</li>
                    <li>Home</li>
                    <li>Home</li>
                </ul>
                {loggedIn=== false ? <button onClick = {(()=> {setLoggedIn (true) })}>Login</button> : <button onClick = {(()=> {setLoggedIn (false) })}>Logout</button>}


            </div>
        </div>)
}

export default Header



