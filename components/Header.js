import React from 'react';
import Logo from '../assets/logo.png'
import User from '../assets/user.svg'
import '../styles/header.css'

const HeaderComponent = () => (
    <div className = 'grid-container header'>
         <input class='grid-item search' type="text" placeholder="Type Something"/>
        <img class="logo" src={Logo} alt="logo" />
        <div class="user-image"><img class="user" src={User} alt="user" /></div>
    </div>


)

export default HeaderComponent



