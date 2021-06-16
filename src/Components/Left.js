import React, { useContext, useEffect } from 'react';
import Stats from './Stats';
import Map from './Map1';
import Header from './Header';

function Left() {
   return (
      <div className="app_left">
         <Header />
         <Stats />
         <Map />
      </div>
   );
}

export default Left;
