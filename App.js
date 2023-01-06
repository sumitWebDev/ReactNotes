import React from'react';
import ReactDOM1 from 'react-dom/client';

const HeaderComponent = () => <h1>Heading</h1>

const HeaderComponent2 =  () => {
    return <div>{<HeaderComponent/>} <h2>Heading 2</h2></div>
}

const root = ReactDOM1.createRoot(document.getElementById('root'))
root.render(<HeaderComponent2/>)