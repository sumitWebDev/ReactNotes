import React from'react';
import ReactDOM from 'react-dom/client';
import HeaderComponent from './components/Header'


const Components =  () => {
    return <div>{<HeaderComponent/>}</div>
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(Components())