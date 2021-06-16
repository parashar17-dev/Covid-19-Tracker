import React, { useContext, useEffect, useState } from 'react';
import { MapContainer as LeafletMap, TileLayer } from 'react-leaflet';
import '../Css-Files/Map.css';
import { showDataOnMap } from './util';
import CovidContext from '../Context/CovidTracker/CovidContext';

function Map() {
   const covidContext = useContext(CovidContext);
   const { center, tableData, casesType } = covidContext;

   const [map, setmap] = useState(null);
   if (map) {
      map.flyTo(center);
   }
   return (
      <div className="map">
         <LeafletMap
            center={center}
            zoom={3}
            whenCreated={setmap}
            scrollWheelZoom={false}
         >
            <TileLayer
               url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
               attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            {/* Loop through Countries and draw circles on the screen*/}
            {showDataOnMap(tableData, casesType)}
         </LeafletMap>
      </div>
   );
}

export default Map;
