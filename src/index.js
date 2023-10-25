import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root')); // this is an object created to render the app in the targeted DOM element 
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') // here the element with id - root is the targeted DOM element and here root in t he bracket is the const root that is a object
);


