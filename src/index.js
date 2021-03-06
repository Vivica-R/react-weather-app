import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import "bootstrap/dist/css/bootstrap.css";
import App from './App';
import reportWebVitals from './reportWebVitals';
import Copyright from "./Copyright";

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Copyright />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
