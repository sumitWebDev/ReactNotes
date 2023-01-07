import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css'

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

const Body = () => {
    return (
        <h4>
            Body
        </h4>
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