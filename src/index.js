import React from 'react';
//import ReactDOM from 'react-dom';
import App from './App/index.js';
import './index.css';
import {createRoot} from 'react-dom/client';

// React 17
/*
ReactDOM.render(
  <App />,
  document.getElementById('root')
);
*/

// React 18

const container = document.getElementById('root');
const root = createRoot(container);
root.render( 
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


