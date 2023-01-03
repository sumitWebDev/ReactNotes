import React from'react';
import ReactDOM from 'react-dom';


const heading1 = React.createElement('h1',{
    className: 'heading',
    keys: 'h1',
},'React Heading')

const heading2 = React.createElement('h2',{
    className: 'heading',
    keys: 'h2',
},'React Desc')

const container = React.createElement(
    "div",
    {
      id: "container"
    },
    [heading1, heading2]
  );
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(container)