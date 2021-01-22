import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'font-awesome/css/font-awesome.min.css';
import {BrowserRouter} from 'react-router-dom'
// import 'bootstrap/dist/css/bootstrap.min.css';

// ReactDOM.render(
//   <React.StrictMode>
//     <App/>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// adding context and auth from firebase.
ReactDOM.render(
  <BrowserRouter>
    
      <App />
  
  </BrowserRouter>
  , document.getElementById('root')
  );

