import React from 'react';
import '../styles/index.css'

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

export default Header



