import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import CovidState from './Context/CovidTracker/CovidState';
ReactDOM.render(
   <React.StrictMode>
      <CovidState>
         <App />
      </CovidState>
   </React.StrictMode>,
   document.getElementById('root')
);
