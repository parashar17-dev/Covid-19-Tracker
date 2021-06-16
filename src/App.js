import React, { useContext, useEffect } from 'react';
import Right from './Components/Right.js';
import Left from './Components/Left.js';
import './Css-Files/App.css';
import CovidContext from './Context/CovidTracker/CovidContext.js';
import 'leaflet/dist/leaflet.css';
function App() {
   const covidContext = useContext(CovidContext);

   useEffect(() => {
      covidContext.InitialCountryInfo();
      covidContext.getCountries();
   }, []);

   return (
      <div className="app">
         <Left />
         <Right />
      </div>
   );
}

export default App;
