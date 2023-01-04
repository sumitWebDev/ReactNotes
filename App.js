import React from'react';
import ReactDOM from 'react-dom/client';

const HeaderComponent = () => <h1>Heading</h1>

const HeaderComponent2 = function (){
    return <div>{ HeaderComponent () } <h2>Heading 2</h2></div>
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<HeaderComponent2/>)