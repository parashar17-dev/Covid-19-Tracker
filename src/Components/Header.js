import React, { useContext } from 'react';
import { FormControl, MenuItem, Select } from '@material-ui/core';
import CovidContext from '../Context/CovidTracker/CovidContext';
function Header() {
   const covidContext = useContext(CovidContext);
   const { country, changeCountry, countries } = covidContext;

   return (
      <div className="app_header">
         <h1>Covid-19 Tracker</h1>

         {/* Dropdown of all countries */}
         <FormControl className="app_dropdown">
            {/* List of all countries */}
            <Select variant="outlined" value={country} onChange={changeCountry}>
               {/* Loop through all the countries and show dropdown */}
               <MenuItem value="worldwide">Worldwide</MenuItem>
               {countries.map((country) => (
                  <MenuItem value={country.value}>{country.name}</MenuItem>
               ))}
            </Select>
         </FormControl>
      </div>
   );
}

export default Header;
